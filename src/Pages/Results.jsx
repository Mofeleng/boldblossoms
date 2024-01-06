import React, { useEffect, useState } from 'react'
import SolidBGHeroTemplate from '../Components/UserInterface/SolidBGHeroTemplate'
import { GraphQLClient, gql } from 'graphql-request';

function Results() {

    const [ winners, setWinners ] = useState([]);
    const ENDPOINT = import.meta.env.VITE_HYGRAPH_CONTENT_API_ENDPOINT;

    const fetchWinners = async () => {
        try {
            const graphqlClient = new GraphQLClient(ENDPOINT);

            const fetchWinners = gql`
                query Winners {
                    winners {
                        coverPhoto {
                        url
                        }
                        fullName
                        description
                        id
                        pageant {
                        pageantName
                        }
                        year
                    }
                }
            `;

            const response = await graphqlClient.request(fetchWinners);
            const res = await response;
            
            if (res.winners) {
                setWinners(res.winners);
                console.log(res)
            }

        } catch (error) {
            console.log("Error: ", error);
        }
    }

    let ran = 0;
    useEffect(() => {
        if (ran === 0) {
            fetchWinners();
            ran = ran + 1;
        }
    }, []);


    if (!winners) {
        return "Something went wrong while fetching the winners" + winners;
    }
  return (
    <>
        <SolidBGHeroTemplate
            label={"Results"}
            heading={"Here are the winners of our previous pageants"}
            paragraph={`Check them out: `}
        />

        <section id="results">
            <div className="container">
                <div className="results">
                    { winners.map((winner) => (
                        <div className="contestant">
                            <div className="image_rounded">
                                <img src={winner.coverPhoto.url} alt="Cover photo" />
                            </div>
                            <div className="contestant_info">
                                <h3 className="heading_smaller">{winner.fullName}</h3>
                                <p className="paragraph">
                                    {winner.description}
                                </p>
                                <b>Pageant: {winner.pageant.pageantName}</b>
                            </div>
                        </div>
                    ))}
                
                </div>
            </div>
        </section>
    </>
  )
}

export default Results