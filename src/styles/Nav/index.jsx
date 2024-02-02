import styled from 'styled-components'

export const NavWrap = styled.div`
    width: 100%;
    padding: 40px;

    @media (max-width: 600px)
    {
        padding-inline: 15px;
    }
`

export const NavBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DevNameWrap = styled.div`
    
`

export const DevName = styled.h3`
    
`

export const NavLinksWrap = styled.div`
    display: flex;
    gap: 60px;

    @media (max-width: 768px){
        display: none;
    }
`

export const NavLinks = styled.a`
    text-decoration: none;
    color: black;
    font-size: 16px;
    font-weight: 600;
`

export const HamburgerWrap = styled.div`
    display: none;

    @media (max-width: 768px)
    {
        display: flex;
        font-size: 30px;
        color: black;
        cursor: pointer;
    }
`

export const ResponsiveNavLinks = styled.div`
    display: none;

    @media (max-width: 768px)
    {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        gap: 60px;
        background-color: #F1F3F5;
        position: absolute;
        top: 100px;
        left:0px;
        font-size: 22px;
        padding-top: 40px;
        z-index: 3;
    }
    
`