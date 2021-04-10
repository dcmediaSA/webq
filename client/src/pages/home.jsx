import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { IoAddCircle, IoTicket, IoMegaphone } from 'react-icons/io5';
import { SocketContext } from '../context/socket-context';
import { Layout, SectionTitle, SEO, Button, Card, Wrapper } from '../components';

const StyledForm = styled.form`
    display: grid;
    gap: var(--space-16);
    background-color: var(--gray-50);
    padding: var(--space-16);

    @media (min-width: 768px) {
        padding: var(--space-24);
        gap: var(--space-24);
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    input[type='number'] {
        border: 1px solid var(--gray-200);
        background: var(--white);
        padding: var(--space-16);
        border-radius: var(--space-4);

        &::placeholder {
            color: var(--gray-600);
        }
    }
`;

const StyledFooter = styled.footer`
    display: grid;
    gap: var(--space-16);
    background-color: var(--white);
    border-top: 1px solid var(--gray-200);
    padding: var(--space-16);

    @media (min-width: 768px) {
        gap: var(--space-24);
        padding: var(--space-24);
        grid-template-columns: repeat(2, minmax(0, 1fr));
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
        <Layout>
            <SEO title="Home" />

            <Wrapper>
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
                            defaultValue="0"
                            onChange={handleChange}
                        />

                        <Button event={handleClick} internalLink={`/counter?number=${counter}`}>
                            <span>Add Counter</span>
                            <IoAddCircle />
                        </Button>
                    </StyledForm>

                    <StyledFooter>
                        <Button internalLink="/ticket">
                            <span>Ticketing System</span>
                            <IoTicket />
                        </Button>
                        <Button internalLink="/dashboard">
                            <span>Notification Dashboard</span>
                            <IoMegaphone />
                        </Button>
                    </StyledFooter>
                </Card>
            </Wrapper>
        </Layout>
    );
}
