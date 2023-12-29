import React, { useEffect, useState } from 'react'
import SectionHeadingTemplate from '../UserInterface/SectionHeadingTemplate'
import BlogPreviewCard from '../UserInterface/BlogPreviewCard'
import { gql, GraphQLClient } from 'graphql-request';
function BlogPreviewSection() {

    const [blogs, setBlogs] = useState([]);

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
        
          } catch (error) {
            console.log("Something went wrong", error);
          }
    }
    
    useEffect(() => {
        fetchBlogs();
    }, []);

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
                            <BlogPreviewCard />
                        );
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogPreviewSection