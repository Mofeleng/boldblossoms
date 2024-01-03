import React from 'react'
import useConvertDateToString from '../../Hooks/useConvertDateToString';

function BlogListItemTemplate({ slug, title, preview, categories, author, coverPhoto, publishedAt}) {

  return (
    <Link to={`/blog/${slug}`}>
        <div className="blog_item">
                <div className="image_blog_wrapper">
                    <img src={coverPhoto.url} width={250} height={250}/>
                </div>
                <div className="blog_info">
                    <span className="label">
                      {categories.map((category) => {
                        return category.categoryName + " ";
                      })}
                    </span>
                    <h3 className="heading_smaller">{title}</h3>
                    <p className="paragraph">
                      { preview }
                    </p>
                    <span className="label text_black">{author.authorName} - {publishedAt}</span>
                </div>
        </div>
    </Link>
  )
}

export default BlogListItemTemplate