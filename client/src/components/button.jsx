import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--gray-200);
    background: var(--white);
    border-radius: var(--space-4);
    padding: var(--space-16);

    svg {
        font-size: var(--space-24);
        color: var(--gray-500);
        margin-left: var(--space-16);
    }

    span {
        color: var(--gray-600);
        font-weight: 900;
        font-size: var(--space-14);
    }

    &:hover {
        background: var(--gray-50);
    }
`;

export default function Button(props) {
    const { externalLink, internalLink, event, children } = props;

    if (internalLink) {
        return (
            <Link to={internalLink}>
                <StyledButton onClick={event} type="button">
                    {children}
                </StyledButton>
            </Link>
        );
    }

    if (externalLink) {
        return (
            <a target="_blank" rel="nofollow noopener noreferrer" href={externalLink}>
                <StyledButton onClick={event} type="button">
                    {children}
                </StyledButton>
            </a>
        );
    }

    return (
        <StyledButton onClick={event} type="button">
            {children}
        </StyledButton>
    );
}
