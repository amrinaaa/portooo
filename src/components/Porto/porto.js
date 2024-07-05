import React from "react";
import './porto.css';
import Portofolio1 from '../../assets/p1.png';
import Portofolio2 from '../../assets/p2.png';
import Portofolio3 from '../../assets/p3.png';
import Portofolio4 from '../../assets/p4.png';
import Portofolio5 from '../../assets/p5.png';
import Portofolio6 from '../../assets/p6.png';

const porto = () => {
    return (
        <section id='porto'>
            <h2 className="portosTitle">My Portofolio</h2>
            <span className="portosDesc">This portfolio showcases my diverse projects and experiences in writing, financial management, and teamwork, reflecting my dedication to skill development and making positive contributions in every opportunity.</span>
            <div className="portosImg">
                <img src={Portofolio1} alt="" className="portoImg" />
                <img src={Portofolio2} alt="" className="portoImg" />
                <img src={Portofolio3} alt="" className="portoImg" />
                <img src={Portofolio4} alt="" className="portoImg" />
                <img src={Portofolio5} alt="" className="portoImg" />
                <img src={Portofolio6} alt="" className="portoImg" />
            </div>

        </section>
    )
}

export default porto;