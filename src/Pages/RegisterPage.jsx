import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import HeroSection from '../Components/Registeration/HeroSection';
import RegistrationForm from '../Components/Registeration/RegistrationForm';
import SolidBGHeroTemplate from '../Components/UserInterface/SolidBGHeroTemplate';

function RegisterPage() {
  return (
    <>
        <NavigationBar />
            <SolidBGHeroTemplate
                label={"Register today"}
                heading={"Become part of the magic: Register for our next pageant."}
                paragraph={`Welcome to 'Unveiling Bold Blossoms,' where we embark on a transformative journey, scripting a new chapter in the realm of empowered elegance. This inaugural pageant is more than an event; it's a celebration of individuality, resilience, and the empowering beauty that lies within.`}
            />
            <RegistrationForm />
        <Footer />
    </>
  )
}

export default RegisterPage