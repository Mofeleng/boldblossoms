import React from 'react'
import './Pageant.css';

function ImageBackgroundHero({ img }) {
    if (!img || !img.url) {
        return null;
      }
  return (
    <div id="image_bg" className="section_img">
        <img src={img.url} />

    </div>
  )
}

export default ImageBackgroundHero