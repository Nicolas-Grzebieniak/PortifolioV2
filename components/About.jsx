import Section, { Heading } from './Section.jsx'
import { site } from '../data/site.js'
import { education } from '../data/education.js'

export default function About() {
  return (
    <Section id="about" wrapClassName="two">
      <div className="prose">
        <Heading id="about" title={site.about.title} />
        {site.about.paragraphs.map((text) => <p key={text}>{text}</p>)}
      </div>
      <div>
        <ol className="tl" aria-label="Education">
          {education.map((e) => (
            <li key={e.period} className={e.current ? 'now' : undefined} style={e.accent === 'red' ? { '--c': 'var(--red)' } : undefined}>
              <time>{e.period}</time>
              {e.title}
              <small>{e.place}</small>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
