import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    
    <nav className="text-center">

    <div class="container">
      <div class="row">
        <div class="col-2">
          <img className="m-2" src="images/reddot-award.jpg" alt="red dot award 2017, recognizing the scooter for having the best quality" style={{width:'80px', left: '550px'}}/>
        </div>
        <div class="col-8">
          <NavLink className="btn btn-outline-dark m-2" to="/home">Home</NavLink>
          <NavLink className="btn btn-outline-dark m-2" to="/info">Info</NavLink>
          {/* <NavLink className="btn btn-outline-dark m-2" to="/buynow">Buy Now</NavLink> */}
        </div>
        <div class="col-2"></div>
      </div>
    </div>

      
      
    </nav>
   
    {/* <NavLink to="/books"> */}
      {/* <div class="jumbotron m-0" >
        <h1 class="display-4 font-weight-bold">Scooter.inc</h1>
      </div> */}
    {/* </NavLink> */}
  </header>
);


export default Header;