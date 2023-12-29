import React from 'react'
import SectionHeadingTemplate from './SectionHeadingTemplate'

function SolidBGHeroTemplate({ label, heading, paragraph}) {
  return (
    <div id="solidbg" className='bg_darkgrey'>
        <div className="container text_centered text_white">
            <SectionHeadingTemplate
                label={label}
                heading={heading}
                paragraph={paragraph}
            />
        </div>
    </div>
  )
}

export default SolidBGHeroTemplate