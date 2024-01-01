import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import RegistrationForm from '../Components/Registeration/RegistrationForm';
import SolidBGHeroTemplate from '../Components/UserInterface/SolidBGHeroTemplate';
import ApplicationForm from '../Components/Pageantry/ApplicationForm';
import { useParams } from 'react-router-dom';


function Register() {
  const { slug } = useParams();
  return (
    <>
            <SolidBGHeroTemplate
                label={"Register today"}
                heading={"Become part of the magic: Register for our next pageant."}
                paragraph={`Welcome to 'Unveiling Bold Blossoms,' where we embark on a transformative journey, scripting a new chapter in the realm of empowered elegance. This inaugural pageant is more than an event; it's a celebration of individuality, resilience, and the empowering beauty that lies within.`}
            />
            <section id="application">
              <div className="container">
                <div className="content">
                  <h4 className="heading_smaller">Apply now</h4>
                  <ApplicationForm pageantName={slug} />
              </div>
              </div>
            </section>
           
    </>
  )
}

export default Register