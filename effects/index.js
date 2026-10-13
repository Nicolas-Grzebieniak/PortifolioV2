import reveal from './reveal.js'
import ruler from './ruler.js'
import glow from './glow.js'
import warp from './warp.js'
import socialbit from './socialbit.js'
import focora from './focora.js'

// Liga todos os efeitos. Cada um é independente: para desligar um, remova da lista.
export default function startEffects() {
  const stops = [reveal, ruler, glow, warp, socialbit, focora].map((fx) => fx())
  return () => stops.forEach((stop) => typeof stop === 'function' && stop())
}
