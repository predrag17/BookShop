import React, {useEffect, useState} from 'react'
import Service from "../../repository/Service.jsx";
import {Link} from "react-router-dom";

function Author() {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetchAuthors();
    }, []);

    const fetchAuthors = () => {
        Service.fetchAuthors()
            .then(response => {
                setAuthors(response.data)
            })
    }

    const handleDelete = (id) => {
        Service.deleteAuthor(id)
            .then(response => {
                setAuthors(authors.filter(author => author.id !== id))
            })
    }

    return (
        <>
            <h1 className="text-center">Authors</h1>

            <div className="d-flex justify-content-end align-items-center">
                <Link to="/author/add">
                    <button className="btn btn-success mb-3 mt-3" style={{marginRight: '50px'}}>
                        Add new Author
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
                        <th scope="col">Surname</th>
                        <th scope="col">Country Name</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {authors.map((author, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{author.name}</td>
                            <td>{author.surname}</td>
                            <td>{author.country.name}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(author.id)}
                                >
                                    Delete
                                </button>

                                <Link to={`/author/${author.id}/edit`}>
                                    <button className="btn btn-primary" style={{marginLeft: "10px"}}>Edit</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Author;