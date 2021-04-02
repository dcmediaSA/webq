import React, { useState, useEffect, useContext } from 'react';
import { SocketContext } from '../context/socket-context';

export default function Dashboard() {
    const [ticket, setTicket] = useState({ number: null, counter: null });
    const [tickets, setTickets] = useState([]);
    const [queue, setQueue] = useState([]);

    const { socket } = useContext(SocketContext);

    useEffect(() => {
        socket.on('ticket.call', (response) => {
            const { number, counter } = response;
            setTicket({ number, counter });
        });

        socket.on('ticket.current', (response) => {
            setTickets(response.assigned);
            setQueue(response.queue);
        });
    }, [socket]);

    return (
        <>
            <section>
                {ticket.number ? (
                    <h1>
                        {`Ticket ${ticket.number}, Please proceed to Counter ${ticket.counter}`}
                    </h1>
                ) : (
                    ''
                )}
            </section>

            <section>
                {queue.length !== 0 ? (
                    <>
                        {queue.map(({ number }) => (
                            <ul>
                                <li>{number}</li>
                            </ul>
                        ))}
                    </>
                ) : (
                    ''
                )}
            </section>

            <section>
                {tickets.length !== 0 ? (
                    <>
                        {tickets.map(({ number, counter }) => (
                            <ul>
                                <li>{number}</li>
                                <li>{counter}</li>
                            </ul>
                        ))}
                    </>
                ) : (
                    ''
                )}
            </section>
        </>
    );
}
