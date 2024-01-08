import React from 'react'
import { Link } from 'react-router-dom'

function PageError( { error } ) {
  return (
    <div className="error-container">
        <h2>Server error!</h2>
        <p>{ error }. <Link to="/" className='text_black'>Go Home</Link></p>
  </div>
  )
}

export default PageError