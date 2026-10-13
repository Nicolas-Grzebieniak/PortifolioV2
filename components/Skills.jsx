import Section, { Heading } from './Section.jsx'
import { site } from '../data/site.js'
import { skills } from '../data/skills.js'

export default function Skills() {
  return (
    <Section id="skills">
      <Heading id="skills" title={site.skills.title} />
      <p className="intro">{site.skills.intro}</p>
      <div className="chart">
        {skills.map((g) => (
          <div className="grp" key={g.group}>
            <h3>{g.group}</h3>
            <ul className="bars">
              {g.items.map((s) => (
                <li key={s.name} style={{ '--v': s.level * 10 }}>
                  <div className="b"><i /></div>
                  {s.name}
                  <span className="sr">, level {s.level} of 10</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
