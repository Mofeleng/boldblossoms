import React from 'react'
import NavigationBar from '../Components/NavigationBar';
import HeroSection from '../Components/Home/HeroSection';
import AboutSection from '../Components/Home/AboutSection';

function HomePage() {
  return (
    <>
        <NavigationBar />
        <HeroSection />
        <AboutSection />
    </>
  )
}

export default HomePage;