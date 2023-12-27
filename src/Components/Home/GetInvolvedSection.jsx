import React from 'react'
import GridTemplate from '../UserInterface/GridTemplate';

function GetInvolvedSection() {
  return (
    <section id="get_involved" className='bg_secondary'>
        <div className="container text_centered">
            <span className="label">Get involved</span>
            <h2 className="heading">Unveiling Bold Blossoms: A New Chapter in Empowered Elegance</h2>
            <p className="paragraph">
            Join us in shaping the future of pageantry. Whether you're ready to grace the stage, lend a helping hand, or partner with us, "Bold Blossoms" invites you to become a part of a movement that celebrates empowerment and beauty in every form.
            </p>
            <div className="grid_container">
               <GridTemplate
                direction={1}
                img_src_classname={"image_wrapper_contestant_jpg"}
                text_wrapper_heading={"Become a contestant"}
                text_wrapper_text={`Unleash your inner strength, grace, and beauty on a stage where individuality takes center stage. Embrace the opportunity to become a contestant in the inaugural "Bold Blossoms" pageant, where we celebrate not just what you wear but who you are. Seize the chance to make a statement, inspire others, and be a part of a pageant that values empowerment, diversity, and authenticity. It's time to step into the spotlight and let your unique bloom shine. Apply now and embark on a journey of self-discovery and empowerment.`}
                is_button={1}
                button_type={1}
                button_text={"Apply now"}
                button_link={"/apply"}
               />
               
            </div>
        </div>
    </section>
  )
}

export default GetInvolvedSection;