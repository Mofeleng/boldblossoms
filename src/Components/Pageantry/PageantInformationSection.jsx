import React, { useState } from 'react'
import ApplicationForm from './ApplicationForm';

function PageantInformationSection({ blog_content, pageantName }) {

    if (!blog_content || !blog_content.html) {
        return null;
    }

  return (
    <section id="info">
        <div className="container">
            <div className="content" dangerouslySetInnerHTML={{ __html: blog_content.html }}>
            </div>
            <div className="content">
                <h4>Apply now</h4>
                <ApplicationForm pageantName={pageantName} />
            </div>
        </div>
    </section>
  )
}

export default PageantInformationSection