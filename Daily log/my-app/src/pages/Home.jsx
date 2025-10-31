import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link to='/sample-page'>Sample Page</Link>s
        </>
    );
}

export default Home;
