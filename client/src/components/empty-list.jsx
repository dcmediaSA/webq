import React from 'react';
import styled from 'styled-components';

const StyledBorder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--space-64);
    border: var(--space-2) dashed var(--gray-200);
    border-radius: var(--space-4);

    h3 {
        color: var(--gray-200);
        font-size: var(--space-24);
    }
`;

export default function EmptyList() {
    return (
        <StyledBorder>
            <h3>Empty</h3>
        </StyledBorder>
    );
}
