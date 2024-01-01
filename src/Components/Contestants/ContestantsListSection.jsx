import React, { useEffect, useState } from 'react'
import ContestantItem from './ContestantItem'
import './contestant.css';
import { GraphQLClient, gql } from 'graphql-request';
function ContestantsListSection() {

  const ENDPOINT = import.meta.env.VITE_HYGRAPH_CONTENT_API_ENDPOINT;
  const [ contestants, setContestants ] = useState([]);

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


        } catch (error) {
          return "Something went wrong while fetching contestants"
        }
    }
    fetchContestants();
  }, [])
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