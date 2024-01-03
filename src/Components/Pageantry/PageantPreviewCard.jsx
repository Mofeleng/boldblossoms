import React from 'react'
import { useState, useEffect } from 'react'
import { gql, GraphQLClient } from 'graphql-request'
import { Link } from 'react-router-dom'

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
                <Link to={`/apply/${slug}`} className='btn btn_primary'>Apply now</Link>
                <Link to={`/pageant/${slug}`} className='btn btn_accent btn_border_black'>Learn More</Link>
            </div>
            
        </div>
    </div>
  )
}

export default PageantPreviewCard