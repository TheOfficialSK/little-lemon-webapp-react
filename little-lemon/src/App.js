import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './components/styles/colorSheet.css';

function App() {
    return (
        <>
            <Header className={"header"} />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
