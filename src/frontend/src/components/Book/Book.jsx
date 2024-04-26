import React, {useEffect, useState} from 'react'
import Service from "../../repository/Service.jsx";
import {Link} from "react-router-dom";


function Book() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        Service.fetchBooks()
            .then(response => {
                setBooks(response.data)
            })
    }, [])

    const handleDelete = (id) => {
        Service.deleteBook(id)
            .then(response => {
                setBooks(books.filter(book => book.id !== id))
            })
    }

    const handleRenting = (id) => {
        Service.rentBook(id)
            .then(response => {
                const updatedBook = response.data
                setBooks(books.map(book => {
                    if (book.id === id) {
                        return updatedBook
                    } else {
                        return book;
                    }
                }))
                console.log("Successfully rented: ", response.data);
            })
    }

    return (
        <>
            <h1 className="text-center">Books</h1>

            <div className="d-flex justify-content-end align-items-center">
                <Link to="/book/add">
                    <button className="btn btn-success mb-3 mt-3" style={{marginRight: '50px'}}>
                        Add new Book
                    </button>

                </Link>

                <Link to="/">
                    <button className="btn btn-secondary" style={{marginRight: '50px'}}>
                        Go Home
                    </button>
                </Link>
            </div>

            <div className="container-fluid">
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Authors</th>
                        <th scope="col">Available Copies</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map((book, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{book.name}</td>
                            <td>{book.category}</td>
                            <td>{book.authors.map(author => author.name).join(', ')}</td>
                            <td>{book.availableCopies}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(book.id)}
                                >
                                    Delete
                                </button>

                                <Link to={`/book/${book.id}/edit`}>
                                    <button className="btn btn-primary"
                                            style={{marginLeft: "10px", marginRight: "10px"}}>Edit
                                    </button>
                                </Link>

                                {book.rented ? (
                                    <button className="btn btn-success"
                                            onClick={() => handleRenting(book.id)}>Rented</button>
                                ) : (
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => handleRenting(book.id)}
                                    >
                                        Rent
                                    </button>
                                )}
                                {/*<button className="btn btn-secondary" onClick={() => handleRenting(book.id)}>*/}
                                {/*    Rent*/}
                                {/*</button>*/}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Book;