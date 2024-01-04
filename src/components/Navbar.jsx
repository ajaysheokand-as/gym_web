import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavbarMiddle } from '../data/Navbar';
import { NavMenus } from '../data/Navbar';

import Pic from '../assets/img.jpeg';
import '../style.css/App.scss';

const Navbar = () => {
  console.log("NavMenus=>", NavbarMiddle)
  const [isToggled, setToggle] = useState(false);
  const toggleNav = () =>{
    setToggle(true);
  };

  return (
    <>
      <main>
        <nav className="navbar">
          <div className="nav-rgt">
            <h4>Gym <span>24</span></h4>
          </div>
          <div className={`nav-lft ${isToggled ? 'd-block' : 'd-none'}`} id='nav_lft' >
          <div  className='nav-lft-menu'>
            <ul>
          {
                NavbarMiddle[0].menu.map((item,index)=>{
                  console.log("mapitems 28=>", item)
                  return(
                    // <div key={index}  >
                    <li key={index}>{item}</li>
                    
                  // </div>
                  )
                })
              }
              {/* {
                NavMenus.map((item, index)=>{
                  return (
                    <>
                    <li>{item}</li>
                    </>
                  )
                })
              } */}
              </ul>
          </div>
          
            {/* <ul className="nav-lft-menu">
              <li>Advantage</li>
              <li>Membership</li>
              <li>About</li>
              <li>Trainers</li>
            </ul> */}
          </div>

          <div className="barbtn">
            <button onClick={toggleNav}><FaBars /></button>
          </div>
        </nav>
        <div className="home">
          <div className="heading">
            <h1>Free trial session <br /> with a trainer</h1>
            <button>Detailed</button>
          </div>
          <div className="pic">
            <img src={Pic} alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Navbar;
