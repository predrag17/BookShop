import React, {useState} from 'react';
import {
    Link, useNavigate
} from "react-router-dom";
import Service from "../../repository/Service.jsx";

function AddCountry() {
    const history = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        continent: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await Service.addCountry(formData);
            history("/countries")
        } catch (error) {
            console.log("Error: ", error);
        }
        console.log(formData)
    }

    return (
        <>
            <h1 className="text-center mb-5">Add Country</h1>
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

export default AddCountry;