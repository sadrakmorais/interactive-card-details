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
  height: 100vh;
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

export const CardFront = styled.div`
  header {
    display: flex;
    gap: 1.5rem;
    align-items: center;

    .avatar1 {
      width: 3rem;
      height: 3rem;
      background: #fff;
      border-radius: 50%;
    }
    .avatar2 {
      width: 2rem;
      height: 2rem;
      background: transparent;
      border: 1px solid #fff;
      border-radius: 50%;
    }
  }

  input {
    margin-top: 3rem;
    width: 100%;
    font-size: 1.5rem;
    color: #fff;
    letter-spacing: 0.15rem;
    background: transparent;
    border: 0;
    pointer-events: none;

    &::placeholder {
      color: #fff;
    }
  }

  footer {
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;
    span {
      color: #fff;
      font-size: 1rem;
      text-transform: uppercase;
      font-family: 'Space Grotesk', sans-serif;
    }
  }
`;
export const CardBack = styled.div``;
export const WrapperForm = styled.section`
  background: blue;
`;
