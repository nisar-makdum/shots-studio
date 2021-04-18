import React from 'react';
import './Contact.css';
import phone from '../../../images/phone.png';
import email from '../../../images/new-post.png';
import address from '../../../images/map-marker.png';

const Contact = () => {
    return (
        <section id="contact">
            <div className="text-center text-danger mt-5"><h1 class="section-title">Contact info</h1></div>
    <div class="contact ">
      
      <div class=" d-flex">
        <div class="contact-item">
          <div class="icon"><img src={phone}/></div>
          <div class="contact-info">
            <h1>Phone</h1>
            <h2>+15697854124</h2>
            
          </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src={email}/></div>
          <div class="contact-info">
            <h1>Email</h1>
            <h2>ShotsStudio@gmail.com</h2>
            
            </div>
        </div>
        <div class="contact-item">
          <div class="icon"><img src={address}/></div>
          <div class="contact-info">
            <h1>Address</h1>
            <h2>Brooklyn, New York USA</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
};

export default Contact;