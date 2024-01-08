import React, { useState, useEffect } from 'react'
import PageantPreviewCard from './PageantPreviewCard'
import SectionHeadingTemplate from '../UserInterface/SectionHeadingTemplate'
import { gql, GraphQLClient } from 'graphql-request'
import PageLoader from '../PageLoader';

function UpcomingPagentsSection() {
    const ENDPOINT = import.meta.env.VITE_HYGRAPH_CONTENT_API_ENDPOINT;
    const [ pageants, setPageants ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(1);
    const [ error, setError ] = useState(null);

    const fetchPageants = async () => {
       try {
        const graphQLClient = new GraphQLClient(ENDPOINT);

    const query = gql`
    query FetchPageants {
        pageants(where: {isRunning: true}) {
            id
            pageantName
            preview
            slug
            coverPhoto {
                url
            }
        }
    }
`;

    const results = await graphQLClient.request(query);
    const response = await results;
    setPageants(response.pageants);
    setIsLoading(0);
    setError(null);

    } catch (error) {
        setError("Something went wrong while fetching pageants");
        setIsLoading(0)
    }
    }

    useEffect(() => {
       fetchPageants();
    }, []);

    if (isLoading) {
        return (
            <PageLoader />
        )
    }
    if (error) {
        return error;
    }
  return (
    <section id="upcoming_pageants">
        <div className="container">
            <SectionHeadingTemplate
                 heading={"Open pageants: "}
            />
            <div className="pageants">
                {pageants.map(pageant => (
                    <PageantPreviewCard key={pageant.id}
                        title={pageant.pageantName}
                        preview={pageant.preview}
                        slug={pageant.slug}
                        coverPhoto={pageant.coverPhoto}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default UpcomingPagentsSection