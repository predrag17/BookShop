import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from "react-router-dom";
import Service from "../../repository/Service.jsx";

function EditCountry() {
    const {id} = useParams();
    const history = useNavigate()
    const [country, setCountry] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        continent: ''
    })

    useEffect(() => {
        fetchCountryById(id)
    }, [id]);

    const fetchCountryById = (id) => {
        Service.getCountryById(id)
            .then(response => {
                setCountry(response.data);
                setFormData({
                    name: response.data.name,
                    continent: response.data.continent
                })
            })
            .catch(error => {
                console.error("Error fetching country: ", error)
            })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Service.updateCountry(id, formData)
            .then(response => {
                console.log("country successfully updated: ", response.data)

                history("/countries")
            })
            .catch((error) => {
                console.error("Error: ", error)
            })
    }

    return (
        <>
            <h1 className="text-center mb-5">Edit Country</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Country Name</label>
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
                                <label htmlFor="continent">Country Continent</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="continent"
                                    name="continent"
                                    value={formData.continent}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary mr-2">Submit</button>
                            <Link to="/countries" className="btn btn-secondary">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditCountry