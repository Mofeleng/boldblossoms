import React from 'react'
import './contestant.css'

function ContestantItem() {
  return (
    <div className="contestant">
        <div className="image_rounded">
            <img src="/src/assets/vision.jpg" alt="" />
        </div>
        <div className="contestant_info">
            <h3 className="heading_smaller">Jenny Smith</h3>
            <p className="paragraph">
                Jenny Smith is from Hoedspruit Limpopo and she believes that even the smallest voices can make it major. Her dream is to become a supermodel for some of the worlds biggest brands and we believe she can do it!
            </p>
            <b>Rank: 500</b><br />
            <b>Pageant: Mrs Bold Blossoms 24</b>
            <div className="buttons">
                <a href="/contestant" className='btn btn_primary'>See More</a>
                <a href="" className='btn btn_accent btn_border_black'>Vote</a>
            </div>
        </div>
    </div>
  )
}

export default ContestantItem