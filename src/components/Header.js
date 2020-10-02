import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <NavLink className="btn btn-outline-secondary m-2" to="/home">Home</NavLink>
      <NavLink className="btn btn-outline-secondary m-2" to="/books">Info</NavLink>
      <NavLink className="btn btn-outline-secondary m-2" to="/about">About</NavLink>
      <img className="m-2" src="images/reddot-award.jpg" alt="red dot award 2017, recognizing the scooter for having the best quality" style={{width:'80px', left: '550px'}}/>
    </nav>
   
    {/* <NavLink to="/books"> */}
      <div class="jumbotron m-0" >
        <h1 class="display-4 font-weight-bold">Scooter.inc</h1>
      </div>
    {/* </NavLink> */}
  </header>
);


export default Header;