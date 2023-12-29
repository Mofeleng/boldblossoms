import React from 'react'

function BlogPreviewCard({ categories, title, slug, preview, author, published }) {
  let i = categories.length;

  return (
    <a href={`/blog/${slug}`}>
      <div className="blog_preview_card text_start">
          <span className='label'>
            {categories.map(category => {
              return category.categoryName + " ";
            })}
          </span>
          <h3 className="heading_smaller">{ title }</h3>
          <p className="paragraph">
            { preview }
          </p>
          <span className="label text_black">{ author } - {published}</span>
      </div>
    </a>
  )
}

export default BlogPreviewCard;