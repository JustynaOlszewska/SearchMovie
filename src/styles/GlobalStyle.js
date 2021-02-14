import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
${normalize};

body {
    box-sizing: border-box;
    font-size: 16px;
min-height: 100vh;
width: 100%;
font-family: 'Roboto',sans-serif;
display: flex;
justify-content: center;
margin: 0 auto; 
background-color: #000;
background-repeat: no-repeat;
background-size: cover;
overflow-x: hidden;

};
`;

export default GlobalStyle;