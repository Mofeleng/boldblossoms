import React, { useEffect, useState } from 'react'
import ContestantItem from './ContestantItem'
import './contestant.css';
import { GraphQLClient, gql } from 'graphql-request';
import PageLoader from '../PageLoader';
function ContestantsListSection() {

  const ENDPOINT = import.meta.env.VITE_HYGRAPH_CONTENT_API_ENDPOINT;
  const [ contestants, setContestants ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(1);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    const fetchContestants = async () => {
        try {
          const graphQLClient = new GraphQLClient(ENDPOINT);

          const query = gql`
           query FetchContestants {
            contestants {
              id
              pageant {
                pageantName
              }
              profilePicture {
                url
              }
              bio
              rank
              fullName
              contestantNumber
            }
           }
          `

          const response = await graphQLClient.request(query);
          const result = await response;
          setContestants(result.contestants);
          setIsLoading(0);
          setError(null);

        } catch (error) {
          setIsLoading(0);
          setError("Something went wrong while fetching the contestants.")
        }
    }
    fetchContestants();
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
    <section id="contestant_list">
        <div className="container">
            <div className="contestants">
                { console.log(contestants)}
                { contestants.map((contestant) => (
                  <ContestantItem
                    key={contestant.contestantNumber}
                    profilePicture={contestant.profilePicture}
                    fullName={contestant.fullName}
                    bio={contestant.bio}
                    rank={contestant.rank}  
                    contestantId={contestant.id}
                    pageant={contestant.pageant}                
                  />
                ))}
            </div>
        </div>
    </section>
  )
}

export default ContestantsListSection