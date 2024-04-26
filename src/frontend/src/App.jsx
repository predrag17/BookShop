import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Country from "./components/Country/Country.jsx";
import Home from "./components/Home/Home.jsx";
import AddCountry from "./components/Country/AddCountry.jsx";
import EditCountry from "./components/Country/EditCountry.jsx";
import Author from "./components/Author/Author.jsx";
import AddAuthor from "./components/Author/AddAuthor.jsx";
import EditAuthor from "./components/Author/EditAuthor.jsx";
import Book from "./components/Book/Book.jsx";
import AddBook from "./components/Book/AddBook.jsx";
import EditBook from "./components/Book/EditBook.jsx";

function App() {


    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/countries" element={<Country/>}/>
                    <Route path="/country/add"
                           element={<AddCountry/>}/>
                    <Route path="/country/:id/edit" element={<EditCountry/>}/>
                    <Route path="/authors" element={<Author/>}/>
                    <Route path="/author/add" element={<AddAuthor/>}/>
                    <Route path="/author/:id/edit" element={<EditAuthor/>}/>
                    <Route path="/books" element={<Book/>}/>
                    <Route path="/book/add" element={<AddBook/>}/>
                    <Route path="/book/:id/edit" element={<EditBook/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App
