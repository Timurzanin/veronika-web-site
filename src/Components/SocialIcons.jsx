// import { motion } from 'framer-motion'
// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'
// import { DarkTheme } from '../styles/Theme'


// const Icons = styled.div`
// position: absolute ;
// top: 31rem;
// left: 1rem;

// weight: 100%;
// z-index: 5;

// a{
// 	display: flex;
// 	align-items: flex-end;
// }


// svg{
//     width: 5rem;
//     height: auto;
//     overflow: visible;
//     stroke-linejoin: round;
//     stroke-linecap: round;


//     g{
//         path{
//             stroke: ${props => props.theme.text};
//         }
//     }
// }
// `
// // const Icons = styled.div`
// // display: flex;
// // flex-direction: column;
// // align-items: center;
// // position: absolute;
// // bottom: 0;
// // left: 2rem;
// // z-index:3;

// // curssor: pointer;
// // &>*:not(:last-child){
// //     margin: 0.5rem 0;
// // }
// // `


// const pathVariants = {

//     hidden: {
//         opacity: 0,
//         pathLength: 0,
//     },
//     visible: {
//         opacity: 1,
//         pathLength: 1,

//         transition: {
//             duration: 2,
//             ease: "easeInOut"
//         }

//     },
// }
// const Line = styled(motion.span)`
// width: 2px;
// height: 8rem;
// background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
// `

// const SocialIcons = (props) => {
//     return (
//         <Icons>
//             <motion.div
//                 initial={{ transform: "scale(0)" }}
//                 animate={{ scale: [0, 1, 1.5, 1] }}
//                 transition={{ type: 'spring', duration: 1, delay: 1 }}
//             >
//                 <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/codebucks27" }}>
//                     {/* <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } /> */}
//                 </NavLink>
//             </motion.div>
//             <motion.div
//                 initial={{ transform: "scale(0)" }}
//                 animate={{ scale: [0, 1, 1.5, 1] }}
//                 transition={{ type: 'spring', duration: 1, delay: 1.2 }}
//             >
//                 <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://twitter.com/code_bucks" }}>
//                     {/* <Twitter width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } /> */}
//                 </NavLink>
//             </motion.div>
//             <motion.div

//             >
//                 <Link target="_blank" to={{ pathname: "https://youtube.com" }}>
//                     {/* <Facebook width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } /> */}
//                     <svg
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 512 512"

//                     >
//                         <motion.path
//                             variants={pathVariants}
//                             animate="visible"
//                             initial="hidden"
//                             d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
//                             fill="black"
//                             stroke="black"
//                             stroke-width='2'
//                         />

//                     </svg>

//                 </Link>
//             </motion.div>
//             <motion.div
            
//             >
//                 <Link target="_blank" to={{ pathname: "https://youtube.com" }}>
//                     {/* <YouTube width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } /> */}

//                     <svg
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="500"
//                         height="500"
//                         viewBox="0 0 140 100"

//                     >
//                         <motion.path
//                             variants={pathVariants}
//                             animate="visible"
//                             initial="hidden"
//                             fill="black"
//                             d="M66.010 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"
//                             stroke="black"
//                             stroke-width='2'
//                     width="500px"
//                     height="200px"

//                             />
//                     </svg>

//                 </Link>
//             </motion.div>

//             <Line color={props.theme}

//                 initial={
//                     {
//                         height: 0
//                     }
//                 }
//                 animate={{
//                     height: '8rem'
//                 }}
//                 transition={{
//                     type: 'spring', duration: 1, delay: 0.8
//                 }}
//             />
//         </Icons>
//     )
// }

// export default SocialIcons



