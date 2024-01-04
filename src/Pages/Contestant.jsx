import { GraphQLClient, gql } from 'graphql-request';
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import useCalculateTotalCost from '../Hooks/useCalculateTotalCost';
import axios from 'axios';

function Contestant() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [ contestant, setContestant ] = useState([]);
    const [ votes, setVotes ] = useState(1);
    const [ totalCost, setTotalCost ] = useState(2);
    const [ buttonState, setButtonState ] = useState("Vote");

    const ENDPOINT = import.meta.env.VITE_HYGRAPH_CONTENT_API_ENDPOINT;
    const YOCO_URL = import.meta.env.VITE_YOCO_CHECKOUT_URL;

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
            setContestant(results.contestant);
            
        } catch (error) {
            console.log("Error here!: ", error)
        }
    }
    let counter = 0;
    useEffect(() => {
        if (counter == 0) {
            fetchContestant();
            counter = counter + 1;

        } else {
            console.log("Function already ran")
        }
        
    }, [])
    
    const sendVotePaymentRequest = async () => {
        setButtonState("Please wait...")
        try {
            const sendPostRequest = await axios.post(YOCO_URL,
                {
                    cost: totalCost * 100,
                    votes: votes,
                    contestantId: contestant.id
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );
    
            console.log("Server response: ", sendPostRequest.data);
    
            const redirectUrl = sendPostRequest.data.redirectUrl;
    
            if (redirectUrl) {
                window.location.href = redirectUrl;
            }
        } catch (error) {
            console.log("Something went wrong: ", error);
        }
        
    }
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
                    <div className="voting_container apply_form">
                        <p className="paragraph">
                            1 vote costs R2<br/>
                            R1 per 100 votes <br/>
                        </p>
                        <span className='paragraph'>Costs: R{ totalCost }</span>
                        <input type="number" className="votes_num" placeholder='Number of votes' 
                            value={votes}
                            onChange={(e) => {
                                setVotes(e.target.value)
                                setTotalCost(useCalculateTotalCost(e.target.value))
                            }}
                        />
                        <button className='btn btn_primary' onClick={sendVotePaymentRequest}>{buttonState}</button>
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

export default Contestant;