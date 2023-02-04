import { ViewerCard } from '../../components/card';
import * as S from './styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormFieldsProps = {
  cardholdername: string;
  cardnumber: string;
  expmm: string;
  expyy: string;
  cvc: string;
};

export function Home() {
  const formatCardNumber = (value: string) => {
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
    const onlyNumbers = value.replace(/[^\d]/g, '');

    return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
      [$1, $2, $3, $4].filter((group) => !!group).join(' ')
    );
  };

  const schemaValidation = yup
    .object({
      cardholdername: yup.string().required('Can`t be blank'),
      cardnumber: yup
        .string()
        .min(16, 'Wrong format')
        .matches(/^[1-9]{16}$/, 'Wrong format,numbers only')
        .required('Can`t be blank'),
      expmm: yup
        .string()
        .max(2, 'Adicione apenas 2 dígitos')
        .required('Can`t be blank'),
      expyy: yup
        .string()
        .max(2, 'Adicione apenas 2 dígitos')
        .required('Can`t be blank'),
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
                <h1>{'0000 0000 0000 0000'}</h1>
                <footer>
                  <span>{'your name'}</span>
                  <span>
                    {'00'}/{'00'}
                  </span>
                </footer>
              </S.CardFront>
            </ViewerCard>
            <ViewerCard style="back" rigthPosition={50}>
              <S.CardBack>
                <span>{'000'}</span>
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
              />
              <Input
                label="Card Number"
                placeholder="e.g. 1234 4678 9123 0000"
                {...register('cardnumber')}
                error={errors.cardnumber}
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
                    />
                    <Input
                      label=""
                      placeholder="YY"
                      {...register('expyy')}
                      error={errors.expyy}
                    />
                  </div>
                </section>
                <Input
                  label="cvc"
                  {...register('cvc')}
                  error={errors.cvc}
                  placeholder="e.g. 123"
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
