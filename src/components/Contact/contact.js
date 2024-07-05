import React from 'react';
import './contact.css';
import Pelatihan from '../../assets/pelatihan.png';
import Volunteer from '../../assets/volunteer.png';
import Lomba from '../../assets/Lomba.png';
import Kepanitiaan from '../../assets/kepanitiaan.png';
import UKM from '../../assets/ukm.png';

const Contact = () => {
    return (
        <section id="contactPage">
            <div id="experience">
                <h1 className="contactPageTitle">My Experience</h1>
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
            <div id="contact">

            </div>
        </section>
    )
}

export default Contact;