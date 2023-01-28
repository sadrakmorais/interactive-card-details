import { ViewerCard } from '../../components/card';
import * as S from './styles';

export function Home() {
  const formatCardNumber = (value: string) => {
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
    const onlyNumbers = value.replace(/[^\d]/g, '');

    return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
      [$1, $2, $3, $4].filter((group) => !!group).join(' ')
    );
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
                  <span>{'Jane Aplleseed'}</span>
                  <span>
                    {10}/{32}
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
          <S.WrapperForm></S.WrapperForm>
        </S.WrapperContent>
      </S.Wrapper>
    </S.Container>
  );
}
