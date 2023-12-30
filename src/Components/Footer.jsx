import React from 'react'

function Footer() {
  return (
    <footer className="footer">
    <div className="container">
      <div className="footer-content text_centered">
        <div className="footer-section">
          <h2 className='heading_smaller'>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123 456 7890</p>
          <p>Phone</p>
        </div>
        <div className="footer-section">
          <h2 className='heading_smaller'>Follow Us</h2>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer-section">
          <h2 className='heading_smaller'>Company</h2>
          <p>About Us</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Bold Blossoms. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer