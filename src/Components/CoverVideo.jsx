import React from 'react'
import styled from 'styled-components'
import MainVideo from '../assets/Video.mp4'
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";
import { motion } from 'framer-motion'




const VideoContainer = styled.section`
width: 100%;
height: 100vh;
position: relative;

video{
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

`;
const DarkOverlay = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 1;

background-color: ${props => `rgba(${props.theme.bodyRgba},0.1)`};
`;//function to change the color of the dark overlay


const Title = styled(motion.div)`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 5;
text-shadow: 1px 1px 1px ${props => props.theme.body};

display: flex;
flex-direction: column;
justify-content: center;   
margin-top: 280px;
align-items: center;
color: ${props => props.theme.text};


div{
  display: flex;
  flex-direction: row;
}


h1{
  font-Family: 'Kaushan Script';
  font-size: ${props => props.theme.fontBig};
  text-shadow: 10 10 10px ${props => props.theme.body};

}
h2{
  font-Family: "Kaushan Script";
  font-size: ${props => props.theme.fontlg};
  text-shadow: 10 10 10px ${props => props.theme.body};
  font-weight: 300;
  text-transform: copitalize;


}
h3{
  font-Family: 'Kaushan Script';
  font-size: ${props => props.theme.fontlg};
  text-shadow: 10 10 10px ${props => props.theme.body};
}
`;

const container = {

  hidden: {
    opacity: 0,

  },
  show: {
    opacity: 1,


    transition: {
     delayChildren: 2,
     staggerChildren: 0.3,
    }

  },
}


const item = {

  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
}





export default function CoverVideo() {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variants={container} initial="hidden" animate="show">
        <div>
         
          <motion.h1 variants={item} data-scroll data-scroll-speed='4' data-scroll-delay='0.13'>V</motion.h1> 
          <motion.h1 variants={item} data-scroll data-scroll-speed='4' data-scroll-delay='0.19'>e</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-speed='4' data-scroll-delay='0.16'>r</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-speed='4' data-scroll-delay='0.13'>o</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-speed='4' data-scroll-delay='0.11'>n</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-speed='4' data-scroll-delay='0.09'>i</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-speed='4' data-scroll-delay='0.06'>k</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-speed='4' data-scroll-delay='0.05'>a</motion.h1>

        </div>
       
        <motion.h2 variants={item} data-scroll data-scroll-speed='2' data-scroll-delay='0.04'>It's Fun To Make Things Up</motion.h2>
      
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay loop muted />

    </VideoContainer>
  )
}
