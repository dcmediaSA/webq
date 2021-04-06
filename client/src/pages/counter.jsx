import React, { useState, useContext } from 'react';
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';
import { SocketContext } from '../context/socket-context';
import { SectionTitle, SEO, Button, Card } from '../components';

const Redirect = () => {
    const searchParams = new URLSearchParams(window.location.search);

    if (!searchParams.has('number')) {
        window.location = '/';
    }

    const counter = searchParams.get('number');

    return parseInt(counter, 10);
};

export default function Counter() {
    const [ticket, setTicket] = useState(null);
    const [active, setActive] = useState(false);

    const { socket } = useContext(SocketContext);
    const counter = Redirect();

    const handleClick = () => {
        socket.emit('counter.add', parseInt(counter, 10));

        if (!active) {
            socket.emit('ticket.assign', counter, (response) => {
                setTicket(response);
            });
            setActive(true);
        } else {
            socket.emit('ticket.retract', ticket, (response) => {
                setTicket(response);
            });
            setActive(false);
        }
    };

    return (
        <>
            <SEO title="Counter" />

            <Card>
                <SectionTitle
                    title={`Counter ${counter}`}
                    subtitle="Notify waiting cliients you're ready to see them."
                />
                <Button event={handleClick}>
                    {!active ? (
                        <>
                            <span>Start Session</span>
                            <IoAddCircle />
                        </>
                    ) : (
                        <>
                            <span>End Session</span>
                            <IoRemoveCircle />
                        </>
                    )}
                </Button>
            </Card>
        </>
    );
}
