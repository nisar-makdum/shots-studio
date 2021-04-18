import React, { useContext, useEffect, useState } from 'react';
import { faComments, faGripHorizontal, faHome, faServer, faSortAmountDownAlt, faSignOutAlt, faUsersCog, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://immense-bayou-68819.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [loggedInUser.email])
    return (
        <div className="sidebar bg-secondary d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faComments} /> <span>Add Review</span>
                    </Link>
                </li>
                {isAdmin && <div>

                    <li>
                        <Link to="/admin" className="text-white">
                            <FontAwesomeIcon icon={faUserAlt} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white">
                            <FontAwesomeIcon icon={faUsersCog} /> <span>Add Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/handle" className="text-white">
                            <FontAwesomeIcon icon={faServer} /> <span>Manage Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/allOrders" className="text-white">
                            <FontAwesomeIcon icon={faSortAmountDownAlt} /> <span>Pending Orders</span>
                        </Link>
                    </li>

                </div>}

            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Sign Out</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;