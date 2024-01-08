import React, { useEffect, useState } from 'react'
import SectionHeadingTemplate from '../UserInterface/SectionHeadingTemplate'
import BlogPreviewCard from '../UserInterface/BlogPreviewCard'
import { gql, GraphQLClient } from 'graphql-request';
import PageLoader from '../PageLoader';
function BlogPreviewSection() {

    const [blogs, setBlogs] = useState([]);
    const [ isLoading, setIsLoading ] = useState(1);
    const [ error, setError ] = useState(null);

    const fetchBlogs = async () => {
        try {
            const ENDPOINT = import.meta.env.VITE_HYGRAPH_CONTENT_API_ENDPOINT;
        
            const graphQLClient = new GraphQLClient(ENDPOINT);
        
            const query = gql`
              query Blogs {
                blogs(first: 4) {
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
                }
              }
            `;
        
            const response = await graphQLClient.request(query);
            const results = await response.blogs;
            setBlogs(results);
            setIsLoading(0);
            setError(null);
        
          } catch (error) {
            setError("Something went wrong while loading the blogs");
            setIsLoading(0);
          }
    }
    
    useEffect(() => {
        fetchBlogs();
    }, []);

    if (isLoading) {
      return (
        <PageLoader />
      )
    }
    if (error) {
      return error;
    }
    if (!blogs) {
        return "Failed to load";
    }
    
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
                    {blogs.map(blog => {
                        return (
                            <BlogPreviewCard key={blog.id}
                                categories={blog.categories}
                                title={blog.title}
                                slug={blog.slug}
                                preview={blog.preview}
                                author={blog.author.authorName}
                                published={blog.publishedAt}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogPreviewSection