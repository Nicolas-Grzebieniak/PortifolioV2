// Moldura padrão de uma seção (id, espaçamento e container).
export default function Section({ id, className = '', wrapClassName = '', children }) {
  return (
    <section className={`s ${className}`.trim()} id={id} aria-labelledby={`h-${id}`}>
      <div className={`wrap ${wrapClassName}`.trim()}>{children}</div>
    </section>
  )
}

// Título com uma palavra opcional em serifada itálico: { pre, em, post }
export function Heading({ id, title }) {
  return (
    <h2 id={`h-${id}`}>
      {title.pre}
      {title.em && <em>{title.em}</em>}
      {title.post}
    </h2>
  )
}
