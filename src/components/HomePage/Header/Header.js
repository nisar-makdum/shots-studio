import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';



const Header = () => {
    return (
        
    <section id="hero">
        <Navbar/>
        <div class="hero container">
        <div>
            <h1 className="text-white"><span className="text-primary">Create</span></h1>
            <h1 className="text-white"><span>Your Best</span></h1>
            <h1 className="text-white"><span className="text-danger">SHOTS</span></h1>
        </div>
        </div>
    </section>
        
    );
};

export default Header;