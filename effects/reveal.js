// Revela os blocos com fade ao rolar e prepara o crescimento das barras de skills.
export default function reveal() {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return
  document.documentElement.classList.add('js')
  document.querySelectorAll('.bars').forEach((ul) => ul.querySelectorAll('li').forEach((li, i) => li.style.setProperty('--i', i)))
  const io = new IntersectionObserver((entries) => entries.forEach((x) => {
    if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target) }
  }), { threshold: 0.15, rootMargin: '0px 0px -6% 0px' })
  document.querySelectorAll('.s h2,.intro,.info,.shot,.prose,.tl,.grp,.certs li,.contact .actions,.contact form').forEach((el) => {
    if (el.parentElement.closest('.rv')) return
    if (el.matches('.grp,.certs li')) el.style.setProperty('--d', `${[].indexOf.call(el.parentNode.children, el) * 0.08}s`)
    el.classList.add('rv')
    io.observe(el)
  })
  return () => io.disconnect()
}
