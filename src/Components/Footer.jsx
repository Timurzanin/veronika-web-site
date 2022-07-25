import React from 'react';
import styled from "styled-components";
import { BsFacebook, BsTwitter, BsYoutube, BsBehance, BsInstagram } from 'react-icons/bs';
import { motion } from "framer-motion";


function Footer() {

  return (
    <Foot >

      <motion.span

        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        &copy; Veronika Zanina MakeUp & Hairstyling
      </motion.span>
      <motion.div className="footer__social__icons"

        transition={{
          delay: 0.02,
          type: "tween",
          duration: 0.8,
        }}
      >
        <motion.div className="info"

          transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
        >
          <div className="grid">
            <div className="col">
              <strong>Parlour</strong>
              <p></p>
            </div>
            <div className="col">
              <strong>Email</strong>
              <p>veronika511@yandex.ru</p>
            </div>
            <div className="col">
              <strong>Mobile</strong>
              <p>+972-54-649-12-10 </p>
            </div>
            <div className="col">
              <strong>Address</strong>
              <p>Haris</p>
              <p>Dereh Erec 76</p>
            </div>
            <div className="col">
              <strong>Services</strong>
              <p>MakeUp</p>
              <p>Hairstyling</p>
            </div>
            <div className="col">
              <strong>Working Hours</strong>
              <p>Monday to Friday</p>
              <p>07.00-19.00</p>

            </div>
            <div className="col">
              <a href={
                "https://www.facebook.com/VeronikaZ.Beauty"
              }> 
              <BsFacebook style={{ width: '50%', height: '50%' }}   /></a>
           
            </div>
            <a href={
                "https://instagram.com/veronikazanina?igshid=YmMyMTA2M2Y="
              }> 
              <BsInstagram style={{ width: '50%', height: '50%' }} /></a>
          </div>


        </motion.div>


      </motion.div>

    </Foot>
  )
}

const Foot = styled(motion.footer)`
background: #474bff;
background: -webkit-radial-gradient(circle, #474bff 0%, #bc48ff 100%);
background: radial-gradient(circle, #474bff 0%, #bc48ff 100%);



font-family: cursive;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0rem 5rem;
.footer__social__icons {
  display: flex;
  gap: 2rem;
  color: #351F39;
  svg {
    font-size: 1.4rem;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    &:hover {
      color:black;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  padding: 1rem;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
}
.info {
    position: relative;
    bottom: -3.7rem;
    right: 0;
    margin-bottom: 2rem;

    
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      color: #fff;
    }
}
`;

export default Footer


