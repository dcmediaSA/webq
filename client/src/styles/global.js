import { createGlobalStyle } from 'styled-components';

import './reset.css';
import './color.css';
import './space.css';

const GlobalStyle = createGlobalStyle`
    html, body {
        background: var(--gray-100);
        font-family: "Poppins", sans-serif;
        font-style: normal;
    }
`;

export default GlobalStyle;
