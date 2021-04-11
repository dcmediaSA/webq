import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    max-width: 768px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 100vh;
    margin: 0 auto;
    padding: var(--space-16);

    @media (min-width: 768px) {
        padding: var(--space-24);
        justify-content: center;
    }
`;

export default function Wrapper({ children }) {
    return <StyledWrapper>{children}</StyledWrapper>;
}
