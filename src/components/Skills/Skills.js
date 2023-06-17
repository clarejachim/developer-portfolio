import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";
import TopSkillsLayout from './TopSkillsCard';
import EducationCard from '../Education/EducationCard';

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData, topSkillsData } from '../../data/skillsData'
import { skillsImage, topSkillsImage } from '../../utils/skillsImage'
import { educationData } from '../../data/educationData'



function Skills() {

    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    return (
        <div className="skills" style={{backgroundColor: theme.secondary}}>
            <div className="skillsHeader">
                <h2 style={{color: theme.primary}}>Technical Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: theme.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
            <div className="skillsSubheader">
                <h2 style={{color: theme.primary}}>Most Proficient In:</h2>
            </div>
            <div className="topSkillsWrapper">
            <div className="skillsContainer">
          
            <div className="topSkill--scroll">
                <div className="centered-marequee">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={false} 
                        direction="right"
                    >
                        {topSkillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={topSkillsImage(skill)} alt={skill} />
                                <h3 style={{color: theme.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                    </div>
                </div>
            </div>
            </div>
        </div>
        

      
    )
}

export default Skills;