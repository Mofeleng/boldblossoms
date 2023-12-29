import React from 'react'
import SolidBGHeroTemplate from '../Components/UserInterface/SolidBGHeroTemplate'
import BlogListSection from '../Components/Blogs/BlogListSection'

function BlogsPage() {
  return (
    <>
        <SolidBGHeroTemplate
            label={"Blogs"}
            heading={"Keep up with the bold blossoms with our blog."}
            paragraph={`Find out what we've been up to and learn more about our brand. All recent updates can be found here.`}
        />
        <BlogListSection />
    </>
  )
}

export default BlogsPage