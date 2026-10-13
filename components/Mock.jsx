import { mocks } from './mocks/index.js'

// Tela ilustrativa ao lado do texto de um projeto (HTML estático em components/mocks).
export default function Mock({ name }) {
  const mock = mocks[name]
  if (!mock) return null
  return <div className={mock.className} aria-hidden="true" dangerouslySetInnerHTML={{ __html: mock.html }} />
}
