import React from 'react';
import './skills.css';
import Menulis from '../../assets/writing.png';
import Manajemen from '../../assets/manajemen.png';
import Teamwork from '../../assets/teamwork.png';

const Skills = () => {
    return (
        <section id ="skills">
            <span className="skillTitle">What I do</span>
            <div className="skillDesc">I am a skilled and passionate Writing and Financial Management.</div>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Menulis} alt="Menulis" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Writing</h2>
                        <p>Expert in crafting creative and technical content that captivates audiences.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Manajemen} alt="Manajemen" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Financial Management</h2>
                        <p>Optimizing budgets and financial decisions for stability and growth.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Teamwork} alt="Teamwork" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Teamwork</h2>
                        <p>Reliable collaborator with strong communication skills for outstanding team results</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;