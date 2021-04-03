import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: var(--white);
    padding: var(--space-16);
    border-bottom: 1px solid var(--gray-200);

    @media (min-width: 768px) {
        padding: var(--space-24);
    }

    h3 {
        font-size: var(--space-20);
        font-weight: 900;
        color: var(--gray-900);
    }

    p {
        font-size: var(--space-16);
        margin-top: var(--space-4);
        color: var(--gray-500);
    }
`;

export default function SectionTitle({ title, subtitle }) {
    return (
        <StyledHeader>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </StyledHeader>
    );
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};
