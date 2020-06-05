import React from 'react';
import '../Home.css'
import verizon from '../images/verizon.jpg'
import delta from '../images/deltass.jpg'


const Home = (props) => {

    return (

        <div className="home-container">
            <div className="home-pic2">
                <div className="home-text">
                    <p> Hi, I'm Yashwanth Mekala.</p>
                    <h3>Full Stack Developer</h3>
                </div>
            </div>
            <div className="home-work">
                <b>Work Experience</b>
                <p>I started my career as a customer Associate at Amazon. After graduating, i had worked at
                the USA's leading Airline Industry, "Delta Airlines".
                </p>
                <p>Currently, Working at "Verizon", Florida,Tampa, USA</p>
            </div>

            <div className="home-column2">
                <div className="work1">
                    <img src={delta} alt='deltaAirLines' />
                    <p>Worked as Java Developer at Delta Airlines.
                        Worked on <br /><a href="#"> SNAPP - AirLines App</a>
                        <br /> --Thanks to my Employer <a href="http://www.timesquareit.com/" target="_blank">TimeSquare IT Inc</a>
                    </p>

                </div>
                <div className="work2">
                    <img src={verizon} alt='verizon' />
                    <p>Worked as Programmer Analyst at Verizon.
                        Worked on <br /><a href='#'>Verizon Self Optimizing Network</a>
                        <br /> --Thanks to my Employer <a href="https://www.pyramidci.com/" target="_blank">Pyramid Consulting Inc</a>

                    </p>

                </div>
            </div>
            <div className="home-pic">
                {/* <p style={{ color: 'white' }}>Thank you for visiting my portfolio.</p> */}
            <div className="home-thanks">
                <p>Firstly, i appreciate you for taking time to visit my portfolio.
                    
                </p> 
            </div>
            <div className="home-thanks2">
                <p>Most of the work is still under development, i would be updating on weekely basis.</p>
            </div> 
            </div>
            <div className='home-icons'>
               <p style={{color:'white', padding:'10px'}}> If you are interested in knowing about me, please follow me on below social websites.</p>
                <div className="home-socialIcons">
                <a href="https://www.facebook.com/yashu.yashwanth.3"  target='_blank' class="fa fa-facebook"></a>
                <a href="https://www.linkedin.com/in/yashwanth-mekala-671892167" target='_blank' class="fa fa-linkedin"></a>

                </div>
                <p style={{color:'red', padding:'10px',}}>&copy; 2020 yashwanthmekala</p>


            </div>
        </div>
    )
}


export default Home