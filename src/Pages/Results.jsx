import React from 'react'
import SolidBGHeroTemplate from '../Components/UserInterface/SolidBGHeroTemplate'

function Results() {
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
                <div className="contestant">
                    <div className="image_rounded">
                        <img src='' alt="" />
                    </div>
                    <div className="contestant_info">
                        <h3 className="heading_smaller">Nia long</h3>
                        <p className="paragraph">
                            Cool calm collected
                        </p>
                        <b>Pageant: Mrs Bold Blossoms</b>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Results