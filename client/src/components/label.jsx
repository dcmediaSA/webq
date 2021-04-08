import React, { PureComponent } from 'react';
import styled from 'styled-components';

export const LabelStyles = styled.div`
    width: 2.2in;
    height: 4in;

    @media print {
        width: 100%;
        height: 100vh;
        margin: 0;
        border: 0;
    }

    font-family: 'Courier New', Courier, monospace;
    background-color: white;

    section {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 32px 0;

        h1 {
            text-align: center;
            font-weight: bold;
        }

        p {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: black;
            margin-top: 24px;
            border-radius: 100%;
            color: white;
            width: 1in;
            height: 1in;
            text-transform: uppercase;
            color: white;
            text-align: center;
            font-weight: 900;
            font-size: 32px;
        }
    }

    .message {
        p {
            text-align: center;
        }
    }
`;

export default class Label extends PureComponent {
    render() {
        const { number } = this.props;
        return (
            <LabelStyles>
                <section>
                    <h1>Welcome</h1>

                    <p>{number}</p>
                </section>

                <div className="message">
                    <p>We&apos;ll announce when we&apos;re ready to see you.</p>
                </div>
            </LabelStyles>
        );
    }
}
