// import React from 'react'
// import styled from 'styled-components'
// import { useRef, useEffect, useState } from 'react';
// import '../Components/Images.css';
// import { motion } from 'framer-motion';




// export default function RegularMakeUP() {
//     const [selected, setSelected] = useState(0);
//     const testimonials = [
//       {
//         designation: "MakeUp ",
//         name: "Veronika Zanina",
//         review:
//         "Perfection Perfecto WOW AMAM !"
//       },
//       {
//         designation: "Full Makeup",
//         name: "Gabreilla",
//         review:
//         "Perfection isn’t just any other salon. It’s a complete cut above the rest. Every visit is always a treat and you’re always made to feel special. Michelle never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations"
//       },
//       {
//         designation: "Skin",
//         name: "Natalia",
//         review:
//         "Perfection is by far one of the best retreats around, professional in every aspect but friendly too. Michelle and her dedicated team will do their best to meet your needs and give you your ultimate treatment. Massages are a must and worth every penny. Highly worth a visit !"
//       },
//     ];
//     return (
//       <Section >

//         <div className="container">
//         <Title  data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" >
//         Testimonials
//       </Title>
//           <motion.div className="testimonials"

//           transition={{
//             delay: 0.03,
//             type: "tween",
//             duration: 0.8,
//           }}
//           >
//             {
//               testimonials.map(({ designation, name, review}, index)=> {
//                 return (
//                   <div className={`testimonial ${selected === index ? "active" : "hidden"}`} key={index}>
//                     <div className="image">
//                       <div className="circle2">
//                        <p style={{  fontSize: "40px" }} > Loadmore</p>
//                       </div> 
//                     </div>
//                     <div className="title-container">
//                       <span className="designation">
//                         {designation}
//                       </span>
//                       <h3 className='title'>{name}</h3>
//                     </div>
//                     <p className="description">{review}</p>
//                   </div>
//                 );
//               })
//             }
//           </motion.div>
//           <motion.div className="controls"

//           transition={{
//             delay: 0.03,
//             type: "tween",
//             duration: 0.8,
//           }}
//           >
//           <button
//               className={selected === 0 ? "active" : ""}
//               onClick={() => {
//                 setSelected(0);
//               }}>
//           </button>
//           <button
//               className={selected === 1 ? "active" : ""}
//               onClick={() => {
//                 setSelected(1);
//               }}>
//           </button>
//           <button
//               className={selected === 2 ? "active" : ""}
//               onClick={() => {
//                 setSelected(2);
//               }}>
//           </button>
//           </motion.div>
//         </div>
//       </Section>
//     )
//   }
//   const Title = styled.h1`
//   font-size: ${props => props.theme.fontxxxl};
//   font-family: 'Kaushan Script';
//   font-weight: 300;

//   margin-bottom: 6rem;
//   padding-right: 8px;

//   ${'' /* text-shadow: 0 0 10px ${props => props.theme.body}; */}
//   ${'' /* position: absolute; */}
//   top: 1rem;
//   margin-right: 60rem;
//   z-index: 11;
//   background: #BC48FF;
// background: radial-gradient(circle farthest-corner at center center, #BC48FF 21%, #474BFF 100%);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
//   `;
//   const Section = styled.section`
//   overflow: hidden;

//   .container {

//     min-height: 100vh;
//     background-color: ;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     align-items: center;
//     gap: 2rem;
//     .testimonials {

//       display: flex;
//       gap: 1rem;
//       text-align: center;
//       justify-content: center;
//       width: 30%;
//       .testimonial {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         gap: 1rem;
//         .image {

//           position: relative;
//           .circle2 {
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             height: 10rem;
//             width: 10rem;
//             border-radius: 10rem;
//             background-color: #8860e6b0;
//             color: black;
//           }
//         }
//       }
//       .hidden {
//         display: none;
//       }
//       color: #fff;
//       .designation {
//         height: 8rem;
//       }
//     }
//     .controls{
//       display: flex;
//       gap: 1rem;
//       button {
//         padding: 0.5rem;
//         border-radius: 1rem;
//         background-color:  #8860e6b0;
//         border: 0.1rem solid transparent;
//         cursor: pointer;
//       }
//       .active {
//         background-color: #BC48FF;
//         border: 0.1rem solid transparent;
//       }
//     }
//   }
//   @media screen and (min-width: 280px) and (max-width: 1080px) { 
//     .background {
//       display: none;
//     }
//     .container {
//       padding: 4rem 0;
//       .testimonials {
//         width: 80%;
//         .testimonial {
//           .description {
//             height: 18rem;
//           }
//         }
//       }
//     }
//   }
//   `;





import styled from "styled-components";
import { useState } from "react";
import React from "react";
import './reg.css'
import logo from '../assets/Images/IMG_2510.JPG'



  const Title = styled.h1`
  font-size: ${props => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;

  ${'' /* margin-bottom: 6rem; */}
  

  ${'' /* text-shadow: 0 0 10px ${props => props.theme.body}; */}
  ${'' /* position: absolute; */}
  margin-top: 3rem;
  ${'' /* margin-right: 5rem; */}
  z-index: 11;
  color: #fff;
  text-shadow: 10rem 10px 10px ${props => props.theme.body};
  `;







export default function App() {





    return (
        <div>
    
            
            <Title  data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" >
        Testimonials
     </Title>
                <div style={{ height: "80px" }}></div>
                
                <div class="container">

                    <div class="card top_card">
                        <h2>Full Makeup</h2><br />
                        <p>Gabreilla</p><br />
                        <p>Perfection is by far one of the best retreats around, professional in every aspect but friendly too. Michelle and her dedicated team will do their best to meet your needs !"</p>
                    </div>

                    <div class="card">
                        <h2>Full Makeup</h2><br />
                        <p>Gabreilla</p><br />
                        <p>Perfection is by far one of the best retreats around, professional in every aspect but friendly too. Michelle and her dedicated team will do their best to meet your needs !"</p>
                    </div>
                    <div class="card"> <img style={{ width: "170px" }} src={logo} alt="logo" /></div>

                    <div class="card">        <h2>Full Makeup</h2><br />
                        <p>Gabreilla</p><br />
                        <p>Perfection is by far one of the best retreats around, professional in every aspect but friendly too. Michelle and her dedicated team will do their best to meet your needs !"</p></div>
                    <div class="card middle_card">
                        <h2>Full Makeup</h2><br />
                        <p>Gabreilla</p><br />
                        <p>Perfection is by far one of the best retreats around, professional in every aspect but friendly too. Michelle and her dedicated team will do their best to meet your needs !"</p>
                    </div>
                    <div class="card ">        <h2>Full Makeup</h2><br />
                        <p>Gabreilla</p><br />
                        <p>Perfection is by far one of the best retreats around, professional in every aspect but friendly too. Michelle and her dedicated team will do their best to meet your needs !"</p></div>

                    <div class="card">        <h2>Full Makeup</h2><br />
                        <p>Gabreilla</p><br />
                        <p>Perfection is by far one of the best retreats around, professional in every aspect but friendly too. Michelle and her dedicated team will do their best to meet your needs !"</p></div>
                    <div class="card">        <h2>Full Makeup</h2><br />
                        <p>Gabreilla</p><br />
                        <p>Perfection is by far one of the best retreats around, professional in every aspect but friendly too. Michelle and her dedicated team will do their best to meet your needs !"</p></div>
                    <div class="card bottom_card">        
                       
                        <p>Perfection is by far one of the best retreats around, professional in every aspect but friendly too. Michelle and her dedicated team!"</p></div>
                </div>



          

        </div>
    );
}
