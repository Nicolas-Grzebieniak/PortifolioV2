import Section, { Heading } from "./Section.jsx";
import { site } from "../data/site.js";
import { certificates } from "../data/certificates.js";

export default function Certificates() {
  return (
    <Section id="certificates">
      <Heading id="certificates" title={site.certificates.title} />
      <p className="intro">{site.certificates.intro}</p>
      <ul className="certs">
        {certificates.map((c) => (
          <li key={c.title}>
            <span>
              {c.title}
              <small>{c.issuer}</small>
            </span>
            <time>{c.date}</time>
            <a href={c.url} target="_blank" rel="noopener noreferrer">
              View certificate
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
