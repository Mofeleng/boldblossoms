import React from 'react'
import './Pageants.css'
import { useState, useEffect } from 'react'
import { gql, GraphQLClient } from 'graphql-request'
function PageantPreviewCard({ title, coverPhoto, preview, slug}) {
  return (
    <div className="pageant">
        <div className="image_cover">
            <img src={coverPhoto.url} alt=""/>
        </div>
        <div className="pageant_info">
            <h3 className="heading_smaller">{title}</h3>
            <p className="paragraph">
                { preview }
            </p>
            <div className="buttons">
                <a href={`/apply/${slug}`} className='btn btn_primary'>Apply now</a>
                <a href={`/pageant/${slug}`} className='btn btn_accent btn_border_black'>Learn More</a>
            </div>
            
        </div>
    </div>
  )
}

export default PageantPreviewCard