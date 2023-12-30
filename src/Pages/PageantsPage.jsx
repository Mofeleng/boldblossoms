import React from 'react'
import SolidBGHeroTemplate from '../Components/UserInterface/SolidBGHeroTemplate'
import UpcomingPagentsSection from '../Components/Pageantry/UpcomingPagentsSection'

function PageantsPage() {
  return (
    <>
        <SolidBGHeroTemplate
            label={"Pageants"}
            heading={"All our pageants in one place"}
            paragraph={"bold blossoms presents: "}
        />

        <UpcomingPagentsSection />
    </>
  )
}

export default PageantsPage