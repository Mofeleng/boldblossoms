import React from 'react'

function BlogListItemTemplate() {
  return (
    <a href="/blog/4jdmkdn">
        <div className="blog_item">
                <div className="image_blog_wrapper">
                    <img src="../src/assets/mission.jpg" width={250} height={250}/>
                </div>
                <div className="blog_info">
                    <span className="label">Contestant spotlight</span>
                    <h3 className="heading_smaller">Blooming Resilience: A Spotlight on Our Contestants</h3>
                    <p className="paragraph">
                    Discover the incredible stories of strength and resilience that define our Bold Blossoms contestants. Emily Johnson shares intimate interviews and highlights, showcasing the powerful narratives that make each contestant a unique and inspiring individual.
                    </p>
                    <span className="label text_black">EMILY JOHNSON - FEBRUARY 15, 2023</span>
                </div>
        </div>
    </a>
  )
}

export default BlogListItemTemplate