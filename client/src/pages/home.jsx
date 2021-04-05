import React, { useState, useContext } from 'react';
import { IoAddCircle } from 'react-icons/io5';
import { SocketContext } from '../context/socket-context';
import { SectionTitle, SEO, Button } from '../components';

export default function Home() {
    const { socket } = useContext(SocketContext);
    const [counter, setCounter] = useState('');

    const handleChange = (event) => {
        setCounter(event.target.value);
    };

    const handleClick = (e) => {
        if (!counter) {
            e.preventDefault();
        } else {
            socket.emit('counter.add', parseInt(counter, 10));
        }
    };

    return (
        <>
            <SEO title="Home" />

            <SectionTitle
                title="Counter Setup"
                subtitle="Select your assigned counter number below."
            />

            <form>
                <input
                    required
                    type="number"
                    min="1"
                    max="99"
                    defaultValue="0"
                    onChange={handleChange}
                />

                <Button event={handleClick} internalLink={`/counter?number=${counter}`}>
                    <span>Add Counter</span>
                    <IoAddCircle />
                </Button>
            </form>
        </>
    );
}
