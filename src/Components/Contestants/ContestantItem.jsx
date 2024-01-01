import React from 'react'
import './contestant.css'

function ContestantItem( { profilePicture, fullName, bio, rank, pageant, contestantId }) {

    const copyToClickBoard = (e) => {
        e.preventDefault();
        const pageantLink = `http://localhost:5173/contestant/${contestantId}`

        navigator.clipboard.writeText(pageantLink)
        .then(() => alert("Copied link to clipboard"))
        .catch((err) => alert("Something went wrong: ", err))
    }
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
                    <a href="/contestant" className='btn btn_primary'>Vote</a>
                    <button onClick={copyToClickBoard} className='btn btn_accent btn_border_black'>Share link</button>
                </div>
            </div>
        </div>
    </a>
  )
}

export default ContestantItem