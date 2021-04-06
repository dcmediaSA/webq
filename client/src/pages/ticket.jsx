import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { IoPrint } from 'react-icons/io5';
import { SocketContext } from '../context/socket-context';
import { Layout, Wrapper, SectionTitle, SEO, Button, Card } from '../components';

const StyledSection = styled.section`
    background-color: var(--gray-50);
    padding: var(--space-16);

    @media (min-width: 768px) {
        padding: var(--space-24);
    }
`;

export default function Ticket() {
    const [ticket, setTicket] = useState(null);

    const { socket } = useContext(SocketContext);

    const handleClick = () => {
        socket.emit('ticket.create', null, (response) => {
            setTicket(response);
            console.log(`printing ticket: ${ticket.number}`);
        });
    };

    return (
        <Layout>
            <SEO title="Ticket" />

            <Wrapper>
                {' '}
                <Card>
                    <SectionTitle
                        title="Ticketing System"
                        subtitle="Print your ticket and join the queue."
                    />
                    <StyledSection>
                        <Button event={handleClick}>
                            <span>Print Ticket</span>
                            <IoPrint />
                        </Button>
                    </StyledSection>
                </Card>
            </Wrapper>
        </Layout>
    );
}
