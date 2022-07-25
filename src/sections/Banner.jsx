import React from 'react'
import styled from 'styled-components'



const Section = styled.section`
min-height: 100vh;
width: 80vw;
margin: 0 auto;

display:flex;
justify-content: center;
align-items: center;
color: #BC48FF;
position: relative;


`;

const Container = styled.div`
min-height: 100vh;
color: #BC48FF;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

`;

const BannerComponent = styled.h1`
font-size: ${props => props.theme.fontxxxl};
font-family: 'Kaushan Script';
color:white;
white-space: nowrap;
text-transform: uppercase;
line-height: 1;
text-shadow: 10rem 10px 10px ${props => props.theme.body};

span{
    display: block;
  
    padding: 1rem 10rem;
   
    
}


`;






export default function Banner() {
  return (
   
    <Section >
    <Container id="up" >
        <BannerComponent>
            <span
             data-scroll data-scroll-direction="horizontal" 
            data-scroll-speed="-10"
            data-scroll-target="#up"
            >I believe that </span>
        </BannerComponent>
        <BannerComponent>
            <span data-scroll data-scroll-direction="horizontal" 
            data-scroll-speed="8"
            data-scroll-target="#up"
            >all women are pretty</span>
        </BannerComponent>
        <BannerComponent>
            <span
            data-scroll data-scroll-direction="horizontal" 
            data-scroll-speed="-6"
            data-scroll-target="#up"
            >without makeup</span>
        </BannerComponent>
        <BannerComponent>
            <span data-scroll data-scroll-direction="horizontal" 
            data-scroll-speed="6"
            data-scroll-target="#up">but with the right makeup</span>
        </BannerComponent>
        <BannerComponent>
            <span data-scroll data-scroll-direction="horizontal" 
            data-scroll-speed="-6"
            data-scroll-target="#up"> can be pretty</span>
        </BannerComponent>
        <BannerComponent>
            <span
                data-scroll data-scroll-direction="horizontal" 
            data-scroll-speed="4"
            data-scroll-target="#up"> powerful</span>
        </BannerComponent>
    </Container>
    </Section>
  )
}
