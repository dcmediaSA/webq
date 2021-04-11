import React, { useState, useContext, useRef } from 'react';
import styled from 'styled-components';
import { IoPrint } from 'react-icons/io5';
import { useReactToPrint } from 'react-to-print';
import { SocketContext } from '../context/socket-context';
import { Layout, Label, Wrapper, SectionTitle, SEO, Button, Card } from '../components';

const StyledSection = styled.section`
    background-color: var(--gray-50);
    padding: var(--space-16);

    @media (min-width: 768px) {
        padding: var(--space-24);
    }
`;

export default function Ticket() {
    const [ticket, setTicket] = useState(null);
    const componentRef = useRef();

    const { socket } = useContext(SocketContext);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const handleClick = () => {
        socket.emit('ticket.create', null, (response) => {
            setTicket(response);
            handlePrint();
        });
    };

    return (
        <Layout>
            <SEO title="Ticket" />

            <Wrapper>
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
                    {ticket && (
                        <div style={{ display: 'none' }}>
                            <Label number={ticket.number} ref={componentRef} />
                        </div>
                    )}
                </Card>
            </Wrapper>
        </Layout>
    );
}
