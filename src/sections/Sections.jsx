import React, { useLayoutEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import img from '../assets/Images/edited.jpg'
import img1 from '../assets/Images/IMG_2510.JPG'
import img2 from '../assets/Images/IMG_7658.JPG'
import img3 from '../assets/Images/img4.jpg'
import img4 from '../assets/Images/photo1656877391.jpeg'
import img5 from '../assets/Images/image2.jpg'
import img6 from '../assets/Images/IMG_6798.JPG'
import img7 from '../assets/Images/img1 (2).jpg'
import img8 from '../assets/Images/IMG_1307.JPG.jpg'
import img9 from '../assets/Images/img6.jpg'
import img10 from '../assets/Images/photo1656967899.jpeg'
import img11 from '../assets/Images/photo1656877940.jpeg'
import img12 from '../assets/Images/7939.JPG'
import video from '../assets/pexels-mikhail-nilov-8419637.mp4'

import { motion } from 'framer-motion';

const Section = styled.section`
min-height: 100vh;//??????
height: auto;
width: 100vw;
margin: 0 auto;
overflow: hidden;

display: flex;
justify-content: flex-start;
align-items: flex-start;

position: relative;
`;

const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
font-family: 'Kaushan Script';
font-weight: 300;
text-shadow: 1px 1px 1px ${props => props.theme.body};
color: ${props => props.theme.text};
position: absolute;
top: 1rem;
left: 5%;
z-index: 11;


`;

const Left = styled.div`
width: 35%;
background-color:#8395a7;
color: ${props => props.theme.text};

min-height: 100vh;
z-index: 5;

position: fixed;
left: 0;
display: flex;
justify-content: center;
align-items: center;

p{
  font-size: ${props => props.theme.fontlg};
  font-weight: 300;
  weight: 80%;
  margin: 0 auto;
}

`;

const Right = styled.div`

position:absolute;
left: 35%;
padding-left: 30%;
min-height: 100vh;


${'' /* width: 65%; */}
display: flex;
justify-content: flex-start;
align-items: center;

h1{
  width: 5rem;
  margin: 0 2rem;
}


`;

const Item = styled(motion.div)`


  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    display: inline-block;
    width: 100%;
    height: auto;
    cursor: pointer;
    z-index: 1000;
    ${'' /*  not work cursor work only without video*/}
  text-direction:none;

 
  }
  h1{
    display: inline-block;
    width: fit-content;
    font-weight:500;
    text-align: center;  
    cursor: pointer;       
                             ${'' /* not work cursor work only without video */}
    color: ${props => props.theme.text};
  }
`;



const Product = ({ img, title = '' }) => {

  return (
    <Item
      initial={{ filter: 'grayscale(100%)' }}
      whileInView={{ filter: 'grayscale(0%)' }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 'all' }}

    >
   
      <img src={img} alt={title} />
      <h1>{title}</h1>
     
    </Item>
       
  )
}
export default function Sections() {




  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null)
  let horizontalRef = useRef(null)

  useLayoutEffect(() => {
    let element = ref.current;


    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();


    setTimeout(() => {
      
      t1.to(element, {
      
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App',// locomotive element
          scrub: true,
          pin: true,
          markers: true,

        },
        //we have to increase scrolling height of this section same as the scrolling element width
        height: `${scrollingElement.scrollWidth}px`,
        ease: 'none,'
      })

      //horizontal Scrolling
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: 'top top',
          end: pinWrapWidth,
          scroller: '.App',// locomotive element
          scrub: true,
          markers: true,
          
        },
        x: -pinWrapWidth,
        ease: 'none,'
      });

      ScrollTrigger.refresh();
    }
      , 1000);

    return () => {

    }
  }, [])



  return (
    <Section ref={ref}>

      <Title data-scroll data-scroll-speed="-1">My Brides Collection </Title>
      <Left>
        <p>bla
          bla
          blabla</p>
        <p>bla</p>
      </Left>

      <Right ref={horizontalRef}>
      
        <Product img={img} title='Bridal MakeUp' />
      
        <Product img={img1} title='HairStyle Boho' />
        <Product img={img2} title='HairStyle Waves and Bridal MakeUp' />
        <Product img={img3} title='Work Style' />
        <Product img={img4} title='HairStyle Braid' />
        <Product img={img5} title='Wedding MakeUp' />
        <Product img={img6} title='Half collected HairStyle' />
        <Product img={img7} title='Bridal Bun HairStyle' />
        <Product img={img8} title='Work Process ' />
        <Product img={img9} title='Curls HairStyle' />
        <Product img={img10} title='Hollywood Waves HairStyle' />
        <Product img={img11} title='HeadPiece' />
        
        <Product img={img12} title='Bridas HairStyle' />
        {/* <Product img={img13} title='Bridesmaid Dress' /> */}

      </Right>

      {/* <video style={{ width: '100%', height: '100vh', objectFit: 'cover', }} 
        src={video} autoPlay loop muted /> */}

    </Section>
  )
}
