import React from "react";
import './intro.css';
import bg from '../../assets/me.png';
import btnImg from '../../assets/linkedin.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introtext">I'm<span className="introName"> Amrina</span> <br /> From Kalimantan Institute of Technology</span>
                <p className="introPara"><br />I am passionate in pursuing knowledge and innovation. With valuable experience in scientific paper competitions and various non-academic activities, I continue to develop myself to become an excellent individual</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg"/>Here Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;