import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../Navbar/logo.png'
import {
  faArrowRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="box-container">
        <div className="box">
            <div className='logo'>
          <img src={logo} alt='' height={2000}/>
          </div>
          <p>
          Organic farming is the production of food without the use of synthetic chemicals
          </p>
          <div className="share">
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faFacebookF} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
              </i>
            </a>
            <a href="/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faLinkedin} />
              </i>
            </a>
          </div>
        </div>
        <div className="box">
          <h3>Contact Info</h3>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +91 891 964 4092
          </a>
          <a href="/" className="links" id="emailLink">
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            vivek@email.com
          </a>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </i>
           Hyderabad, India
          </a>
        </div>
        <div className="box">
          <h3>Quick Info</h3>
          <a href="#home" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            home
          </a>
          <a href="#features" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            features
          </a>
          <a href="#products" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            products
          </a>
          <a href="#categories" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            categories
          </a>
        </div>
      </div>
      <hr/>
      <div className="credits">
        <p>
          Created By ViVek | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}