import { ViewerCard } from '../../components/card';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/input';
import { Button } from '../../components/button';

export function Home() {
  const formatCardNumber = (value: string) => {
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
    const onlyNumbers = value.replace(/[^\d]/g, '');

    return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
      [$1, $2, $3, $4].filter((group) => !!group).join(' ')
    );
  };

  const { handleSubmit, register } = useForm();

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
            <S.Form onSubmit={handleSubmit((data) => console.log(data))}>
              <Input label="Cardholder Name" {...register('cardholdername')} />
              <Input label="Card Number" {...register('cardnumber')} />
              <div className="expdate">
                <section>
                  exp.date (MM/YY)
                  <div className="fields">
                    <Input label="" {...register('expmm')} />
                    <Input label="" {...register('expyy')} />
                  </div>
                </section>
                <Input label="cvc" {...register('cvc')} />
              </div>
              <Button title="Confirm" />
            </S.Form>
          </S.WrapperForm>
        </S.WrapperContent>
      </S.Wrapper>
    </S.Container>
  );
}
