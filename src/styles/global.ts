import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    :focus {
        outline: 0;
        box-shadow: 0 0 0 1px ${(props) => props.theme.colors.blue};
    }

    body {
        background-color: ${(props) => props.theme.colors.baseBackground};
        -webkit-font-smoothing: antialiased;
        color: ${({theme}) => theme.colors.baseText};
    }

    body, input, textarea, button {
        font: 400 1rem Nunito, sans-serif;
    }
`;
