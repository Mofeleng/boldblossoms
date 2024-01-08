import { GraphQLClient, gql } from 'graphql-request';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import PageLoader from '../Components/PageLoader';

function Blog() {

    const { slug } = useParams();

    const [ blog, setBlog ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(1);
    const [ error, setError ] = useState(null);

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
            setIsLoading(0);
            setError(null)
        }
        } catch (error) {
            setError("Something went wrong while fetching this blog :(");
            setIsLoading(0);
        }
        

    }
    let runner = 0;

    useEffect(() => {
        if ( runner === 0) {
            fetchBlog();
            runner++;
        }
    }, []);

    if (isLoading) {
        return (
            <PageLoader />
        )
    }
    if (error) {
        return (
            <PageError error={error} />
        )
    }
    if (!blog || blog.length < 1) {
        return `Could not return Blog: ${blog}`
    } 

  return (
    <>
    <section id="blog_content">
        <div className="container">
            <div className="blog_grid">
                <div className="blog">
                    <div className="intro_info">
                        <span className="label">{blog.categories.map((category) => (
                            category.categoryName + " "
                        ))}</span>
                        <h3 className="heading_small">{blog.title}</h3>
                        <span>By { blog.author.authorName } </span>
                    </div>

                    <div className="blog_cover_photo">
                        <img src={blog.coverPhoto.url} alt="Blog cover image" />
                    </div>
                    <div className="blog_text" dangerouslySetInnerHTML={{ __html: blog.content.html }}>

                    </div>
                </div>
                <div className="ads">

                </div>
            </div>
            
        </div>
    </section>
    </>
  )
}

export default Blog