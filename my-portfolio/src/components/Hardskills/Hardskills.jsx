import React from 'react'

import skills from "../../data/skills.json"
import { getImageUrl } from '../../utils'

const Hardskills = () => {
  return (
    <section id="hardkills">
        <h2>Hard Skills</h2>
        <div>
            <div>
                {skills.map((skill, id) => {
                    return <div key={id}>
                        <div>
                            <img src={getImageUrl} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                })}
            </div>
            <ul></ul>
        </div>
    </section>
  )
}

export default Hardskills