import React from 'react'
import BlogListItemTemplate from '../UserInterface/BlogListItemTemplate'

function BlogListSection() {
  return (
    <section id="blog_list">
        <div className="container">
            <div className="blog_items">
                <BlogListItemTemplate />
                <BlogListItemTemplate />
                <BlogListItemTemplate />
                <BlogListItemTemplate />
                <BlogListItemTemplate />
                <BlogListItemTemplate />
            </div>
        </div>
    </section>
  )
}

export default BlogListSection