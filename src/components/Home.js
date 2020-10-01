import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
    <div className='text-center'>
        <NavLink to="/books"><img className="img-fluid mb-4" src='images/homePageBooks.png' /></NavLink>
        <p className="my-5" style={{fontSize: '20px'}}>...<a href='https://www.amazon.com/Logan-Reynolds/e/B089CBVN5F'>...</a>...<NavLink to="/books">....</NavLink> ...<a href='https://www.amazon.com/Logan-Reynolds/e/B089CBVN5F'>...</a></p> 
        <div id="scoot1" >
            <img src='images/scooter-06-1442.jpg' />
        </div>
    </div>
);

export default Home;