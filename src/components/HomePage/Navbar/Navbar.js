import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        
    <section id="header">
        <div class="header ">
        <div class="nav-bar">
            <div>
           <h1 className="text-danger">Shots  Studio</h1>
            </div>
            <nav className="d-flex navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="d-flex flex-row-reverse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li style={{ fontWeight: 1000, letterSpacing: '.1rem', textTransform: 'uppercase', padding: '10px'}} className="nav-item  me-5 ">
                                <Link style={{ textDecoration: 'none' }} className="text-white" to="/home">Home</Link>
                            </li>
                            <li style={{ fontWeight: 1000, letterSpacing: '.1rem', textTransform: 'uppercase', padding: '10px'}} className="nav-item  me-5">
                                <Link style={{ textDecoration: 'none' }} className="text-white" to="/dashboard">Dashboard</Link>
                            </li>
                            <li style={{ fontWeight: 1000, letterSpacing: '.1rem', textTransform: 'uppercase', padding: '10px'}} className="nav-item   me-5">
                                <Link style={{ textDecoration: 'none' }} className="text-white" >Contact</Link>
                            </li>
                            <li style={{ fontWeight: 'bold' }} className="nav-item ">
                                <Link style={{ textDecoration: 'none' }} className="btn btn-danger" to="/login">Login</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            
        </div>
        </div>
  </section>
    );
};

export default Navbar;