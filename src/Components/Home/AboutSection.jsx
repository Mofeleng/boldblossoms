import React from 'react'

function AboutSection() {
  return (
    <section id="about">
          <div className="container text_centered">
            <span className="label">About us</span>
            <h2 className='heading'>Unveiling Bold Blossoms: A New Chapter in Empowered Elegance</h2>
            <p className='paragraph'>Welcome to 'Unveiling Bold Blossoms,' where we embark on a transformative journey, scripting a new chapter in the realm of empowered elegance. This inaugural pageant is more than an event; it's a celebration of individuality, resilience, and the empowering beauty that lies within.</p>

            <div className="grid_container">
              <div className="about_us_grid">
                <div className="text_wrapper text_start padding_right_sm">
                  <h3 className="heading_small">Our vision</h3>
                  <p className="paragraph">
                  At the heart of the inaugural "Bold Blossoms" pageant is a vision to redefine the narrative of beauty and grace. We aim to create a platform that goes beyond the surface, celebrating not just outer beauty but the strength, resilience, and unique stories that define empowered elegance.With a commitment to inclusivity, diversity, and authenticity, we embark on a journey to set new standards for beauty pageantry, where every individual is empowered to blossom boldly.
                  </p>
                </div>
                <div className="image_wrapper_vision_jpg" id="image_wrapper">
                </div>
                
              </div>

              <div className="our_mission_grid">
                <div className="image_wrapper_mission_jpg" id="image_wrapper">

                </div>
                <div className="text_wrapper text_start padding_left_sm">
                  <h3 className="heading_small">Our mission</h3>
                  <p className="paragraph">
                  Our mission is to cultivate a community that fosters growth, self-discovery, and empowerment. "Bold Blossoms" is not just a pageant; it's a movement dedicated to uplifting individuals and providing a stage for their voices to be heard. Through mentorship, support, and a commitment to charitable causes, we strive to create a positive impact that extends beyond the runway. Join us in shaping a new era of pageantry—one that embraces individuality and empowers participants to bloom confidently on their unique paths.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default AboutSection;