import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
    <div >
        {/* <NavLink to="/books"><img className="img-fluid mb-4" src='images/two-black-white-scooters.jpg' /></NavLink> */}
        {/* <p className="my-5" style={{fontSize: '20px'}}>...<a href='https://www.amazon.com/Logan-Reynolds/e/B089CBVN5F'>...</a>...<NavLink to="/books">....</NavLink> ...<a href='https://www.amazon.com/Logan-Reynolds/e/B089CBVN5F'>...</a></p>  */}
        <div className="m-0" id="scoot1" >
            <img  src='images/scooter-spec-banner.jpg' />
        </div>
        <div class="container">
            <div class="row">
                <div class="col-5"></div>
                <div class="col-6 mr-1  text-white">
                    <ul className="p-2" style={{position: "absolute", fontSize: "11px", listStyleType: "none"}}>
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
            <br />
            <p style={{fontSize: "13px", color: '#990033'}}>Folds in 3 easy steps</p>
            <br />
            <br />
            <p style={{fontSize: "12px", color: '#c2c2d6'}}>Flip, fold, clip.</p>
            <p className="mx-5 px-5" style={{fontSize: "11px"}}>Simply flip down the folding lever to fold, and the scooter bell catches onto a latch on the rear wheel. The result is a compact and secure folding design that's perfect for stowing Mi Electric Scooter away at home, in the office, or in the trunk of a car.</p>
        </div>
        <div className="m-0" id="scoot1" >
            <img src='images/scooter-06-1442.jpg' />
        </div>

        <div style={{textAlign: "center"}}>
            <br />
            <p style={{fontSize: "13px", color: '#990033'}}>Aerospace-grade aluminum frame</p>
            <br />
            <br />
            <p style={{fontSize: "12px", color: '#c2c2d6'}}>Weighs just 26.9 lbs</p>
            <p className="mx-5 px-5" style={{fontSize: "11px", maxWidth: '1000px'}}>The sturdy frame is made of aerospace-grade aluminum, which has a low density and high structural strength. It also has excellent thermal conductivity and corrosion resistance for added durability. At just 26.9 lbs, Mi Electric Scooter is a great portable size and weight for carry-ons and for maneuvering stairs and pavements.</p>
        </div>
        <div className="m-0" id="scoot1" >
            <img src='images/person-carrying-scooter.jpg' />
        </div>

        <div className="text-center m-4">
            <a className="btn btn-dark" style={{width: '200px'}}>Learn More</a>
        </div>
        <div className="text-center m-4">
            <a className="btn btn-dark" style={{width: '200px'}}>buy Now</a>
        </div>
        

        {/* <div className="m-0" id="scoot1" style={{backgroundColor: "#f3f3f3"}}>
            
            

            <div class="container" >
                <div class="row">
                    <div class="col-1" ></div>
                    <div class="col-8">

                        

                        <img className="pt-4" src='images/scooter-handlebars.jpg' />

                    </div>
                    <div class="col-3" ></div>
                </div>
            </div>

            <div class="container" style={{position: "absolute"}}>
                <div class="row">
                    <div className="col-5 m-0 p-0 text-black">
                        <ul className="p-2" style={{ fontSize: "11px", listStyleType: "none"}}>
                            <li>
                                <span style={{fontWeight: "bold"}}>Anti-slip handle</span>
                                <p>Provides a great grip and control over the scooter, even for longer rides.</p>
                            </li>
                            <li>
                            <span style={{fontWeight: "bold"}}>Controlled acceleration</span>
                                <p>Give the accelerator a gentle downward push and adjust the amount of pressure until you reach a comfortable speed.</p>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6"></div>
                </div>
            </div>
            
        </div> */}

        



    </div>
);

export default Home;