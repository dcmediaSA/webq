import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { IoAddCircle } from 'react-icons/io5';
import { SocketContext } from '../context/socket-context';
import { SectionTitle, SEO, Button, Card } from '../components';

const StyledForm = styled.form`
    display: grid;
    background-color: var(--gray-50);
    padding: var(--space-16);

    @media (min-width: 768px) {
        padding: var(--space-24);
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    input[type='number'] {
        border: 1px solid var(--gray-200);
        background: var(--white);
        padding: var(--space-16);
        border-radius: var(--space-4);
        margin-bottom: var(--space-16);

        @media (min-width: 768px) {
            margin-right: var(--space-24);
            margin-bottom: var(--space-0);
        }

        &::placeholder {
            color: var(--gray-600);
        }
    }
`;

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

            <Card>
                <SectionTitle
                    title="Counter Setup"
                    subtitle="Select your assigned counter number below."
                />
                <StyledForm>
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
                </StyledForm>
            </Card>
        </>
    );
}
