import { createGlobalStyle } from 'styled-components';

import './reset.css';
import './color.css';
import './space.css';

const GlobalStyle = createGlobalStyle`
    :root {
        --shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    * {
        scrollbar-width: thin;
        scrollbar-color: var(--gray-500);
    }

    *::-webkit-scrollbar {
        width: 12px;
    }

    *::-webkit-scrollbar-track {
        background: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--gray-500);
    }

    html, body {
        background: var(--gray-100);
        font-family: "Poppins", sans-serif;
        font-style: normal;
    }
`;

export default GlobalStyle;
