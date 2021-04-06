import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    width: 100%;
    background-color: var(--white);
    border-radius: var(--space-4);
    overflow: hidden;
    box-shadow: var(--shadow);
`;

export default function Card({ children }) {
    return <StyledCard>{children}</StyledCard>;
}
