import React from "react";
import '../components/Contact.css'; 
import developerpng from '../assets/developer-png.png';
import linkedinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';
import instagramLogo from '../assets/instagram.png';
import emailLogo from '../assets/email.png';
import phoneLogo from '../assets/phone.png';

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <ul className="social-links">
          <li>
            <img src={emailLogo} alt="Email" />
            <a className="mail-links" href="mailto:valarmathirajendran1604@gmail.com">
              valarmathirajendran1604@gmail.com
            </a>
          </li>
          <li>
            <img src={linkedinLogo} alt="LinkedIn" />
            <a className="mail-links" href="https://www.linkedin.com/in/valarmathi-rajendran-a89565259/" target="_blank" rel="noopener noreferrer">
              LinkedIn: Valarmathi Rajendran
            </a>
          </li>
          <li>
            <img src={githubLogo} alt="GitHub" />
            <a className="mail-links" href="https://github.com/Valarmathi1604000" target="_blank" rel="noopener noreferrer">
              GitHub: Valarmathi1604000
            </a>
          </li>
          <li>
            <img src={instagramLogo} alt="Instagram" />
            <a className="mail-links" href="https://www.instagram.com/minion_vishali/" target="_blank" rel="noopener noreferrer">
              Instagram: @minion_vishali
            </a>
          </li>
          <li>
            <img src={phoneLogo} alt="Phone" />
            <a className="mail-links" href="tel:+918754823002">
              +91 8754823002
            </a>
          </li>
        </ul>
      </div>
      <div className="contactUs-pic">
        <img src={developerpng} alt="Profile" />
      </div>
    </div>
  );
};

export default Contact;
