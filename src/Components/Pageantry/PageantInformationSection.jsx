import React from 'react'

function PageantInformationSection({ blog_content }) {
    if (!blog_content || !blog_content.html) {
        return null;
    }
    console.log(blog_content);
  return (
    <section id="info">
        <div className="container">
            <div className="content" dangerouslySetInnerHTML={{ __html: blog_content.html }}>
              
            </div>
            <div className="content">
                <h4>Apply now</h4>
                <div className="form">
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default PageantInformationSection