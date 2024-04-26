import React, {useEffect, useState} from 'react'
import Service from "../../repository/Service.jsx";
import {Link, useNavigate} from "react-router-dom";

function AddBook() {

    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        authorIds: [],
        availableCopies: ''
    })
    const history = useNavigate()

    useEffect(() => {
        Service.fetchAuthors()
            .then(response => {
                setAuthors(response.data)
            })

        Service.fetchCategories()
            .then(response => {
                setCategories(response.data)
            })
    }, [])

    const handleChange = (e) => {
        const {name, value, type} = e.target;

        if (type === "text" || type === "number") {
            setFormData({
                ...formData,
                [name]: value
            });
        } else if (type === "select-multiple") {
            const selectedValues = Array
                .from(e.target.selectedOptions, option => option.value);


            setFormData({
                ...formData,
                [name]: selectedValues
            });
        } else {
            // For other input types, handle normally
            setFormData({
                ...formData,
                [name]: value
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, category, authorIds, availableCopies} = formData;

        const bookData = {
            name: name,
            category: category,
            authorIds: authorIds,
            availableCopies: parseInt(availableCopies)
        }

        Service.addBook(bookData)
            .then(response => {
                console.log("Successfully added: ", response.data)

                history("/books")
            })

    }
    return (
        <>
            <h1 className="text-center mb-5">Add Book</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Book Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <select
                                    className="form-control"
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Category</option>
                                    {categories.map(category => (
                                        <option key={category.name} value={category.name}>{category.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="author">Authors</label>
                                <select
                                    className="form-control"
                                    id="authorIds"
                                    name="authorIds"
                                    value={formData.authorIds}
                                    onChange={handleChange}
                                    required
                                    multiple
                                >
                                    <option value="">Select Country</option>
                                    {authors.map(author => (
                                        <option key={author.id} value={author.id}>{author.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="availableCopies">Book Available Copies</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="availableCopies"
                                    name="availableCopies"
                                    value={formData.availableCopies}
                                    onChange={handleChange}
                                    required
                                />
                            </div>


                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                            <Link to="/books" className="btn btn-secondary">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddBook