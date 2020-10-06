import React from 'react';
import { NavLink } from 'react-router-dom';

const Info = () => (
    <div >

        {/* <div class="jumbotron m-0" >
            <h1 class="display-4 font-weight-bold">Scooter.inc</h1>
        </div> */}
       
        <div className="m-0 p-0 pb-0" id="scoot1" >
            <img src='images/girl-at-beach-on-scooter.jpg' />
            <h1 className="ml-5 text-white" style={{position: "absolute", fontWeight: "bold", fontSize: "70px"}}>Xiaomi Mi M 365</h1>
        </div>

       <div className="m-0" id="scoot1" style={{backgroundColor: "#f3f3f3"}}>
            <div class="container" >
                <div class="row">
                    <div class="col-7" ></div>
                    <div class="col-5">
                        <img className="" style={{paddingTop: "175px"}}src='images/scooter-handlebars.jpg' />
                    </div>
                    {/* <div class="col-1" ></div> */}
                </div>
            </div>

            <div class="container pt-5" style={{position: "absolute"}}>
                <div class="row">

                    <div className="col-7 m-0 p-0 text-black">
                        <ul className="p-2" style={{ listStyleType: "none"}}>
                            <li>
                                <span style={{fontWeight: "bold"}}>Anti-slip handle</span>
                                <p>Provides a great grip and control over the scooter, even for longer rides.</p>
                            </li>
                            <li>
                            <span style={{fontWeight: "bold"}}>Controlled acceleration</span>
                                <p>Give the accelerator a gentle downward push and adjust the amount of pressure until you reach a comfortable speed.</p>
                            </li>
                            <li>
                                <span style={{fontWeight: "bold"}}>Battery life at a glance</span>
                                <p>4 LED notification lights on the dashboard indicate remaining battery life.</p>
                            </li>
                            <li>
                            <span style={{fontWeight: "bold"}}>Power button controls [2]</span>
                                <p>Single press to switch on. Long press to shut down. When Mi Electric Scooter is on, a short single press will switch headlights on/off. Double press to switch between normal and power saving modes.</p>
                            </li>
                        </ul>
                    </div>
                    <div class="col-5"></div>
                    {/* <div class="col-5 ">
                        <ul className="p-2 pl-5" style={{ fontSize: "11px", listStyleType: "none"}}>
                            <li>
                                <span style={{fontWeight: "bold"}}>Battery life at a glance</span>
                                <p>4 LED notification lights on the dashboard indicate remaining battery life.</p>
                            </li>
                            <li>
                            <span style={{fontWeight: "bold"}}>Power button controls [2]</span>
                                <p>Single press to switch on. Long press to shut down. When Mi Electric Scooter is on, a short single press will switch headlights on/off. Double press to switch between normal and power saving modes.</p>
                            </li>
                        </ul>
                    </div> */}

                </div>
            </div>
        </div>

        

        <div className="" style={{textAlign: "center", backgroundColor: "black"}}>
            <br />
            <h5>Ultra-bright headlights</h5>
            <br />
            <p className="mx-5 px-5 mb-0 pb-4 text-white">Headlights are essential for night riding, yet not all scooters have them. Mi Electric Scooter features an ultra-bright 1.1W headlights with a range of up to 6 meters for added safety.</p>
        </div>
        <div className="" id="scoot1" >
            <img src='images/scooter-headlights.jpg' />
        </div>

        <div className="" style={{textAlign: "center", backgroundColor: "black"}}>
            <br />
            <h5 >Red taillights for braking | Front and rear double braking system</h5>
            <br />
            <p className="mx-5 px-5 mb-0 pb-4 text-white" >Red taillights flash distinctly while braking as a warning to other pedestrians and vehicles on the road. Features a disc braking and eABS regenerative anti-lock braking system for an efficient, responsive braking distance of just 13.1 ft.</p>
        </div>
        <div className="" id="scoot1" >
            <img src='images/scooter-red-lights-foot-stand.jpg' />
        </div>

        <div style={{textAlign: "center"}}>
            <h5 className="mt-4">Shock-absorbing tires for a smoother ride</h5>
            <p className="mx-5 px-5">The large 8.5-inch front and rear tires have great shock absorption and anti-slip treads. Coupled with a 250W brushless DC motor for stable power output, Mi Electric Scooter is set to deliver a smoother riding experience.</p>
        </div>
        <div className="m-0" id="scoot1" >
            <img src='images/scooter-tire.jpg' />
        </div>

        <div className="" style={{textAlign: "center", backgroundColor: "black"}}>
            <br />
            <h5>18.6 miles long-range battery with smart power management</h5>
            <br />
            <p className="mx-5 px-5 mb-0 pb-3 text-white">Several 18650 high-capacity lithium batteries deliver up to 18.6 miles of travel on a single charge. Smart battery management via the app displays the health of the battery pack and notifies you immediately if there are issues.</p>
            {/* <ul className="text-white mb-0 pb-4" style={{fontSize: "11px"}}>
                <li>Short circuit protection</li>
                <li>Overcurrent protection</li>
                <li>Double protection from overcharging</li>
                <li>Double protection from overdischarging</li>
                <li>Temperature Resistance</li>
                <li>Undervoltage auto-sleep protection</li> 
            </ul> */}
        </div>

        <div class="container">
            <div class="row">
                
                <div class="col-6 mr-1  text-white" >
                    <ul className="p-2" style={{position: "absolute", listStyleType: "none"}}>
                        <li id="xray" >Short circuit protection</li>
                        <li>Overcurrent protection</li>
                        <li>Double protection from overcharging</li>
                        <li>Double protection from overdischarging</li>
                        <li>Temperature Resistance</li>
                        <li>Undervoltage auto-sleep protection</li> 
                    </ul>
                </div>
                <div class="col-5"></div>
            </div>
        </div>
        <div className="m-0" id="scoot1" >
            <img src='images/scooter-xray.jpg' />
        </div>
        


    </div>
);

export default Info;