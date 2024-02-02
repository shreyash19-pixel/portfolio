import React from 'react'
import { CopyrightDesc, CopyrightWrap, FooterContainer, FooterWrap, SocialLinks, SocialLinksWrap } from '../../styles/Footer'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {

    const year = new Date().getFullYear()
  return (
    <FooterContainer>
        <FooterWrap>
            <CopyrightWrap>
                <CopyrightDesc>
                    Copyright © {year}. All rights are reserved
                </CopyrightDesc>
            </CopyrightWrap>
            <SocialLinksWrap>
                <SocialLinks href = "https://www.linkedin.com/in/shreyash-patil-525009220/"><FaLinkedin /></SocialLinks>
                <SocialLinks href = "https://github.com/shreyash19-pixel?tab=repositories"><FaGithub /></SocialLinks>
            </SocialLinksWrap>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer