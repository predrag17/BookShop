import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from "react-router-dom";
import Service from "../../repository/Service.jsx";

function EditAuthor() {
    const {id} = useParams()
    const [author, setAuthor] = useState(null)
    const [countries, setCountries] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        countryId: ''
    })
    const history = useNavigate()

    useEffect(() => {
        Service.fetchCountries()
            .then(response => {
                setCountries(response.data)
            });

        Service.getAuthorById(id)
            .then(response => {
                setAuthor(response.data)
                setFormData({
                    name: response.data.name,
                    surname: response.data.surname,
                    countryId: response.data.country.id
                })
            })
    }, [id])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        Service.updateAuthor(id, formData)
            .then(response => {
                console.log("Author updated successfully: ", response.data)

                history("/authors")
            })
    }

    return (
        <>
            <h1 className="text-center mb-5">Edit Author</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Author Name</label>
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
                                <label htmlFor="surname">Author Surname</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="surname"
                                    name="surname"
                                    value={formData.surname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <select
                                    className="form-control"
                                    id="country"
                                    name="countryId"
                                    value={formData.countryId}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Country</option>
                                    {countries.map(country => (
                                        <option key={country.id} value={country.id}>{country.name}</option>
                                    ))}
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                            <Link to="/authors" className="btn btn-secondary">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditAuthor