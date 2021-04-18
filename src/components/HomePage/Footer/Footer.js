import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const ourAddress = [
        { name: "Brooklyn, New York" },
        { name: " USA" },

    ]
    const services = [
        { name: "Wedding Photography" },
        { name: "Bridal Photography" },
        { name: "Natural Photography" }
    ]

    return (
        <footer className="footer-area  mt-5">
            <div className="container ">
                <div className="row py-5">
                    <div className="col-md-6">
                        <div className="d-flex ">
                            <h3 className="text-light fw-bolder ps-4"></h3>
                        </div>
                        <p className="text-light">We have built our studios to be specially optimized so we can provide exceptional product photography services at an affordable rate.</p>
                    </div>
                    <FooterCol key={1} menuTitle="Services" menuItems={services} />
                    <FooterCol key={2} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon active-icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon active-icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-2">
                            <h6 className="text-primary">Call now</h6>
                            <button className="btn btn-danger">+204565869</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-light">
                    <p>Copyright {(new Date()).getFullYear()} Shots Studio All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;