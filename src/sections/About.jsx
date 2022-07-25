import React from 'react'
import styled from 'styled-components'
import '@fontsource/kaushan-script'
import Vero from '../assets/Images/img1.jpg'
import Vero2 from '../assets/Images/img2.jpg'
import Vero3 from '../assets/Images/img3.jpg'


const Section = styled.section`

  position: relative;
  min-height: 100vh;
  width: 80vw;

  display: flex;

  margin: 0 auto;
`;

const Title = styled.h1`
font-size: ${props => props.theme.fontBig};
font-family: 'Kaushan Script';
font-weight: 300;
color: white;
text-shadow: 10rem 10px 10px ${props => props.theme.body};
position: absolute;
top: 1rem;
left: 5%;
z-index: 5;

padding-right: 8px;

`;


const Left = styled.div`
width: 50%;
font-size: ${props => props.theme.fontlg};
font-weight: 300;
position: relative;
z-index: 5;
margin-top: 17%;

font-family: cursive;
`;


const Right = styled.div`
width: 50%;
position: relative;

img{
  width: 100%;
  height: auto;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
}

.small-img-1{
  width: 40%;
  position: absolute;
  right: 95%;
  bottom: 15%;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
}
.small-img-2{
width: 40%;
position: absolute;
left:80%;
bottom: 30%;
border-top-right-radius: 30px;
border-bottom-left-radius: 30px;
}



`;


export default function About() {
  return (
    <Section id="fixed-target" >
      <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" >
        About Me
      </Title>
      
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">

        Veronika Zanina Professional Makeup & Hair Artist whit a passion for beauty and style.
        <br />


        Years of experience in the world of beauty have helped me take part in the best fashion shows.
        This profession allows me to be a part of girls' happy day.
        <br />
        <br />
        A day when they become brides.Most and even in the personal and small events,
        there is real inner joy in engaging in beauty.
        And it leaves me full of excitement every day.
        <br />
        <br />
        ורוניקה זנינה היא מאפרת ומעצבת שיער. "שנים של ניסיון בעולם הביוטי עזרו לי לקחת חלק במיטב תצוגות האופנה הנחשבות.
        המקצוע הזה מאפשר לי להיות חלק ביום המאושר של בנות
        יום בו הן הופכות לכלות
        <br />
        <br />
        ואין יותר משמח מבחינתי מלהיות צמודה אליהן ולהכין את בני המשפחה ליום הזה. גם בתצוגות האופנה השוות ביותר וגם באירועים האישיים והקטנים, יש שמחה פנימית אמיתית בעיסוק ביופי. וזה משאיר אותי מלאת התרגשות בכל יום"
      </Left>
      <Right>
        <img
          data-scroll
          data-scroll-speed="5"
          src={Vero3} alt="About Me"  />
        <img
          data-scroll
          data-scroll-speed="-2"
          src={Vero} className='small-img-1' alt="About Me"  />
        <img src={Vero2} className='small-img-2' alt="About Me" scrset="" />
      </Right>

    </Section>



  )
}


