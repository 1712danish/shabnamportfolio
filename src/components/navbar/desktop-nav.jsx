import React from 'react';
import { Link } from "react-scroll";
 // SCSS
import './navbar.scss';
// Assets
import LogoImg from '../../assets/navbar/logo.svg';
import MobileMenuIcon from '../../assets/navbar/mobile-menu.svg';
import ContactInfoBox from "../contact/contactInfo/contactInfoBox";

import ContactInfoIcon2 from "../../assets/contact/contact-info-icon2.svg";


const desktopNav = (props) => (
  <nav className={`Navbar ${!props.userIsScrolled ? "extraLargeNavbar" : ""}`}>
    <div className="wrapper flex-s-between">
      <div >
      <ul className="flex-s-between">
        <li>
        <Link activeClass="active-link" to="hero" spy={true} smooth={true} offset={0} duration={500}>
          <p className="pointer">HOME </p>
        </Link>
        </li>
        
        <li style={{marginLeft:"40px"}}> 
        <a href="tel:+91-84470-72786" target="_blank">
        <ContactInfoBox
            
            icon={ContactInfoIcon2}
            
          />
          </a>

        </li>
        </ul>
        
      </div>
      <div className="mobile__menu" onClick={props.mobileMenuOpen}>
        <img src={MobileMenuIcon} alt="menu" />
      </div>
      <div className="desktop__menu">
        <ul className="flex-s-between">
          <li>
            <Link activeClass="active-link" to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
              AREA OF EXPERTISE
            </Link>
          </li>
          <li>
            <Link activeClass="active-link" to="about" spy={true} smooth={true} offset={-70} duration={500}>
              ABOUT
            </Link>
          </li>
          
          <li>
            <Link activeClass="active-link" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default desktopNav;