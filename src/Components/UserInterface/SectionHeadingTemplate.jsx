import React from 'react'

function SectionHeadingTemplate({ label, heading, paragraph}) {
  return (
    <>
        <span className="label">{label}</span>
        <h2 className='heading'>{heading}</h2>
        <p className='paragraph'>{paragraph}</p>
    </>
  )
}

export default SectionHeadingTemplate;