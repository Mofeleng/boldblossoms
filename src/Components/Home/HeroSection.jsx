import React from 'react'

function HeroSection() {
  return (
    <div className="hero">
          <div className="container text_white">
          <div className="hero_content">
            <h1 className='title'>Bold Blossoms: A Celebration of Empowered Elegance</h1>
            <p className="paragraph">
            Step into a world where boldness meets blossoming beauty. Welcome to the "Bold Blossoms" pageant, where we celebrate the strength, resilience, and grace that define empowered elegance. Immerse yourself in a tapestry of vibrant magenta hues symbolizing energy and passion, set against a canvas of pure white that echoes the simplicity of strength. As our contestants embrace the stage, a subtle touch of gold accentuates their individuality and sophistication..
            </p>
            <div className="buttons_hero">
              <a href="/apply" className='btn btn_primary'>Apply now</a>
              <a href="/partners" className='btn btn_accent text_white'>Become a sponsor</a>
            </div>
          </div>
          </div>
        </div>
  )
}

export default HeroSection;