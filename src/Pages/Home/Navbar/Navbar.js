import React from 'react';
import Sticky from 'react-stickynode';
import { Link } from "react-scroll";


const Navbar = () => {

  return (

    <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
      <nav className={`navbar navbar-expand-lg navbar-light dark_menu`}>
        <div className={`container custome_container`}>
          <a className="d-flex align-items-center" style={{textDecoration:"none"}} href="./">
          <span className="h1 ms-2 " style={{color:"#343D46"}} >&#123;</span>
            <img src="/fs.png" alt="" width="50px" height="50px"/>
            <span className="h1 ms-2 " style={{color:"#343D46"}} >&#125;</span>
         
          </a>
          <a
            style={{ textDecoration: 'none' }}
             href="https://www.linkedin.com/in/faysal-sikder"
            className="btn get-btn get-btn-two d-lg-none d-md-block login"
          >
            Reach Me
          </a>






          
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div
            className="collapse navbar-collapse offset"
            id="navbarSupportedContent"
          >
            <ul className="nav navbar-nav m-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-86}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-86}
                  duration={500}
                >
                  About
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="service"
                  spy={true}
                  smooth={true}
                  offset={-86}
                  duration={500}
                >
                  Service
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-86}
                  duration={500}
                >
                  Portfolio
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="testimonial"
                  spy={true}
                  smooth={true}
                  offset={-86}
                  duration={500}
                >
                  Testimonial
                </Link>
              </li> */}
              <li className="nav-item">
                
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="/blog"
                  spy={true}
                  smooth={true}
                  offset={-86}
                  duration={500}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-86}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right d-md-none d-lg-block">
              <li className="nav-item">
                <a style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/faysal-sikder" className="login">
                  Reach Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Sticky>

  );
};

export default Navbar;