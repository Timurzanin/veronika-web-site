
import React from 'react'
import styled from 'styled-components'
import CoverVideo from '../Components/CoverVideo'
import Logo from '../Components/Logo'
import NavBar from '../Components/NavBar'



const Section = styled.section`
  
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
     

    </Section>


  )
}
