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
                    <a href="/about"><li>About us</li></a>
                    <a href="/contestants"><li>Contestents</li></a>
                    <a href="/events"><li>Events</li></a>
                    <a href="/blogs"><li>Blog</li></a>
                    <a href="/results"><li>Results</li></a>
                  </ul>
                </nav>
                <div className="buttons">
                  <a href="/apply" className='btn btn_primary'>Apply now</a>
                  <a href='/login' className='btn btn_accent'>Log in</a>
                </div>
            </div>
           </div>
        </div>
  )
}

export default NavigationBar;