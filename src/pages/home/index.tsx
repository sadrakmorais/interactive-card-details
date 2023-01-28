import { ViewerCard } from '../../components/card';
import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Background></S.Background>
        <S.WrapperContent>
          <S.WrapperCards>
            <ViewerCard style="front" rigthPosition={200}>
              <h1>teste</h1>
            </ViewerCard>
            <ViewerCard style="back" rigthPosition={50}>
              <h1>teste</h1>
            </ViewerCard>
          </S.WrapperCards>
          <S.WrapperForm></S.WrapperForm>
        </S.WrapperContent>
      </S.Wrapper>
    </S.Container>
  );
}
