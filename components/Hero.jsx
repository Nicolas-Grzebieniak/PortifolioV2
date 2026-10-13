import { site } from '../data/site.js'
import photo from '../assets/photo.jpg'

export default function Hero() {
  const h = site.hero
  return (
    <>
      <div className="wrap hero">
        <div>
          <h1>{h.heading.pre}<em>{h.heading.em}</em></h1>
          <p className="lede">{h.lede}</p>
        </div>
        <figure className="me reg">
          <img src={photo} alt={h.photoAlt} width="480" height="480" />
          <dl>
            {h.facts.map(([label, value]) => (
              <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
            ))}
          </dl>
        </figure>
      </div>
      <p className="dim" aria-hidden="true"><span>{h.dim}</span></p>
    </>
  )
}
