import React from 'react'
import { CodeLink, HeadingDescWrap, ProjectContainer, ProjectDesc, ProjectDescWrap, ProjectHeadingWrap, ProjectImage, ProjectImageCont, ProjectImageWrap, ProjectInfoWrap, ProjectName, ProjectNumber1, ProjectWrap, Technology, TechnologyWrap } from '../../styles/Projects'
import { AboutDevsDesignation, AboutHeading } from '../../styles/About'
import { BsPuzzleFill } from "react-icons/bs";
import ProjectImg1 from '../../assets/spotify.jpg'
import { IoIosMusicalNotes } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";

const Projects = () => {
  return (
    <ProjectContainer>
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
        </ProjectWrap>
    </ProjectContainer>
  )
}

export default Projects