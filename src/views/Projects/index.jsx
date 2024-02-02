import React from 'react'
import { CodeLink, HeadingDescWrap, ProjectContainer, ProjectDesc, ProjectDescWrap, ProjectHeadingWrap, ProjectImage, ProjectImageCont, ProjectImageWrap, ProjectInfoWrap, ProjectName, ProjectNumber1, ProjectNumber2, ProjectWrap, Technology, TechnologyWrap } from '../../styles/Projects'
import { AboutDevsDesignation, AboutHeading } from '../../styles/About'
import { BsPuzzleFill } from "react-icons/bs";
import { IoIosMusicalNotes } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import { FaMoneyBillAlt } from "react-icons/fa";
import { PiSunglassesBold } from "react-icons/pi";
import ProjectImg1 from '../../assets/spotify.jpg'
import ProjectImg2 from '../../assets/fundraising.png'
import ProjectImg3 from '../../assets/eye-wear.jpg'

const Projects = () => {
  return (
    <ProjectContainer id = "Projects">
        <ProjectWrap>
            <ProjectHeadingWrap>
                <AboutHeading>PROJECTS</AboutHeading>
                <HeadingDescWrap>
                    <AboutDevsDesignation>Each project is a unique piece of development <span><BsPuzzleFill/> </span></AboutDevsDesignation>
                </HeadingDescWrap>
            </ProjectHeadingWrap>
            <ProjectNumber1>
                <ProjectImageCont>
                    <ProjectImageWrap>
                        <ProjectImage src = {ProjectImg1} />
                    </ProjectImageWrap>
                </ProjectImageCont>
                <ProjectInfoWrap>
                    <ProjectName>WEB MUSIC APP  <span><IoIosMusicalNotes/> </span> </ProjectName>
               
                <ProjectDescWrap>
                    <ProjectDesc>The website I developed offers a seamless music streaming experience, 
                        drawing inspiration from popular platforms like Spotify. Leveraging the power of React, 
                        users are able to explore a vast library of songs, 
                        add their favorite tracks to a personalized collection, and create their own playlists.</ProjectDesc>
                </ProjectDescWrap>
                <TechnologyWrap>
                    <Technology>React</Technology>
                </TechnologyWrap>
                <TechnologyWrap>
                    <CodeLink href = "https://github.com/shreyash19-pixel/spotify-app" target = "_blank">Code <span><FaGithub/></span> </CodeLink>
                    <CodeLink href = "https://spotify-app-seven-liard.vercel.app/HomePage" target = "_blank">Live Demo <span><RiExternalLinkLine/></span></CodeLink>
                </TechnologyWrap>
                </ProjectInfoWrap>
            </ProjectNumber1>
            <ProjectNumber2>
                <ProjectInfoWrap>
                    <ProjectName>FUNDRAISING APP  <span><FaMoneyBillAlt/> </span> </ProjectName>
               
                <ProjectDescWrap>
                    <ProjectDesc>A landing page of a Fundraising website where people from different parts of the world can donate a small amount
                        which can help in providing basic human necessities such as food, clothing, medicines, study materials to needy and poor people. A small help
                        from you, means a lot to them.
                    </ProjectDesc>
                </ProjectDescWrap>
                <TechnologyWrap>
                    <Technology>React</Technology>
                </TechnologyWrap>
                <TechnologyWrap>
                    <CodeLink href = "https://github.com/shreyash19-pixel/fundraising" target = "_blank">Code <span><FaGithub/></span> </CodeLink>
                    <CodeLink href = "https://fundraising-ten.vercel.app/" target = "_blank">Live Demo <span><RiExternalLinkLine/></span></CodeLink>
                </TechnologyWrap>
                </ProjectInfoWrap>
                <ProjectImageCont>
                    <ProjectImageWrap>
                        <ProjectImage src = {ProjectImg2} />
                    </ProjectImageWrap>
                </ProjectImageCont>
            </ProjectNumber2>
            <ProjectNumber1>
                <ProjectImageCont>
                    <ProjectImageWrap>
                        <ProjectImage src = {ProjectImg3} />
                    </ProjectImageWrap>
                </ProjectImageCont>
                <ProjectInfoWrap>
                    <ProjectName>EYE-WEAR APP  <span><PiSunglassesBold/> </span> </ProjectName>
               
                <ProjectDescWrap>
                    <ProjectDesc>
                        A landing page of an Eye-wear app, where user can view collection of pocket friendly sunglasses, glasses ,try our lenses virtually, 
                        can contact specialists doctors incase of any eye-related problem. We have insurance plans as well for our customers. 
                    </ProjectDesc>
                </ProjectDescWrap>
                <TechnologyWrap>
                    <Technology>React</Technology>
                </TechnologyWrap>
                <TechnologyWrap>
                    <CodeLink href = "https://github.com/shreyash19-pixel/eye-wear-app" target = "_blank">Code <span><FaGithub/></span> </CodeLink>
                    <CodeLink href = "https://eye-wear-app.vercel.app/" target = "_blank">Live Demo <span><RiExternalLinkLine/></span></CodeLink>
                </TechnologyWrap>
                </ProjectInfoWrap>
            </ProjectNumber1>
        </ProjectWrap>
    </ProjectContainer>
  )
}

export default Projects