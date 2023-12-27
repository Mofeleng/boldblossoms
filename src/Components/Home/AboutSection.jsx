import React from 'react'
import GridTemplate from '../UserInterface/GridTemplate';
import SectionHeadingTemplate from '../UserInterface/SectionHeadingTemplate';

function AboutSection() {
  return (
    <section id="about">
          <div className="container text_centered">
            <SectionHeadingTemplate
              label={"About us"}
              heading={`Unveiling Bold Blossoms: A New Chapter in Empowered Elegance`}
              paragraph={`Welcome to 'Unveiling Bold Blossoms,' where we embark on a transformative journey, scripting a new chapter in the realm of empowered elegance. This inaugural pageant is more than an event; it's a celebration of individuality, resilience, and the empowering beauty that lies within.`}
            />
            <div className="grid_container">
            <GridTemplate
                  direction={1}
                  img_src_classname={"image_wrapper_vision_jpg"}
                  text_wrapper_heading={"Our vision"}
                  text_wrapper_text={`At the heart of the inaugural "Bold Blossoms" pageant is a vision to redefine the narrative of beauty and grace. We aim to create a platform that goes beyond the surface, celebrating not just outer beauty but the strength, resilience, and unique stories that define empowered elegance.With a commitment to inclusivity, diversity, and authenticity, we embark on a journey to set new standards for beauty pageantry, where every individual is empowered to blossom boldly`}
                  is_button={0}
                />
              <GridTemplate
                direction={0}
                img_src_classname={"image_wrapper_mission_jpg"}
                text_wrapper_heading={"Our mission"}
                text_wrapper_text={`Our mission is to cultivate a community that fosters growth, self-discovery, and empowerment. "Bold Blossoms" is not just a pageant; it's a movement dedicated to uplifting individuals and providing a stage for their voices to be heard. Through mentorship, support, and a commitment to charitable causes, we strive to create a positive impact that extends beyond the runway. Join us in shaping a new era of pageantry—one that embraces individuality and empowers participants to bloom confidently on their unique paths.`}
                is_button={0}
              />
            </div>
          </div>
        </section>
  )
}

export default AboutSection;