import React from 'react'
import './Pageants.css';

function PageantPreviewCard() {
  return (
    <div className="pageant">
        <div className="image_cover">
            <img src="/src/assets/vision.jpg" alt=""/>
        </div>
        <div className="pageant_info">
            <h3 className="heading_smaller">Mrs Bold Blossoms 24</h3>
            <p className="paragraph">
            Bold Blossoms proudly presents its inaugural pageant, "Mrs Bold Blossoms 24," where grace meets empowerment, and every woman is a blooming masterpiece. As we celebrate our 24th year of boldness, beauty, and blossoming strength, we invite extraordinary women from diverse backgrounds to showcase their elegance and embrace the power within.
            </p>
            <div className="buttons">
                <a href="/apply/in" className='btn btn_primary'>Apply now</a>
                <a href="/pagent/pagent_info" className='btn btn_accent btn_border_black'>Learn More</a>
            </div>
            
        </div>
    </div>
  )
}

export default PageantPreviewCard