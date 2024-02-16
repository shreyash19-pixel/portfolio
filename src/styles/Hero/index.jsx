import styled from "styled-components";
import DevsImage from '../../assets/devs-image.png'

export const HeroContainer = styled.div`
    width: 100%;
    padding: 140px;
    background-color: #F9F9F9;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1106px)
    {
        padding-inline: 90px;
    }

    @media (max-width: 768px)
    {
        padding-inline: 40px;
        padding-bottom: 40px;
    }

    @media (max-width: 375px)
    {
        padding-inline: 15px;
    }
`

export const HeroWrap = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 768px)
    {
        gap: 25px;
    }
`

export const DevsInfoImgWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px)
    {
        flex-direction: column-reverse;
        gap: 20px;
    }
`

export const DevsInfoWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 768px)
    {
        align-items: center;
        text-align: center;
    }

`

export const DevsDesignationWrap = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    gap: 10px;
    align-items: center;

    @media (max-width: 768px)
    {
        max-width: 500px;
    }

`

export const DevsDesignation = styled.h1`
    font-size: 55px;
    color: #2D2E32;

    @media (max-width: 1106px)
    {
        font-size: 45px;
    }

    @media (max-width: 856px)
    {
        font-size: 35px;
    }

    @media (max-width: 360px)
    {
        font-size: 20px;
    }

`

export const HelloHand = styled.span`
    color: #E9AA1B;
`

export const DevDescWrap = styled.div`
    width: 100%;
    max-width: 350px;

    @media (max-width: 768px)
    {
        max-width: 800px;
    }
`

export const DevsDesc = styled.p`
    color: grey;
    font-size: 15px;

    @media (max-width: 1106px)
    {
        font-size: 13px;
    }

    @media (max-width: 856px)
    {
        font-size: 11px;
    }
`

export const DevsSocialLinksWrap = styled.div`
    display: flex;
    gap: 15px;
`

export const DevsSocialLinks = styled.a`
    text-decoration: none;
    color: black;
    font-size: 22px;
`

export const DevsImgContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 1106px)
    {
        justify-content: flex-end;
    }

    @media (max-width: 768px)
    {
        justify-content: center;
    }
`

export const DevsImgWrap = styled.div`
    width: 100%;
    max-width: 340px;
    min-height: 340px;
    background-color: #3F47CC;
    border-radius: 50%;
    background-image: url(${DevsImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 1106px)
    {
        max-width: 300px;
        min-height: 300px;
    }

    @media (max-width: 856px)
    {
        max-width: 260px;
        min-height: 260px;
    }

    @media (max-width: 360px)
    {
        max-width: 220px;
        min-height: 220px;
    }
`;

export const DevsImg = styled.img`
    width: 100%;
`

export const DevsTechStackWrap = styled.div`
    display: flex;
    gap: 15px;

    
    @media (max-width: 768px)
    {
       justify-content: center;
    }
`

export const DevsTechStack = styled.div`
    font-weight: 700;
    border-right: 1px solid black;
    padding-right: 15px;
    display: flex;
    align-items: center;

    @media (max-width: 856px)
    {
        font-size: 14px;
        padding-right: 8px;
    }
`

export const DevsSkillsWrap = styled.div`
    display: flex;
    gap: 15px;
    flex-wrap: wrap;

    @media (max-width: 856px)
    {
        font-size: 14px;
    }

   
`

export const Html = styled.div`
    color: #DD4B25;
    font-size: 30px;
    display: flex;
    align-items: center;
`


export const Css = styled(Html)`
    color: #1B73BA; 
`

export const Js = styled(Html)`
    color: #E2C430; 
`

export const ReactJs = styled(Html)`
    color: #61DBFB; 
`

export const Redux = styled(Html)`
    color: #7248B6; 
`

export const Java = styled(Html)`
    color: #DF2E2E; 
`

export const Python = styled(Html)`
    color: #3973A4; 
`
