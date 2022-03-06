import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';

import { BrowserRouter as Router, Link } from "react-router-dom";

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


const Menu = () => (
  <>
    <p><Router><Link to="/" >home</Link></Router></p>
    <p><a href="#wgpt3">what is GPT3</a></p>
    <p><a href="#posibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
);



const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    
    <div className='gpt3_navbar'>
      <div className='gpt3_navbar-links'>

        <div className='gpt3_navbar-links_logo'>
          <img src={logo} alt="" />
        </div>
        
        <div className="gpt3_navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3_navbar-sign">
        <Router><Link to="/signin" > <p>sign in</p> </Link></Router>
        <Router><Link to="/signup" > <p>sign up</p> </Link></Router>
      </div>


      <div className="gpt3_navbar-menu">
        {
          toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className="gpt3_navbar-menu_container scale-up-center">
              <div className="gpt3_navbar-menu_container-links">
                <Menu />
                <div className="gpt3_navbar-menu_container-links-sign">
                  <p><a href=" ">sign in</a></p>
                  <button type='button'>sign up</button>
                </div>
              </div>
            </div>
          )
        }
        
      </div>
    </div>
  )
}

export default Navbar;