import React from 'react'
import SolidBGHeroTemplate from '../Components/UserInterface/SolidBGHeroTemplate'
import ContestantsListSection from '../Components/Contestants/ContestantsListSection'

function Contestants() {
  return (
    <>
    <SolidBGHeroTemplate
        label={"Contestants"}
        heading={"Keep up with your favourite contestant"}
        paragraph={`See all the contestants and their ranks for all our current pageants. Don't forget to vote for your favourite to help them win.`}
    />

    <ContestantsListSection />
    </>
  )
}

export default Contestants