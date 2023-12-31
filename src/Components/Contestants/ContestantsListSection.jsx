import React from 'react'
import ContestantItem from './ContestantItem'
import './contestant.css';
function ContestantsListSection() {
  return (
    <section id="contestant_list">
        <div className="container">
            <div className="contestants">
                <ContestantItem />
                <ContestantItem />
                <ContestantItem />
                <ContestantItem />
            </div>
        </div>
    </section>
  )
}

export default ContestantsListSection