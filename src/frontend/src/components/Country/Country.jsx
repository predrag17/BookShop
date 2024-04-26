import React, {useEffect, useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Service from "../../repository/Service.jsx";
import {Link} from "react-router-dom";

function Country() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        loadCountries();
    }, []);

    const loadCountries = () => {
        Service.fetchCountries()
            .then((response) => {
                setCountries(response.data);
            })
    }

    const handleDelete = (countryId) => {
        Service.deleteCountry(countryId)
            .then(response => {
                setCountries(countries.filter(country => country.id !== countryId))
            })
    }

    return (
        <>
            <h1 className="text-center">Countries</h1>

            <div className="d-flex justify-content-end align-items-center">
                <Link to="/country/add">
                    <button className="btn btn-success mb-3 mt-3" style={{marginRight: '50px'}}>
                        Add new Country
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
                        <th scope="col">Continent</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {countries.map((country, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{country.name}</td>
                            <td>{country.continent}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(country.id)}
                                >
                                    Delete
                                </button>

                                <Link to={`/country/${country.id}/edit`}>
                                    <button className="btn btn-primary" style={{marginLeft: "10px"}}>Edit</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>

    );
}

export default Country;