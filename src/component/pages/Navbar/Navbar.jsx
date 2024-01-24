import React, { useState } from "react";
import  {  useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import Logo1 from "../../assets/logos/ecell_abes.png";
import Logo2 from "../../assets/logos/INIF_LOGO.png";
import { motion } from "framer-motion";
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoCloseSharp} from 'react-icons/io5';
import './navbar.css';
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [isSolidNav, setIsSolidNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const height = document.querySelector('.navbar').clientHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop >= height - 40) {
        setIsSolidNav(true);
      } else {
        setIsSolidNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <motion.nav
        // className={`navbar ${isSolidNav ? 'solid-nav' : ''}`}
        className={`navbar ${isSolidNav ? 'solid-nav' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      
      <div className="nav-logo-div1"><Link to='/'>
        <img
          className="log_img"
          src={Logo1}
          style={{ maxWidth: "100%", maxHeight: "100%", display: "block", marginTop:"25px" }}
          alt=""
          onClick={closeMobileMenu}
        /></Link></div>
      <div className="nav-logo-div2"><a href="http://inurture.net/">
        <img
          className="log_img"
          src={Logo2}
          style={{ maxWidth: "100%", maxHeight: "100%", display: "block", marginTop:"25px" }}
          alt=""
          onClick={closeMobileMenu}
        /></a></div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
              <Link to='/'
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Home
              </Link>
          </motion.li>
{/* 
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
              <Link to='/' href="#about"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
              </Link>
          </motion.li> */}
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
              <Link to='/events' 
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Events
              </Link>
          </motion.li>
          
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
              <Link to='/meetourteam' 
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Meet Our Team
              </Link>
          </motion.li>
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
              <Link to='/pastspeaker' 
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Past Speakers
              </Link>
          </motion.li>
          
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
              <Link to='/gallery'
              className="nav-links"
              onClick={closeMobileMenu}
            >
                Gallery
              </Link>
          </motion.li>
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
              <Link to='/contactus' 
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Get in Touch
              </Link>
          </motion.li>
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
              <Link to='https://anujmishra2005.github.io/CCC-Web/' 
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Creators Campus Connect (Coming Soon)
              </Link>
          </motion.li>
          <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
              <Link to='/achievements' 
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Achievements
              </Link>
          </motion.li>
          {/* <motion.li
            className="nav-item"
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
              <Link to='/' 
              className="nav-links"
              onClick={closeMobileMenu}
            >
              recruitments Comming soon!
              </Link>
          </motion.li>  */}
          
          
        </ul>
        <div className="menu-icon" onClick={handleClick}>
          { click ? <IoCloseSharp /> : <GiHamburgerMenu /> }
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;