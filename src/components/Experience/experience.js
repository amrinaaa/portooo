import React from 'react';
import './experience.css';
import Pelatihan from '../../assets/pelatihan.png';
import Volunteer from '../../assets/volunteer.png';
import Lomba from '../../assets/Lomba.png';
import Kepanitiaan from '../../assets/kepanitiaan.png';
import UKM from '../../assets/ukm.png';
// import InstagramIcon from '../../assets/instagram.png';


const Experience = () => {
    return (
        <section id="experiencePage">
            <div id="experience">
                <h1 className="experiencePageTitle">My Experience</h1>
                <p className="experienceDesc">
                I gained practical industry skills through an internship during vocational high school (SMK) and, as a dedicated university student, I actively participate in scientific paper competitions, training programs, organizing committees, community service projects, and am building a career as an online store affiliate, all of which have honed my collaboration, leadership, and problem-solving abilities.
                </p>
                <div className="experiencesImg">
                    <img src={Pelatihan} alt=" " className="experienceImg" />
                    <img src={Volunteer} alt=" " className="experienceImg" />
                    <img src={Lomba} alt=" " className="experienceImg" />
                    <img src={Kepanitiaan} alt=" " className="experienceImg" />
                    <img src={UKM} alt=" " className="experienceImg" />
                </div>
            </div>
            <div id="experience">
                <h1 className="experiencePageTitle">Contact Me</h1>
                <span className="experienceDesc">Please fill out the form below to discuss any work apportunities.</span>
                <form className='contactForm'>
                    <input type="text" className="name"placeholder='Your Name' />
                    <input type="email" className="name"placeholder='Your Email' />
                    <textarea className='msg' name="message" rows="S" placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className="submitbtn">Submit</button>
                    <div className="links">
                        {/* <img src={} alt="" className="link" />
                        <img src={} alt="" className="link" />
                        <img src={} alt="" className="link" />
                        <img src={} alt="" className="link" /> */}
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Experience;