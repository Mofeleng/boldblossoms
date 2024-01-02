import { GraphQLClient, gql } from 'graphql-request';
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Contestant() {

    const { id } = useParams();

    const [ contestant, setContestant ] = useState([]);
    const ENDPOINT = import.meta.env.VITE_HYGRAPH_CONTENT_API_ENDPOINT;

    const fetchContestant = async () => {
        try {
            const graphQLClient = new GraphQLClient(ENDPOINT);
            
            const query = gql`
                query FetchContestant($id: ID!) {
                    contestant(where: {id: $id}) {
                        id
                        fullName
                        contestantNumber
                        bio
                        rank
                        profilePicture {
                        url
                        }
                        pageant {
                        pageantName
                        slug
                        }
                    }
                }
            `;

            const variables = {
                id
            }

            const response = await graphQLClient.request(query, variables);
            const results = await response;
            console.log("A: ", results.contestant, "B: ", results)
            setContestant(results.contestant);
            
        } catch (error) {
            console.log("Error here!: ", error)
        }
    }

    useEffect(() => {fetchContestant()}, [])

    if (!contestant || contestant.length == 0) {
        return "Something went wrong"
    }
  return (
    <>
    <section id="contestant_top">
        <div className="container">
            <div className="contestant_info">
                <div className="contestant_top">
                    { console.log(contestant)}
                    <div className="img_contestant">
                        <img src={contestant.profilePicture.url} alt="" />
                    </div>
                    <div className="contestant_titles">
                        <h3 className="heading_smaller">{ contestant.fullName }</h3>
                        <p className='paragraph'>
                            { contestant.bio }
                        </p>
                        <div className="more">
                            <p className="paragraph">
                                Rank: { contestant.rank}
                            </p>
                            <p className='paragraph'>
                                Pageant: <a href={`/pageant/${contestant.pageant.slug}`} className='text_primary'>{ contestant.pageant.pageantName }</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="contestant_body">
                    <h4 className="heading_small">How to vote</h4>
                    
                    <h5 className="heading_smaller">1. Vote here</h5>
                    <div className="voting_container">

                    </div>
                    <h5 className="heading_smaller">2. SMS</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem mollitia voluptatibus illo laborum iste itaque vitae nam atque eaque? Vitae optio facere ipsum aperiam quasi, assumenda laborum distinctio. Alias, culpa.</p>

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contestant