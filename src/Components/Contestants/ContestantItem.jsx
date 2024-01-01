import React from 'react'
import './contestant.css'

function ContestantItem( { profilePicture, fullName, bio, rank, pageant, contestantId }) {
    console.log( profilePicture, fullName, bio, rank, pageant, contestantId)
  return (
    <a href={`/contestant/${contestantId}`}>
        <div className="contestant">
            <div className="image_rounded">
                <img src={profilePicture.url} alt="" />
            </div>
            <div className="contestant_info">
                <h3 className="heading_smaller">{ fullName }</h3>
                <p className="paragraph">
                    { bio }
                </p>
                <b>Rank: { rank }</b><br />
                <b>Pageant: { pageant.pageantName }</b>
                <div className="buttons">
                    <a href="/contestant" className='btn btn_primary'>See More</a>
                    <a href="" className='btn btn_accent btn_border_black'>Vote</a>
                </div>
            </div>
        </div>
    </a>
  )
}

export default ContestantItem