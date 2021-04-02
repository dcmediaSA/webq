import React from 'react';
import RouterPage from './pages/router';
import GlobalStyle from './styles/global';
import { SocketProvider } from './context/socket-context';

import '@fontsource/poppins';
import '@fontsource/space-mono';

export default function App() {
    return (
        <SocketProvider>
            <GlobalStyle />
            <RouterPage />
        </SocketProvider>
    );
}
