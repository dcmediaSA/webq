import { createGlobalStyle } from 'styled-components';

import './reset.css';
import './color.css';
import './space.css';

const GlobalStyle = createGlobalStyle`
    :root {
        --shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    html, body {
        background: var(--gray-100);
        font-family: "Poppins", sans-serif;
        font-style: normal;
    }
`;

export default GlobalStyle;
