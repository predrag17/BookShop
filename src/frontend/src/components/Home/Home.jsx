import React from 'react';
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className="container">
            <h1 className="text-center">Welcome to Book Store</h1>

            <div className="row justify-content-center">
                <div className="col text-center">
                    <Link to="/countries" className="mx-3">All Countries</Link>
                    <Link to="/authors" className="mx-3">All Authors</Link>
                    <Link to="/books" className="mx-3">All Books</Link>
                </div>
            </div>
        </div>
    )
}

export default Home