import { GraphQLClient, gql } from 'graphql-request';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Blog() {

    const { slug } = useParams();

    const [ blog, setBlog ] = useState([]);
    const ENDPOINT = import.meta.env.VITE_HYGRAPH_CONTENT_API_ENDPOINT;

    const fetchBlog = async () => {
        const graphqlClient = new GraphQLClient(ENDPOINT);
        try {
            const fetchBlog = gql`
            query fetchBlog($slug: String!) {
                blog( where: { slug: $slug }) {
                    coverPhoto {
                        url
                    }
                    title
                    author {
                        authorName
                    }
                    categories {
                        categoryName
                    }
                    content {
                        html
                    }
                }
            }
        `;

        const variables = {
            slug
        }

        const response = await graphqlClient.request(fetchBlog, variables);
        const res = await response;

        if (res.blog) {
            setBlog(res.blog)
        }
        } catch (error) {
            
        }
        

    }
    let runner = 0;

    useEffect(() => {
        if ( runner === 0) {
            fetchBlog();
            runner++;
        }
    }, []);

  return (
    <>
    <section id="blog_content">
        <div className="container">
            <div className="blog">
                <div className="blog_cover_photo">
                    <img src="" alt="Blog cover image" />
                </div>
                <div className="blog">

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Blog