import React, { useState, useEffect } from 'react';
import BlogListItemTemplate from './BlogListItemTemplate';
import { gql, GraphQLClient } from 'graphql-request';
import useConvertDateToString from '../../Hooks/useConvertDateToString';


function BlogListSection() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  const fetchBlogs = async () => {
    try {
      const ENDPOINT = import.meta.env.VITE_HYGRAPH_CONTENT_API_ENDPOINT;

      const graphQLClient = new GraphQLClient(ENDPOINT);

      const query = gql`
        query Blogs($first: Int, $last: Int) {
          blogs(first: $first, last: $last) {
            author {
              authorName
            }
            categories {
              categoryName
            }
            id
            preview
            publishedAt
            title
            slug
            coverPhoto {
              url
            }
          }
        }
    `;

const first = currentPage * blogsPerPage;
const variables = { first };

      const response = await graphQLClient.request(query, variables);
      const results = await response.blogs;
      console.log(results);
      setBlogs(results);
    } catch (error) {
      console.log('Something went wrong', error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [currentPage]); // Re-fetch blogs when the currentPage changes

  if (!blogs) {
    return 'Failed to load';
  }

  return (
    <section id="blog_list">
      <div className="container">
        <div className="blog_items">
          {blogs.map((blog) => (
            <BlogListItemTemplate key={blog.id}
              title={blog.title}
              slug={blog.slug}
              preview={blog.preview}
              categories={blog.categories}
              author={blog.author}
              publishedAt={useConvertDateToString(blog.publishedAt)}
              coverPhoto={blog.coverPhoto}

            />
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1} className='btn btn_primary'>
            Previous
          </button>
          <button onClick={handleNextPage} className='btn btn_primary'>Next</button>
        </div>
      </div>
    </section>
  );
}

export default BlogListSection;
