import React from 'react'

function Footer() {
  return (
    <div id="footer" className="footer">
        <div className="container">
            <h4 className="heading_smaller text_white">
                Boldblossoms<span className='text_primary'>.</span>
            </h4>
            <div className="footer_grid">
                <div className="footer_column">
                    <h4 className='heading_smallest'>Resources</h4>
                    <ul>
                    <a href='/'><li>Home</li></a>
                    <a href="/about"><li>About us</li></a>
                    <a href="/contestants"><li>Contestents</li></a>
                    <a href="/events"><li>Events</li></a>
                    </ul>
                    <h4 className="heading_smallest">Get involved</h4>
                    <ul>
                    <a href='/partners'><li>Sponsorships and Partnerships</li></a>
                    <a href="/pess kit"><li>Press kit</li></a>
                    <a href="/contestants"><li>Contestents</li></a>
                    <a href="/events"><li>Events</li></a>
                    </ul>
                </div>
                <div className="footer_column">
                    <h4 className='heading_smallest'>More links</h4>
                    <ul>
                    <a href="/blogs"><li>Blog</li></a>
                    <a href="/results"><li>Results</li></a>
                    </ul>
                </div>
                <div className="footer_column">
                    <h4>Join our newsletter</h4>
                    <div className="newsletter_form text_centered">
                        <form>
                            <input type="email" id="email" placeholder='email'/>
                            <button className="btn btn_primary">Join newsletter</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer