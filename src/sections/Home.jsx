
import React from 'react'
import styled from 'styled-components'
import CoverVideo from '../Components/CoverVideo'
import Logo from '../Components/Logo'
import NavBar from '../Components/NavBar'
import SocialIcons from '../Components/SocialIcons'


const Section = styled.section`
  width: 100vw;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;


export default function Home() {



  return (
    <Section>
 
      <CoverVideo />
      <Logo />
      <NavBar />
      {/* <SocialIcons /> */}

    </Section>


  )
}
