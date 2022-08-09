import React from "react";
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Home from './Home';
import Pagina404 from './NotFound';
import './App.css';


const App = () => {
    return (
        <Router>
           <div className="App">
                <ul>
                    <li><link to='/'>Home</link></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" elemente={<Pagina404 />} />
                </Routes>
            </div> 
        </Router>
    );
}

export default App;