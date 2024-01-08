import { GraphQLClient, gql } from 'graphql-request';
import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import ImageBackgroundHero from '../Components/Pageantry/ImageBackgroundHero';
import PageantInformationSection from '../Components/Pageantry/PageantInformationSection';
import PageLoader from '../Components/PageLoader';
import PageError from '../Components/PageError';

function Pageant() {

    const { slug } = useParams();
    const ENDPOINT = import.meta.env.VITE_HYGRAPH_CONTENT_API_ENDPOINT;
    const [ pageant, setPageant ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(1);
    const [ error, setError ] = useState(null);

    const fetchPageant = async () => {
      try {
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
        setIsLoading(0);
        setError(null);
      } catch (error) {
        setError("Something went wrong while fetching this pageant");
        setIsLoading(0);
      }   
    }

    useEffect(() => {
        fetchPageant();
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
  return (
    <>
    <ImageBackgroundHero img={pageant.coverPhoto} />
    <PageantInformationSection blog_content={pageant.information} pageantName={pageant.pageantName} />
    </>
  )
}

export default Pageant