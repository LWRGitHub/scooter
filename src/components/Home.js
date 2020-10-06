import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
    <div >
        {/* <NavLink to="/books"><img className="img-fluid mb-4" src='images/two-black-white-scooters.jpg' /></NavLink> */}
        {/* <p className="my-5" style={{fontSize: '20px'}}>...<a href='https://www.amazon.com/Logan-Reynolds/e/B089CBVN5F'>...</a>...<NavLink to="/books">....</NavLink> ...<a href='https://www.amazon.com/Logan-Reynolds/e/B089CBVN5F'>...</a></p>  */}

        <div class="jumbotron m-0" >
            <h1 id='main-head' class="display-4 font-weight-bold">Xiaomi Mi M 365</h1>
        </div>

        <div className="m-0" id="scoot1" >
            <img  src='images/scooter-spec-banner.jpg' />
        </div>
        <div class="container">
            <div class="row">
                <div class="col-5"></div>
                <div class="col-6 mr-1  text-white">
                    <ul className="p-2 mt-5" style={{position: "absolute", listStyleType: "none"}}>
                        <li>
                            <span style={{fontWeight: "bold"}}>Works as simple as it looks</span>
                            <p>Every aspect of Mi Electric Scooter is crafted with simplicity in mind. The scooter frame, components and accessories use the same geometric design language that puts usability and the user at the front. A single button kicks the scooter to life and the red design accents add modernity. Mi Electric Scooter is made to look right, and feel right.</p>
                        </li>
                        <li>
                        <span style={{fontWeight: "bold"}}>Minimally designed</span>
                            <p>Uniform geometric design elements</p>
                        </li>
                        <li>
                        <span style={{fontWeight: "bold"}}>Made for comfort</span>
                            <p>Curved pedal board</p>
                        </li>
                        <li>
                        <span style={{fontWeight: "bold"}}>Folds up</span>
                            <p>Simple folding levers</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="m-0" id="scoot1" >
            <img src='images/black-scooter.jpg' />
        </div>

        <div style={{textAlign: "center"}}>
            <h5 >Folds in 3 easy steps</h5>
            <h6>Flip, fold, clip.</h6>
            <p className="mx-5 px-5" >Simply flip down the folding lever to fold, and the scooter bell catches onto a latch on the rear wheel. The result is a compact and secure folding design that's perfect for stowing Mi Electric Scooter away at home, in the office, or in the trunk of a car.</p>
        </div>
        <div className="m-0" id="scoot1" >
            <img src='images/scooter-06-1442.jpg' />
        </div>

        <div style={{textAlign: "center"}}>
            <h5>Aerospace-grade aluminum frame</h5>
            <h6 style={{ color: '#c2c2d6'}}>Weighs just 26.9 lbs</h6>
            <center><p  style={{ maxWidth: '1000px'}}>The sturdy frame is made of aerospace-grade aluminum, which has a low density and high structural strength. It also has excellent thermal conductivity and corrosion resistance for added durability. At just 26.9 lbs, Mi Electric Scooter is a great portable size and weight for carry-ons and for maneuvering stairs and pavements.</p></center>
        </div>
        <div className="m-0" id="scoot1" >
            <img src='images/person-carrying-scooter.jpg' />
        </div>

        <div className="text-center m-4">
            {/* <a className="btn btn-dark" style={{width: '200px'}}>Learn More</a> */}
            <NavLink className="btn btn-dark" style={{width: '200px'}} to="/info">Learn More</NavLink>
        </div>
        <div className="text-center m-4">
            {/* <a className="btn btn-dark" style={{width: '200px'}}>buy Now</a> */}
            {/* <NavLink className="btn btn-dark" style={{width: '200px'}} to="/buynow">Buy Now</NavLink> */}
        </div>
        

        

        



    </div>
);

export default Home;