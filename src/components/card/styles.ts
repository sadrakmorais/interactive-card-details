import styled, { css } from 'styled-components';
import backgroundCardFront from '../../assets/images/bg-card-front.png';
import backgroundCardBack from '../../assets/images/bg-card-back.png';

type WrapperCardProps = {
  styleCard: string;
  rigthPosition: string;
};

type chosedBGProps = {
  [key: string]: any;
};

const chosedBG: chosedBGProps = {
  front: backgroundCardFront,
  back: backgroundCardBack,
};
export const WrapperCard = styled.div<WrapperCardProps>`
  ${({ rigthPosition, styleCard }) => css`
    background-image: url(${chosedBG[styleCard]});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1.5rem;
    padding: 7rem 0;
    position: relative;
    right: ${rigthPosition};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  `}
`;
