import React from 'react'
import SolidBGHeroTemplate from '../Components/UserInterface/SolidBGHeroTemplate'
import ContactForm from '../Components/ContactForm'

function Contact() {
  return (
    <>
        <SolidBGHeroTemplate
            label={"Contact us"}
            heading={"fill out our contact form and we’ll be in touch"}
            paragraph={`If you have any queries you want answered feel free to send us an email and we’ll be in  touch.`}
        />

        <section id="contact_form">
            <div className="container text_centered">
                <h4 className="heading_smaller">Contact us</h4>
                <ContactForm />
            </div>
        </section>
    </>
  )
}

export default Contact