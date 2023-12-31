import React, { useEffect, useState } from 'react'
import SolidBGHeroTemplate from '../Components/UserInterface/SolidBGHeroTemplate'
import { GraphQLClient, gql } from 'graphql-request';
import PageLoader from '../Components/PageLoader';
import PageError from '../Components/PageError';

function Results() {

    const [ winners, setWinners ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(1);
    const [ error, setError ] = useState(null);

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
                setIsLoading(0);
                setError(null);
            }

        } catch (error) {
            setError("Something went wrong while fetching the results");
            setIsLoading(0);
        }
    }

    let ran = 0;
    useEffect(() => {
        if (ran === 0) {
            fetchWinners();
            ran = ran + 1;
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
                                <b>Pageant: {winner.pageant.pageantName}</b><br/>
                                <b>Year: { winner.year }</b>
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