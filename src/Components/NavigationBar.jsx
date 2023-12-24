import React from 'react'

function NavigationBar() {
  return (
    <div className="navigation_bar">
           <div className="container">
            <div className="navbar">
                <div className="brand">
                    <h1 className='logo'>Boldblossoms<span className='text_primary'>.</span></h1>
                </div>
                <nav>
                  <ul>
                    <li>About us</li>
                    <li>Contestents</li>
                    <li>Events</li>
                    <li>Partnerships</li>
                    <li>Blog</li>
                    <li>Results</li>
                  </ul>
                </nav>
                <div className="buttons">
                  <a href="/apply" className='btn btn_primary'>Apply now</a>
                  <a href='/contact' className='btn btn_accent'>Contact us</a>
                </div>
            </div>
           </div>
        </div>
  )
}

export default NavigationBar;