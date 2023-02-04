import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  label {
    text-transform: uppercase;
    font-size: 1rem;
    color: hsl(278, 68%, 11%);
  }

  input {
    border-radius: 0.6rem;
    outline: none;
    border: 2px solid hsl(270, 3%, 87%);
    padding: 0.8rem 0.8rem;
    margin-top: 0.8rem;
    background-color: transparent;
    &.hasError {
      border-color: #ff3333;
      box-shadow: none;
    }
  }
`;

export const Error = styled.div`
  height: 1.8rem;
  display: flex;
  small {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    &.hasError {
      color: #ff3333;
    }
  }
`;
