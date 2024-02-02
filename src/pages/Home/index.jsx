import React from 'react'
import Nav from '../../components/Nav'
import Hero from '../../views/Hero'
import About from '../../views/About'
import Projects from '../../views/Projects'

const Home = () => {
  return (
    <div>
        <Nav />
        <Hero />
        <About />
        <Projects />
    </div>
  )
}

export default Home