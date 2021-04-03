import React, { useState, useContext } from 'react';
import { SocketContext } from '../context/socket-context';
import { SectionTitle } from '../components';

export default function Ticket() {
    const [ticket, setTicket] = useState(null);

    const { socket } = useContext(SocketContext);

    const newTicket = () => {
        socket.emit('ticket.create', null, (response) => {
            setTicket(response);
        });
    };

    return (
        <>
            <SectionTitle
                title="Ticketing System"
                subtitle="Print your ticket and join the queue."
            />

            <button onClick={newTicket} type="button">
                Print Ticket
            </button>

            {ticket ? <span>{ticket.number}</span> : ''}
        </>
    );
}
