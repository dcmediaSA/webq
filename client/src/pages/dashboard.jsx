import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { SocketContext } from '../context/socket-context';
import { Layout, SectionTitle, SEO, EmptyList, Card } from '../components';

const StyledContainer = styled.div`
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0 auto;
    padding: var(--space-16) var(--space-16) var(--space-0) var(--space-16);

    @media (min-width: 1280px) {
        padding: var(--space-24) var(--space-24) var(--space-0) var(--space-24);
        align-items: flex-start;
    }
`;

const StyledGrid = styled.div`
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--space-24);
    height: 100vh;
    margin: 0 auto;
    padding: var(--space-16);

    @media (min-width: 1280px) {
        padding: var(--space-24);
        align-items: flex-start;
        flex-direction: row;
    }
`;

const StyledSection = styled.section`
    background-color: var(--gray-50);
    padding: var(--space-16);

    @media (min-width: 768px) {
        padding: var(--space-24);
    }
`;

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
        <Layout>
            <SEO title="Dashboard" />

            <StyledContainer>
                <Card>
                    <SectionTitle
                        title="Notifications"
                        subtitle="All relevant alerts will be displayed here."
                    />
                    <StyledSection>
                        {ticket.number ? (
                            <h1>
                                {`Ticket ${ticket.number}, Please proceed to Counter ${ticket.counter}`}
                            </h1>
                        ) : (
                            <EmptyList />
                        )}
                    </StyledSection>
                </Card>
            </StyledContainer>

            <StyledGrid>
                <Card>
                    <SectionTitle
                        title="Queue"
                        subtitle="Please wait for your ticket to be called."
                    />
                    <StyledSection>
                        {queue.length !== 0 ? (
                            <>
                                {queue.map(({ number }) => (
                                    <ul>
                                        <li>{number}</li>
                                    </ul>
                                ))}
                            </>
                        ) : (
                            <EmptyList />
                        )}
                    </StyledSection>
                </Card>

                <Card>
                    <SectionTitle title="Now Serving" subtitle="People currently being helped." />
                    <StyledSection>
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
                            <EmptyList />
                        )}
                    </StyledSection>
                </Card>
            </StyledGrid>
        </Layout>
    );
}
