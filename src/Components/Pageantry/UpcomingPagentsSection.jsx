import React from 'react'
import PageantPreviewCard from './PageantPreviewCard'
import './Pageants.css'
import SectionHeadingTemplate from '../UserInterface/SectionHeadingTemplate'

function UpcomingPagentsSection() {
  return (
    <section id="upcoming_pageants">
        <div className="container">
            <SectionHeadingTemplate
                 heading={"Open pageants: "}
            />
            <div className="pageants">
                <PageantPreviewCard />
            </div>
        </div>
    </section>
  )
}

export default UpcomingPagentsSection