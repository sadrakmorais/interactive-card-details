import styled from 'styled-components';
import backgroundWEB from '../../assets/images/bg-main-desktop.png';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.aside`
  background-image: url(${backgroundWEB});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Wrapper = styled.section`
  max-width: 1440px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const WrapperContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 6fr;
  padding: 8rem 3rem;
`;

export const WrapperCards = styled.section`
  position: relative;
  right: 100px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const CardFront = styled.div``;
export const CardBack = styled.div``;
export const WrapperForm = styled.section`
  background: blue;
`;
