import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useSocket from '../hooks/use-socket';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
    const host = import.meta.env.VITE_HOST;
    const { socket, online } = useSocket(`ws://${host}:5001`);

    return <SocketContext.Provider value={{ socket, online }}>{children}</SocketContext.Provider>;
};

SocketProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
