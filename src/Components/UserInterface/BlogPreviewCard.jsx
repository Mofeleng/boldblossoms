import React from 'react'
import useConvertDateToString from '../../Hooks/useConvertDateToString';
import { Link } from 'react-router-dom';

function BlogPreviewCard({ categories, title, slug, preview, author, published }) {
  let i = categories.length;

  return (
    <Link to={`/blog/${slug}`}>
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
          <span className="label text_black">{ author } - {useConvertDateToString(published)}</span>
      </div>
    </Link>
  )
}

export default BlogPreviewCard;