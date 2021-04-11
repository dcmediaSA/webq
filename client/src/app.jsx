import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import RouterPage from './pages/router';
import GlobalStyle from './styles/global';
import { SocketProvider } from './context/socket-context';

import '@fontsource/poppins';
import '@fontsource/space-mono';

export default function App() {
    return (
        <HelmetProvider>
            <SocketProvider>
                <GlobalStyle />
                <RouterPage />
            </SocketProvider>
        </HelmetProvider>
    );
}
