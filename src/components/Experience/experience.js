import React, { useRef } from 'react';
import './experience.css';
import Pelatihan from '../../assets/pelatihan.png';
import Volunteer from '../../assets/volunteer.png';
import Lomba from '../../assets/Lomba.png';
import Kepanitiaan from '../../assets/kepanitiaan.png';
import UKM from '../../assets/ukm.png';
import Magang from '../../assets/magang.png';
import InstagramIcon from '../../assets/instagram.png';
import TelegramIcon from '../../assets/tele.png';
import WhatsappIcon from '../../assets/whatsapp.png';
import emailjs from '@emailjs/browser';

const Experience = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log('Sending email...');
        emailjs.sendForm('service_ru43hhk','template_zgi3l4y', form.current, '0ilaJGuRSjQ5H4Qs1')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                console.log('Email sent successfully:', result.text);
                alert("Message Sent Successfully!");
            }, (error) => {
                console.log('Failed to send email:', error.text);
                alert("Failed to Send Message, please try again.");
            });
    };

    return (
        <section id="experiencePage">
            <div id="experience">
                <h1 className="experiencePageTitle">My Experience</h1>
                <p className="experienceDesc">
                    I gained practical industry skills through an internship during vocational high school (SMK) and, as a dedicated university student, I actively participate in scientific paper competitions, training programs, organizing committees, community service projects, and am building a career as an online store affiliate, all of which have honed my collaboration, leadership, and problem-solving abilities.
                </p>
                <div className="experiencesImg">
                    <img src={Pelatihan} alt=" " className="experienceImg" />
                    <img src={Magang} alt=" " className="experienceImg" />
                    <img src={Volunteer} alt=" " className="experienceImg" />
                    <img src={Lomba} alt=" " className="experienceImg" />
                    <img src={UKM} alt=" " className="experienceImg" />
                    <img src={Kepanitiaan} alt=" " className="experienceImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='your_name' required />
                    <input type="email" className="name" placeholder='Your Email' name='your_email' required />
                    <textarea className='msg' name="message" rows="S" placeholder='Your Message' required></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={WhatsappIcon} alt="Whatsapp" className="link" />
                        <img src={InstagramIcon} alt="Instagram" className="link" />
                        <img src={TelegramIcon} alt="Telegram" className="link" />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Experience;
