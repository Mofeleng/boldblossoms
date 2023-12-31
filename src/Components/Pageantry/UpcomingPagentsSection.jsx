import React, { useState, useEffect } from 'react'
import PageantPreviewCard from './PageantPreviewCard'
import SectionHeadingTemplate from '../UserInterface/SectionHeadingTemplate'
import { gql, GraphQLClient } from 'graphql-request'

function UpcomingPagentsSection() {
    const ENDPOINT = import.meta.env.VITE_HYGRAPH_CONTENT_API_ENDPOINT;
    const [ pageants, setPageants ] = useState([]);
    

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
    console.log(response)

       } catch (error) {
        console.log("Something went wrong: ", error);
       }
    }

    useEffect(() => {
       fetchPageants();
    }, [])
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