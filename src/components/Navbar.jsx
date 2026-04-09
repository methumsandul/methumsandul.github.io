import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certs', label: 'Certs' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40)

      let nextActive = ''
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].href.replace('#', ''))
        if (el && window.scrollY >= el.offsetTop - 130) {
          nextActive = links[i].href.replace('#', '')
          break
        }
      }

      setActive(nextActive)
    }

    fn()
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: scrolled ? '0.95rem 8%' : '1.35rem 8%',
          background: scrolled ? 'rgba(8, 8, 8, 0.9)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--grey-3)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease',
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mono text-xs uppercase tracking-widest"
          style={{ color: 'var(--white)', letterSpacing: '0.2em' }}
        >
          MS
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const id = href.replace('#', '')
            return (
              <li key={href}>
                <button
                  onClick={() => go(href)}
                  className="mono text-xs uppercase tracking-widest transition-colors duration-200"
                  style={{ color: active === id ? 'var(--white)' : 'var(--grey-1)', fontSize: '0.74rem' }}
                >
                  {label}
                </button>
              </li>
            )
          })}
        </ul>

        <div
          className="hidden md:flex items-center gap-2 rounded-full border px-4 py-2 mono text-xs"
          style={{
            color: 'var(--grey-1)',
            borderColor: 'rgba(255, 255, 255, 0.08)',
            background: 'rgba(255, 255, 255, 0.03)',
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--white)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          Open to work
        </div>

        <button className="md:hidden flex flex-col gap-[5px]" onClick={() => setOpen(!open)} aria-label="Open navigation">
          <span style={{ display: 'block', width: 20, height: 1, background: 'var(--grey-1)', transition: 'all 0.3s', transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: 20, height: 1, background: 'var(--grey-1)', transition: 'all 0.3s', opacity: open ? 0 : 1 }} />
          <span style={{ display: 'block', width: 20, height: 1, background: 'var(--grey-1)', transition: 'all 0.3s', transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              background: 'rgba(8, 8, 8, 0.98)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
            }}
          >
            {links.map(({ href, label }, i) => (
              <motion.button
                key={href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => go(href)}
                style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--grey-1)', letterSpacing: '-0.02em', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { e.target.style.color = 'var(--white)' }}
                onMouseLeave={(e) => { e.target.style.color = 'var(--grey-1)' }}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
