import Section, { Heading } from "./Section.jsx";
import Mock from "./Mock.jsx";
import { site } from "../data/site.js";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <Section id="work">
      <Heading id="work" title={site.work.title} />
      <p className="intro">{site.work.intro}</p>
      {projects.map((p, i) => (
        <article className={`proj${i % 2 ? " flip" : ""}`} key={p.id}>
          <div className="info">
            <h3>{p.title}</h3>
            {p.description.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <ul className="chips" aria-label="Technologies">
              {p.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <p className="actions">
              <a
                className="btn"
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </p>
          </div>
          <Mock name={p.mock} />
        </article>
      ))}
    </Section>
  );
}
