import React from 'react'
import NavigationBar from '../Components/NavigationBar';
import HeroSection from '../Components/Home/HeroSection';
import AboutSection from '../Components/Home/AboutSection';
import GetInvolvedSection from '../Components/Home/GetInvolvedSection';

function HomePage() {
  return (
    <>
        <NavigationBar />
        <HeroSection />
        <AboutSection />
        <GetInvolvedSection />
        

    </>
  )
}

export default HomePage;