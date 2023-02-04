import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.8rem;
  border: 0;
  background: hsl(278, 68%, 11%);
  color: #fff;
  border-radius: 0.4rem;
  font-size: 1.2rem;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    transition: 0.3s ease-in-out;
    filter: brightness(1.5);
    transform: scale(1.02);
    border-radius: 0;
  }
`;
