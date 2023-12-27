import React from 'react'
import NavigationBar from '../Components/NavigationBar';
import HeroSection from '../Components/Home/HeroSection';
import AboutSection from '../Components/Home/AboutSection';
import GetInvolvedSection from '../Components/Home/GetInvolvedSection';
import ContactSection from '../Components/Home/ContactSection';
import BlogPreviewSection from '../Components/Home/BlogPreviewSection';

function HomePage() {
  return (
    <>
        <NavigationBar />
        <HeroSection />
        <AboutSection />
        <GetInvolvedSection />
        <BlogPreviewSection />
        <ContactSection />

    </>
  )
}

export default HomePage;