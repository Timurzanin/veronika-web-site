

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './sections/Home';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { dark } from './styles/Theme';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.min.css';
import { AnimatePresence } from 'framer-motion';
import About from './sections/About';
import Sections from './sections/Sections';
import ScrollTriggerProxy from './Components/ScrollTriggerProxy';
// import Title from './Components/Title';
import Banner from './sections/Banner';

function App() {

  

  const containerRef = useRef(null);


  return (
    <>
 
      <GlobalStyle />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              // ... all available Locomotive Scroll instance options 
            }
          }
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className='App' data-scroll-container ref={containerRef}>
            
              <Home />
              <About />
              <Sections />
               <Banner/>
            </main>
            
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>

    </>
  );
}

export default App;
