import React, { useRef, useState } from 'react'
import { AboutContainer, AboutDevsDesc, AboutDevsDescWrap, AboutDevsDesignation, AboutDevsDesignationWrap, AboutHeading, AboutImageContainer, AboutImageWrap, AboutImg, AboutInfoWrap, AboutWrap, BallWrap, CircularText, CircularTextWrap, TechGuyImg } from '../../styles/About'
import LaptopImg from '../../assets/laptop.jpg'
import TechGuy from '../../assets/man-technologist.png'

const About = () => {


    const text = "FULL STACK WEB DEV"

  return (
        <AboutContainer id = "About">
            <AboutWrap>
            <AboutImageContainer>
                <AboutImageWrap>
                    <AboutImg src = {LaptopImg} />
                    <BallWrap>
                        <TechGuyImg src = {TechGuy} />
                    <CircularTextWrap>
                        <CircularText>
                            {text.split("").map((letter, i) => (
                                <span style={{ transform: `rotate(${i * 18}deg)` }}>{letter}</span>
                            ))}
                        </CircularText>
                    </CircularTextWrap>
                </BallWrap>         
                </AboutImageWrap>
            </AboutImageContainer>
            <AboutInfoWrap>
                <AboutHeading>ABOUT ME</AboutHeading>
                <AboutDevsDesignationWrap>
                    <AboutDevsDesignation>
                        A dedicated Full Stack Web Developer based in Mumbai, India
                    </AboutDevsDesignation>
                </AboutDevsDesignationWrap>
                <AboutDevsDescWrap>
                    <AboutDevsDesc>
                        As a junior Full Stack Web Developer, I possess an impressive arsenal of skills in HTML, CSS, Javascript, 
                        React, Redux, Java, Python, MySQL, MongoDB. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise
                        lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge 
                        development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams
                        to produce outstanding web applications.
                        
                    </AboutDevsDesc>
                </AboutDevsDescWrap>
            </AboutInfoWrap>
            </AboutWrap>
        </AboutContainer>
  )
}

export default About