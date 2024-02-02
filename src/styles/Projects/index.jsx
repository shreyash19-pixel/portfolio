import styled from "styled-components";


export const ProjectContainer = styled.div`
    width: 100%;
    padding: 100px 140px;

    @media (max-width: 1125px)
    {
      padding-inline: 40px;
    }

    @media (max-width: 600px)
    {
      padding-inline: 20px;
    }
`

export const ProjectWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const ProjectHeadingWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
`

export const HeadingDescWrap = styled.div`
    display: flex;
    align-items: center;

    span{
        color: #509941;
    }
`

export const ProjectNumber1 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

    @media (max-width: 768px)
    {
        flex-direction: column;
        gap: 25px;
    }
`

export const ProjectImageCont = styled.div`
    
`

export const ProjectImageWrap = styled.div`
   display: flex;
   justify-content: center;
`

export const ProjectImage = styled.img`
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
`

export const ProjectInfoWrap = styled.div`
    width: 100%;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
    align-items: center;
`

export const ProjectName = styled.h4`
    @media (max-width: 1024px)
    {
        font-size: 15px;
    }

`

export const ProjectDescWrap = styled.div`
    width: 100%;
    max-width: 400px;
`

export const ProjectDesc = styled.p`
    font-size: 15px;

    @media (max-width: 1024px)
    {
        font-size: 13px;
    }
`

export const TechnologyWrap = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
` 

export const Technology = styled.h4`
    font-weight: 600;
`

export const CodeLink = styled.a`
    text-decoration: none;
    color: black;

`