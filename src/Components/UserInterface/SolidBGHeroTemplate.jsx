import React from 'react'

function SolidBGHeroTemplate(props) {
  return (
    <div id="solidbg" className='bg_darkgrey'>
        <div className="container text_centered text_white">
            <SectionHeadingTemplate
                {...props}
            />
        </div>
    </div>
  )
}

export default SolidBGHeroTemplate