import React from 'react'
import SectionHeadingTemplate from '../UserInterface/SectionHeadingTemplate'
import BlogPreviewCard from '../UserInterface/BlogPreviewCard'

function BlogPreviewSection() {
  return (
    <section id="blog_preview">
        <div className="container text_centered">
            <SectionHeadingTemplate
                label={"Stay updated"}
                heading={"Keep up with the bold blossoms by reading our blog."}
                paragraph={`Stay connected and delve deeper into the world of Bold Blossoms by exploring our blog. From behind-the-scenes insights to empowering stories, our blog is your go-to source for everything that blooms within the vibrant realm of our inaugural pageant.`}
            />

            <div className="grid_container">
                <div className="blog_preview_grid">
                    <BlogPreviewCard />
                    <BlogPreviewCard />
                    <BlogPreviewCard />
                    <BlogPreviewCard />
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogPreviewSection