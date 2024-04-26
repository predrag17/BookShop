import axios from '../custom-axios/axios.jsx'

const Service = {
    fetchCountries: () => {
        return axios.get("/countries");
    },

    deleteCountry: (countryId) => {
        return axios.delete(`/countries/${countryId}/delete`)
    },

    addCountry: (country) => {
        return axios.post("/countries/add", country)
    },

    getCountryById: (id) => {
        return axios.get(`/countries/${id}/details`)
    },

    updateCountry: (id, data) => {
        return axios.put(`/countries/${id}/edit`, data)
    },

    fetchAuthors: () => {
        return axios.get("/authors")
    },

    deleteAuthor: (id) => {
        return axios.delete(`/authors/${id}/delete`)
    },

    addAuthor: (data) => {
        return axios.post("/authors", data)
    },

    getAuthorById: (id) => {
        return axios.get(`/authors/${id}/details`)
    },

    updateAuthor: (id, data) => {
        return axios.put(`/authors/${id}/edit`, data)
    },

    fetchBooks: () => {
        return axios.get("/books")
    },

    deleteBook: (id) => {
        return axios.delete(`/books/${id}/delete`)
    },

    fetchCategories: () => {
        return axios.get("/books/categories")
    },

    addBook: (data) => {
        return axios.post("/books/add", data)
    },

    getBookById: (id) => {
        return axios.get(`/books/${id}/details`)
    },

    updateBook: (id, data) => {
        return axios.put(`/books/${id}/edit`, data)
    },

    rentBook: (id) => {
        return axios.post(`/books/${id}/rent`)
    }
}

export default Service;