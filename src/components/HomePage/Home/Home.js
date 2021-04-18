import React from 'react';
import Contact from '../Contact/Contact';
import Expertise from '../Expertise/Expertise';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Service from '../Service/Service';



const Home = () => {
    return (
        <div>
            <Header/>
            <Service/>
             <Expertise></Expertise>
            <Review/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;