import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    background-color: #F9F9F9;
}
* {
    box-sizing: border-box;
    font-family: 'Arvo', serif;
}
button {
    cursor: pointer;
}
`;

export default GlobalStyle;