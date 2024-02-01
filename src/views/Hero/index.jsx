import React from 'react'
import { Css, DevDescWrap,  DevsDesc, DevsDesignation, DevsDesignationWrap, DevsImgContainer, DevsImgWrap, DevsInfoImgWrap, DevsInfoWrap,DevsSkillsWrap, DevsSocialLinks, DevsSocialLinksWrap, DevsTechStack, DevsTechStackWrap, HelloHand, HeroContainer, HeroWrap, Html, Java, Js, Mongo, Mysql, Node, Python, ReactJs, Redux } from '../../styles/Hero'
import { MdWavingHand } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";

const Hero = () => {


  return (
    <HeroContainer>
        <HeroWrap>
            <DevsInfoImgWrap>
                <DevsInfoWrap>
                    <DevsDesignationWrap>
                        <DevsDesignation>
                            Full Stack Web Developer &nbsp;
                            <HelloHand>
                                <MdWavingHand />
                            </HelloHand>
                        </DevsDesignation>
                    </DevsDesignationWrap>
                    <DevDescWrap>
                        <DevsDesc>
                            Hi, I'm Shreyash. A passionate full stack web developer based in Mumbai, India.
                        </DevsDesc>
                    </DevDescWrap>
                    <DevsSocialLinksWrap>
                        <DevsSocialLinks href = "https://www.linkedin.com/in/shreyash-patil-525009220/" target = "_blank">
                            <FaLinkedin />
                        </DevsSocialLinks>
                        <DevsSocialLinks href = "https://github.com/shreyash19-pixel?tab=repositories" target = "_blank">
                            <FaGithub />
                        </DevsSocialLinks>
                    </DevsSocialLinksWrap>
                </DevsInfoWrap>
                <DevsImgContainer>
                    <DevsImgWrap>
                       
                    </DevsImgWrap>
                </DevsImgContainer>
            </DevsInfoImgWrap>
            <DevsTechStackWrap>
                <DevsTechStack>Tech Stack</DevsTechStack>
                <DevsSkillsWrap>
                   <Html>
                    <FaHtml5 />
                   </Html>
                   <Css>
                    <FaCss3Alt />
                   </Css>
                   <Js>
                    <IoLogoJavascript />
                   </Js>
                   <ReactJs>
                        <FaReact />
                   </ReactJs>
                   <Redux>
                        <SiRedux />
                   </Redux>
                   <Java>
                    <FaJava />
                   </Java>
                   <Python>
                    <FaPython />
                   </Python>
                   <Node>
                    <FaNodeJs />
                   </Node>
                   <Mysql>
                    <GrMysql />
                   </Mysql>
                   <Mongo>
                    <SiMongodb />
                   </Mongo>
                </DevsSkillsWrap>
            </DevsTechStackWrap>
        </HeroWrap>
    </HeroContainer>
  )
}

export default Hero