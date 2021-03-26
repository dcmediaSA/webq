import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { SocketContext } from '../context/socket-context';

export default function Home() {
    const { socket } = useContext(SocketContext);
    const [counter, setCounter] = useState('');

    const handleChange = (event) => {
        setCounter(event.target.value);
    };

    const handleSubmit = (e) => {
        if (!counter) {
            e.preventDefault();
        } else {
            socket.emit('counter.add', parseInt(counter, 10));
        }
    };

    return (
        <>
            <form>
                <input
                    required
                    type="number"
                    min="1"
                    max="99"
                    defaultValue="0"
                    onChange={handleChange}
                />

                <Link onClick={handleSubmit} to={`/counter?number=${counter}`}>
                    <button type="submit">Add Counter</button>
                </Link>
            </form>
        </>
    );
}
