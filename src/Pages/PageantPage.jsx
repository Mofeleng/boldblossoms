import { GraphQLClient, gql } from 'graphql-request';
import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import ImageBackgroundHero from '../Components/Pageantry/ImageBackgroundHero';
import PageantInformationSection from '../Components/Pageantry/PageantInformationSection';

function PageantPage() {

    const { slug } = useParams();
    const ENDPOINT = import.meta.env.VITE_HYGRAPH_CONTENT_API_ENDPOINT;
    const [ pageant, setPageant ] = useState([]);

    const fetchPageant = async () => {
        const graphQLClient = new GraphQLClient(ENDPOINT);

        const query = gql`
        query MyQuery($slug: String!) {
  pageant(where: {slug: $slug}) {
    coverPhoto {
      url
    }
    id
    isRunning
    pageantName
    information {
      html
    }
  }
}
        `;

        const variables = {
            slug
        }

        const response = await graphQLClient.request(query, variables);
        const result = await response;
        setPageant(result.pageant);
        console.log(result);
    }

    useEffect(() => {
        fetchPageant();
    }, []);
  return (
    <>
    <ImageBackgroundHero img={pageant.coverPhoto} />
    <PageantInformationSection blog_content={pageant.information} pageantName={pageant.pageantName} />
    </>
  )
}

export default PageantPage