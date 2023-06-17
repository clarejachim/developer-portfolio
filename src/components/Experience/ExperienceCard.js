import React, { useContext, useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'

function ExperienceCard({id, company, jobtitle, startYear, endYear, subtext}) {

    const { theme } = useContext(ThemeContext);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const cardRef = useRef(null);
    

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setIsDropdownVisible(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
    
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const useStyles = makeStyles((t) => ({
        experienceCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
          
            ...(isDropdownVisible && {
                backgroundColor:theme.primary50,
            }),
          
        },
    }));

    const handleCardClick = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };
    const classes = useStyles();
    const cardClasses = `experience-card ${classes.experienceCard} ${isDropdownVisible ? 'expanded' : ''}`;

   


    return (
        <Fade bottom>
         
            <div key={id} 
            // className={`experience-card ${classes.experienceCard}` }
            className={cardClasses}
            ref={cardRef}
            onClick={handleCardClick}>
                <div className="expcard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
                </div>
                <div className="experience-details">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{jobtitle}</h4>
                    <h5 style={{color: theme.tertiary80}}>{company}</h5>
                    {isDropdownVisible && (
                        <div className="subTextContainer">
                    <div className="subText">{subtext}</div>
                    </div>
                   )}
                </div>
            </div>
        </Fade>   
    )
}

export default ExperienceCard
