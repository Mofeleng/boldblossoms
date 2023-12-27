import React from 'react'
import SectionHeadingTemplate from '../UserInterface/SectionHeadingTemplate';
import ContactForm from '../ContactForm';

function ContactSection() {
  return (
    <section id="contact_us" className='bg_secondary'>
        <div className="container text_centered">
            <SectionHeadingTemplate
                label={"Get in touch"}
                heading={"fill out our contact form and we’ll be in touch"}
                paragraph={`If you have any queries you want answered feel free to send us an email and we’ll be in  touch.`}
            />
            <ContactForm />
        </div>
    </section>
  )
}

export default ContactSection;