import { ViewerCard } from '../../components/card';
import * as S from './styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

type FormFieldsProps = {
  cardholdername: string;
  cardnumber: string;
  expmm: string;
  expyy: string;
  cvc: string;
};

type ExpDateProps = {
  mm: string;
  yy: string;
};

export function Home() {
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardCVC, setCardCVC] = useState('');
  const [expDate, setExpDate] = useState<ExpDateProps>({
    mm: '00',
    yy: '00',
  });

  const schemaValidation = yup
    .object({
      cardholdername: yup.string().required('Can`t be blank'),
      cardnumber: yup
        .string()
        .min(16, 'Wrong format')
        .max(16, 'Wrong format')
        .matches(/^[1-9]{16}$/, 'Wrong format,numbers only')
        .required('Can`t be blank'),
      expmm: yup.string().max(2, 'Wrong format').required('Can`t be blank'),
      expyy: yup.string().max(2, 'Wrong format').required('Can`t be blank'),
      cvc: yup.string().max(3).required('Can`t be blank'),
    })
    .required();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormFieldsProps>({
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit: SubmitHandler<FormFieldsProps> = (data) => {
    console.log(data);
  };

  const formatCardNumber = (numberCard: string) => {
    const defaultNumberCardGroup = '0000';

    return `${numberCard.slice(0, 4) || defaultNumberCardGroup} ${
      numberCard.slice(4, 8) || defaultNumberCardGroup
    } ${numberCard.slice(8, 12) || defaultNumberCardGroup} ${
      numberCard.slice(12, 16) || defaultNumberCardGroup
    }`;
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Background></S.Background>
        <S.WrapperContent>
          <S.WrapperCards>
            <ViewerCard style="front" rigthPosition={200}>
              <S.CardFront>
                <header>
                  <div className="avatar1" />
                  <div className="avatar2" />
                </header>
                <h1>{formatCardNumber(cardNumber)}</h1>
                <footer>
                  <span>{cardHolderName || 'your name'}</span>
                  <span>
                    {expDate.mm.slice(0, 2)}/{expDate.yy.slice(0, 2)}
                  </span>
                </footer>
              </S.CardFront>
            </ViewerCard>
            <ViewerCard style="back" rigthPosition={50}>
              <S.CardBack>
                <span>{cardCVC.slice(0, 3) || '000'}</span>
              </S.CardBack>
            </ViewerCard>
          </S.WrapperCards>
          <S.WrapperForm>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="Cardholder Name"
                {...register('cardholdername')}
                placeholder="e.g. Jane Appleseed"
                error={errors.cardholdername}
                onChange={(event) => setCardHolderName(event.target.value)}
              />
              <Input
                label="Card Number"
                placeholder="e.g. 1234 4678 9123 0000"
                {...register('cardnumber')}
                error={errors.cardnumber}
                onChange={(event) => setCardNumber(event.target.value)}
              />
              <div className="expdate">
                <section>
                  EXP.DATE (MM/YY)
                  <div className="fields">
                    <Input
                      label=""
                      placeholder="MM"
                      {...register('expmm')}
                      error={errors.expmm}
                      onChange={(event) =>
                        setExpDate({
                          mm: event.target.value,
                          yy: expDate.yy,
                        })
                      }
                    />
                    <Input
                      label=""
                      placeholder="YY"
                      {...register('expyy')}
                      error={errors.expyy}
                      onChange={(event) =>
                        setExpDate({
                          mm: expDate.mm,
                          yy: event.target.value,
                        })
                      }
                    />
                  </div>
                </section>
                <Input
                  label="cvc"
                  {...register('cvc')}
                  error={errors.cvc}
                  placeholder="e.g. 123"
                  onChange={(event) => setCardCVC(event.target.value)}
                />
              </div>
              <Button title="Confirm" />
            </S.Form>
          </S.WrapperForm>
        </S.WrapperContent>
      </S.Wrapper>
    </S.Container>
  );
}
