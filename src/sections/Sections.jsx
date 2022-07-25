// import React from 'react'
// import styled from 'styled-components'
// import video from '../assets/54225262_146906229678136_7071926114080438936_n.mp4'
// import '../Components/Images.css';

// import { useRef, useEffect, useState } from 'react';

// import { motion } from 'framer-motion';



// import img1 from '../assets/Images/IMG_2510.JPG'
// import img2 from '../assets/Images/IMG_7658.JPG'
// import img3 from '../assets/Images/img4.jpg'
// import img4 from '../assets/Images/photo1656877391.jpeg'
// import img5 from '../assets/Images/image2.jpg'
// import img6 from '../assets/Images/IMG_6798.JPG'
// import img7 from '../assets/Images/img1 (2).jpg'
// import img8 from '../assets/Images/IMG_1307.JPG.jpg'
// import img9 from '../assets/Images/img6.jpg'
// import img10 from '../assets/Images/photo1656967899.jpeg'
// import img11 from '../assets/Images/photo1656877940.jpeg'


// const Section = styled.section`
// min-height: 100vh;
// height: auto;
// width: 100vw;
// margin: 0 auto;
// overflow: hidden;

// display: flex;
// justify-content: flex-start;
//  align-items: flex-start;

//  position: relative;
// `;

// const Title = styled.h1`
// font-size: ${props => props.theme.fontxxxl};
// font-family: 'Kaushan Script';
// font-weight: 300;
// padding-right: 8px;
// ${'' /* color: ${props => props.theme.body}; */}

// ${'' /* text-shadow: 0 0 10px ${props => props.theme.body}; */}
// position: absolute;
// top: 1rem;
// left: 5%;
// z-index: 11;
// background: #BC48FF;
// background: radial-gradient(circle farthest-corner at center center, #BC48FF 0%, #474BFF 100%);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;


// `;

// const Left = styled.div`
// width: 35%;
// min-height:100vh;
// z-index: 5;

// video{
//   width: 100%;
//   height: 100vh;
//   object-fit: cover;
//   ${'' /* border-radius: 120px 20px 120px 20px; */}
//   border-top-left-radius: 80px;
// }
// position: fixed;
// left: 0;
// display: flex;
// justify-content: center;
// align-items: center;

// `;

// const Right = styled.div`

// position: absolute;
// left: 5%;
// padding-left: 30%;
// min-height: 100vh;



// font-size:12px;

//   background:url(https://cdn.wallpapersafari.com/14/89/gEHOdT.jpg) ;
// 	height:500px; /* this value is not important, just not zero */
// 	animation: ani 200s linear infinite ;


// border-bottom-right-radius: 80px;
// width: 65%;
// display: flex;
// justify-content: flex-start;
// align-items: center;

// @keyframes ani{
// 	0%{background-position: 0 0;}
// 	100%{background-position: 100vw 0;}
// }
// h1{
//     width: 5rem;
//     margin: 0 2rem;
// }






// `;

// const Item = styled(motion.div)`


//   ${'' /* width: 20rem; */}
//   margin-right: 6rem;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   img{
//         min-width: 20rem;
       
        
//         width: 100%;
//         height: auto;
//         cursor: pointer;
//         z-index: 10;
//         border-radius: 120px 20px 120px 20px;
//         display: flex;
        
//        pointer-events: none;
       

//   }
  
//   .item{

//  min-width: 21rem;
//  padding: 50px;

 
// }


// .carousel{
//  cursor: grab;

 
// }
//   h1{
//     display: inline-block;
//     width: fit-content;
//     font-weight:500;
//     text-align: center;  
//     cursor: pointer;       
//                              ${'' /* not work cursor work only without video */}
//     color: black;
//     text-shadow: 0 0 10px ${props => props.theme.body};
//   }
// `;

// const Product = ({ img, title = '' }) => {

//     return (
//         <Item
//             initial={{ filter: 'grayscale(100%)' }}
//             whileInView={{ filter: 'grayscale(0%)' }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: false, amount: 'all' }}

//         >

//             <img src={img} alt={title} />
//             <h1>{title}</h1>

//         </Item>

//     )
// }

// export default function Sections() {

//     const [width, setWidth] = useState(0);
//     const carousel = useRef ();

//     useEffect(() => {
//         setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//     },[]);
   


//     return (
//         <Section >
       
//             <Title  data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"  >
//                 My Brides Collection
//             </Title>
//             <Left>

//                 <video src={video} type="video/mp4" autoPlay loop muted />

//             </Left>
//             <Right ref={carousel} >
//                 <motion.div  className='carousel'>
//                     <motion.div drag="x" dragConstraints={{ right: 0,left : -width }} className='inner-carousel'>
                       

//                         <motion.div style={{ display: 'flex' }} className="item"
                         
//                         >
//                             <Product img={img1} title='HairStyle Boho' />
//                             <Product img={img2} title='HairStyle Waves and Bridal MakeUp' />
//                             <Product img={img3} title='Work Style' />
//                             <Product img={img4} title='HairStyle Braid' />
//                             <Product img={img5} title='Wedding MakeUp' />
//                             <Product img={img6} title='Half collected HairStyle' />
//                             <Product img={img7} title='Bridal Bun HairStyle' />
//                             <Product img={img8} title='Work Process ' />
//                             <Product img={img9} title='Curls HairStyle' />
//                             <Product img={img10} title='Hollywood Waves HairStyle' />
//                             <Product img={img11} title='HeadPiece' />
                            

//                         </motion.div>

//                     </motion.div>
//                 </motion.div>
//             </Right>

//         </Section>
//     )
// }



// import React from 'react';
// import styled from "styled-components";
// import './sec.css'
// import portfolio3 from '../assets/Images/IMG_2510.JPG'
// import portfolio4 from  '../assets/Images/IMG_7658.JPG'
// import portfolio5 from '../assets/Images/img4.jpg'
// import portfolio6 from '../assets/Images/photo1656877391.jpeg'
// import portfolio7 from '../assets/Images/image2.jpg'
// import portfolio8 from '../assets/Images/IMG_6798.JPG'
// import portfolio9 from  '../assets/Images/photo1656967899.jpeg'
// import portfolio10 from '../assets/Images/photo1656877940.jpeg'
// import { motion } from "framer-motion";
//  '../assets/Images/IMG_2510.JPG'
//  '../assets/Images/IMG_7658.JPG'
//  '../assets/Images/img4.jpg'
//  '../assets/Images/photo1656877391.jpeg'
//  '../assets/Images/image2.jpg'
// '../assets/Images/IMG_6798.JPG'
//  '../assets/Images/img1 (2).jpg'
//  '../assets/Images/IMG_1307.JPG.jpg'
//  '../assets/Images/img6.jpg'
//  '../assets/Images/photo1656967899.jpeg'
//  '../assets/Images/photo1656877940.jpeg'


// function Section() {

//   return (
//     <div class="box-container">
// 	<div class="box-item">
//     <div class="flip-box">
//       <div class="flip-box-front text-center" style={{ backgroundImage: 'url(https://s25.postimg.cc/hj4c4qnov/cta-3.png)'}} >
//         <div class="inner color-white">
//           <h3 class="flip-box-header">Custom Domains</h3>
//           <p>A short sentence describing this callout is.</p>
//           <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
//         </div>
//       </div>
//       <div class="flip-box-back text-center" style={{ backgroundImage: 'url(https://s25.postimg.cc/hj4c4qnov/cta-3.png)'}} >
//         <div class="inner color-white">
//           <h3 class="flip-box-header">Custom Domains</h3>
//           <p>A short sentence describing this callout is.</p>
//           <button class="flip-box-button">Learn More</button>
//         </div>
//       </div>
//     </div>
// 	</div>
// 	<div class="box-item">
//     <div class="flip-box">
//       <div class="flip-box-front text-center" style={{ backgroundImage: 'url(https://s25.postimg.cc/hj4c4qnov/cta-3.png)'}}/>
//         <div class="inner color-white" >
//           <h3 class="flip-box-header">Never Sleeps</h3>
//           <p>A short sentence describing this callout is.</p>
//           <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img" />
//         </div>
//       </div>
//       <div class="flip-box-back text-center" style={{ backgroundImage: 'url(https://s25.postimg.cc/hj4c4qnov/cta-3.png)'}}/>
//         <div class="inner color-white">
//           <h3 class="flip-box-header">Never Sleeps</h3>
//           <p>A short sentence describing this callout is.</p>
//           <button class="flip-box-button">Learn More</button>
//         </div>
    
    
// 	</div>
// 	<div class="box-item">
//     <div class="flip-box">
//       <div class="flip-box-front text-center filter-"  style={{ backgroundImage: 'url(https://s25.postimg.cc/hj4c4qnov/cta-3.png)'}}/>
//         <div class="inner color-white">
//           <h3 class="flip-box-header">Dedicated</h3>
//           <p>A short sentence describing this callout is.</p>
//           <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img" />
       
//       </div>
//       <div class="flip-box-back text-center"  style={{ backgroundImage: 'url(https://s25.postimg.cc/hj4c4qnov/cta-3.png)'}}/>
//         <div class="inner color-white">
//           <h3 class="flip-box-header">Dedicated</h3>
//           <p>A short sentence describing this callout is.</p>
//           <button class="flip-box-button">Learn More</button>
//         </div>
//       </div>
//     </div>
//     <div class="box-item">
//     <div class="flip-box">
//       <div class="flip-box-front text-center" style={{ backgroundImage: 'url(https://s25.postimg.cc/hj4c4qnov/cta-3.png)'}} >
//         <div class="inner color-white">
//           <h3 class="flip-box-header">Custom Domains</h3>
//           <p>A short sentence describing this callout is.</p>
//           <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
//         </div>
//       </div>
//       <div class="flip-box-back text-center" style={{ backgroundImage: 'url(https://s25.postimg.cc/hj4c4qnov/cta-3.png)'}} >
//         <div class="inner color-white">
//           <h3 class="flip-box-header">Custom Domains</h3>
//           <p>A short sentence describing this callout is.</p>
//           <button class="flip-box-button">Learn More</button>
//         </div>
//       </div>
//     </div>
// 	</div>
// 	<div class="box-item">
//     <div class="flip-box">
//       <div class="flip-box-front text-center" style={{ backgroundImage: 'url(https://s25.postimg.cc/hj4c4qnov/cta-3.png)'}}/>
//         <div class="inner color-white" >
//           <h3 class="flip-box-header">Never Sleeps</h3>
//           <p>A short sentence describing this callout is.</p>
//           <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img" />
//         </div>
//       </div>
//       <div class="flip-box-back text-center" style={{ backgroundImage: 'url(https://s25.postimg.cc/hj4c4qnov/cta-3.png)'}}/>
//         <div class="inner color-white">
//           <h3 class="flip-box-header">Never Sleeps</h3>
//           <p>A short sentence describing this callout is.</p>
//           <button class="flip-box-button">Learn More</button>
//         </div>
    
    
// 	</div>
// 	<div class="box-item">
//     <div class="flip-box">
//       <div class="flip-box-front text-center filter-"  style={{ backgroundImage: 'url(https://s25.postimg.cc/hj4c4qnov/cta-3.png)'}}/>
//         <div class="inner color-white">
//           <h3 class="flip-box-header">Dedicated</h3>
//           <p>A short sentence describing this callout is.</p>
//           <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img" />
       
//       </div>
//       <div class="flip-box-back text-center"  style={{ backgroundImage: 'url(https://s25.postimg.cc/hj4c4qnov/cta-3.png)'}}/>
//         <div class="inner color-white">
//           <h3 class="flip-box-header">Dedicated</h3>
//           <p>A short sentence describing this callout is.</p>
//           <button class="flip-box-button">Learn More</button>
//         </div>
//       </div>
//     </div>
// 	</div>

//   );
// }

// export default Section;







import React from 'react';
import styled from "styled-components";
import './sec.css'
import img1 from '../assets/Images/IMG_2510.JPG'



function Section() {

  return (

<div>
<div class="box-container">
	<div class="box-item">
    <div class="flip-box">
      <div class="flip-box-front text-center" style={{backgroundImage: 'url(https://i.imgur.com/MM8yudX.jpg)'}}>
        <div class="inner color-white">
          <h3 class="flip-box-header">HairStyle Boho</h3>
          {/* <p>A short sentence .</p> */}
          <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
        </div>
      </div>
      <div class="flip-box-back text-center" style={{backgroundImage: 'url(https://i.imgur.com/HSEvtH0.jpg)'}}>
        <div class="inner color-white">
          <h3 class="flip-box-header">Bridal MakeUp</h3>
          {/* <p>A short sentence</p> */}
          {/* <button class="flip-box-button">Learn More</button> */}
        </div>
      </div>
    </div>
	</div>
	<div class="box-item">
    <div class="flip-box">
      <div class="flip-box-front text-center" style={{backgroundImage: 'url(https://i.imgur.com/mckGvw3.jpg)'}}>
        <div class="inner color-white">
          <h3 class="flip-box-header">Never Sleeps</h3>
         
          <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
        </div>
      </div>
      <div class="flip-box-back text-center" style={{backgroundImage: 'url(https://i.imgur.com/DVrX84e.png)'}}>
        <div class="inner color-white">
          <h3 class="flip-box-header">Never Sleeps</h3>
          <p>A short sentence describing this callout is.</p>
          {/* <button class="flip-box-button">Learn More</button> */}
        </div>
      </div>
    </div>
	</div>
	<div class="box-item">
    <div class="flip-box">
      <div class="flip-box-front text-center filter-" style={{backgroundImage: 'url(https://i.imgur.com/xlP7u6A.jpg)'}}>
        <div class="inner color-white">
          <h3 class="flip-box-header">Dedicated</h3>
          <p>A short sentence describing this callout is.</p>
          <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
        </div>
      </div>
      <div class="flip-box-back text-center" style={{backgroundImage: 'url(https://i.imgur.com/d5kpXs3.jpg)'}}>
        <div class="inner color-white">
          <h3 class="flip-box-header">Dedicated</h3>
          <p>A short sentence describing this callout is.</p>
          {/* <button class="flip-box-button">Learn More</button> */}
        </div>
      </div>
    </div>
	</div>
</div>


<div class="box-container">
	<div class="box-item">
    <div class="flip-box">
      <div class="flip-box-front text-center" style={{backgroundImage: 'url(https://i.imgur.com/JcZnZVS.jpg)'}}>
        <div class="inner color-white">
          <h3 class="flip-box-header">Custom Domains</h3>
          <p>A short sentence describing this callout is.</p>
          <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
        </div>
      </div>
      <div class="flip-box-back text-center" style={{backgroundImage: 'url(https://i.imgur.com/0peUCHq.jpg)'}}>
        <div class="inner color-white">
          <h3 class="flip-box-header">Custom Domains</h3>
          <p>A short sentence describing this callout is.</p>
          {/* <button class="flip-box-button">Learn More</button> */}
        </div>
      </div>
    </div>
	</div>
	<div class="box-item">
    <div class="flip-box">
      <div class="flip-box-front text-center" style={{backgroundImage: 'url(https://i.imgur.com/vIsaQ5Y.jpg)'}}>
        <div class="inner color-white">
          <h3 class="flip-box-header">Never Sleeps</h3>
          <p>A short sentence describing this callout is.</p>
          <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
        </div>
      </div>
      <div class="flip-box-back text-center" style={{backgroundImage: 'url(https://i.imgur.com/CJygj0p.jpg)'}}>
        <div class="inner color-white">
          <h3 class="flip-box-header">Never Sleeps</h3>
          <p>A short sentence describing this callout is.</p>
          {/* <button class="flip-box-button">Learn More</button> */}
        </div>
      </div>
    </div>
	</div>
	<div class="box-item">
    <div class="flip-box">
      <div class="flip-box-front text-center filter-" style={{backgroundImage: 'url(https://i.imgur.com/LocPqXQ.jpg)'}}>
        <div class="inner color-white">
          <h3 class="flip-box-header">Dedicated</h3>
          <p>A short sentence describing this callout is.</p>
          <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img"/>
        </div>
      </div>
      <div class="flip-box-back text-center" style={{backgroundImage: 'url(https://i.imgur.com/JkW9ZEw.jpg)'}}>
        <div class="inner color-white">
          <h3 class="flip-box-header">Dedicated</h3>
          <p>A short sentence describing this callout is.</p>
          {/* <button class="flip-box-button">Learn More</button> */}
        </div>
      </div>
    </div>
	</div>
</div>




</div>


    );
}
export default Section;