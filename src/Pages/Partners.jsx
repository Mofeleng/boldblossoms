import React from 'react'
import SOlidBGHeroTemplate from '../Components/UserInterface/SolidBGHeroTemplate'
import SolidBGHeroTemplate from '../Components/UserInterface/SolidBGHeroTemplate'
import PartnersGridSection from '../Components/Partners/PartnersGridSection'

function Partners() {
  return (
    <>
        <SolidBGHeroTemplate
            label={"Our partners"}
            heading={"All the people making this all possible"}
            paragraph={`Our partners and sponsors are the reason we are able to empower the bold blossoms everywhere. `}
        />
        <PartnersGridSection />
    </>
  )
}

export default Partners