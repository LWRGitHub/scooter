import React from 'react';

const About = () => (
    <div class="container mb-3">
        <div class="row">
            <div class="col col-md-7 p-1">
                <div class='p-5 bg-light rounded'>
                    <a href="https://www.amazon.com/Logan-Reynolds/e/B089CBVN5F" target="_blank"><img id="me" className='position-absolute rounded-circle' src='images/logan-reynolds.jpg' style={{width:'80px'}}/></a>
                    <p></p>
                    <p className='m-0'></p>
                </div>
            </div>
            <div class="col-12 col-md-5 p-1">
                <img class="rounded img-fluid" src='images/sfStreet.jpg' />
            </div>
        </div>
    </div>
)

export default About;