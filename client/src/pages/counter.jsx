import React from 'react';

const Redirect = () => {
    const searchParams = new URLSearchParams(window.location.search);

    if (!searchParams.has('number')) {
        window.location = '/';
    }

    const counter = searchParams.get('number');

    return parseInt(counter, 10);
};

export default function Counter() {
    const counter = Redirect();

    return (
        <>
            <h1>{`Counter: ${counter}`}</h1>
        </>
    );
}
