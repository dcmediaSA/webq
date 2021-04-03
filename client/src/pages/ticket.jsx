import React, { useState, useContext } from 'react';
import { SocketContext } from '../context/socket-context';
import { SectionTitle, SEO } from '../components';

export default function Ticket() {
    const [ticket, setTicket] = useState(null);

    const { socket } = useContext(SocketContext);

    const newTicket = () => {
        socket.emit('ticket.create', null, (response) => {
            setTicket(response);
            console.log(`printing ticket: ${ticket.number}`);
        });
    };

    return (
        <>
            <SEO title="Ticket" />

            <SectionTitle
                title="Ticketing System"
                subtitle="Print your ticket and join the queue."
            />

            <button onClick={newTicket} type="button">
                Print Ticket
            </button>
        </>
    );
}
