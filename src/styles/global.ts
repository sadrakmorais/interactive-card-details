import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap');

*{
  font-family: 'Space Grotesk';
margin: 0;
padding: 0;
box-sizing: border-box;
font-weight: 500;
}

h1,span,input{
  font-family: 'Space Grotesk';

}
`;
