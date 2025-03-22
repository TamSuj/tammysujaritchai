import { useState } from 'react'
import './App.css'
import LandingPage from "./LandingPage.jsx";
import Resume from "./Resume.jsx";
import Navbar from "./Navbar.jsx";
import Contact from "./Contact.jsx";

function App() {
    return (
        <>
            <Navbar />
            <LandingPage />
            <Resume/>
            <Contact/>
        </>
    )
}

export default App
