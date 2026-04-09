import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const words = ['Ethical Hacking', 'Network Security', 'Linux Administration', 'DevOps']
const portraitSrc = '/profile-photo.jpg'

function Typewriter() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const word = words[idx]
    let t

    if (!del && text.length < word.length) {
      t = setTimeout(() => setText(word.slice(0, text.length + 1)), 75)
    } else if (!del && text.length === word.length) {
      t = setTimeout(() => setDel(true), 2000)
    } else if (del && text.length > 0) {
      t = setTimeout(() => setText(text.slice(0, -1)), 40)
    } else {
      setDel(false)
      setIdx((i) => (i + 1) % words.length)
    }

    return () => clearTimeout(t)
  }, [text, del, idx])

  return (
    <span style={{ color: 'var(--white)' }}>
      {text}
      <span style={{ opacity: 1, animation: 'pulse 1s step-end infinite', color: 'var(--grey-1)' }}>_</span>
    </span>
  )
}

export default function Hero() {
  const [photoState, setPhotoState] = useState('loading')

  useEffect(() => {
    const portrait = new window.Image()

    portrait.src = portraitSrc
    portrait.onload = () => setPhotoState('loaded')
    portrait.onerror = () => setPhotoState('missing')
  }, [])

  const hasPortrait = photoState === 'loaded'

  return (
    <section
      id="hero"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '9rem 8% 5rem', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 82% 18%, rgba(255, 255, 255, 0.08), transparent 26%)', pointerEvents: 'none' }} />

      <div
        style={{
          position: 'absolute',
          top: '52%',
          left: '5%',
          transform: 'translateY(-50%)',
          fontSize: 'clamp(7rem, 18vw, 16rem)',
          fontWeight: 700,
          letterSpacing: '-0.05em',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(243, 242, 238, 0.08)',
          lineHeight: 0.9,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        MS
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.7rem', marginBottom: '2rem', padding: '0.85rem 1.1rem', borderRadius: '999px', border: '1px solid rgba(255, 255, 255, 0.08)', background: 'rgba(255, 255, 255, 0.03)' }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--white)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--grey-1)' }}>
              Available for internships - Kalutara, Sri Lanka
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 'clamp(3.8rem, 9vw, 7.8rem)', fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 0.92, color: 'var(--white)', marginBottom: '1.75rem' }}
          >
            Methum
            <br />
            <span style={{ color: 'rgba(243, 242, 238, 0.16)', WebkitTextStroke: '1px rgba(243, 242, 238, 0.22)' }}>
              Sandul
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="section-subtitle"
            style={{ maxWidth: 620, marginBottom: '2rem' }}
          >
            I build secure networked environments, harden Linux systems, and learn fast through practical labs that mirror real operational work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mono"
            style={{ fontSize: 'clamp(0.92rem, 2vw, 1.08rem)', color: 'var(--grey-1)', marginBottom: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <span style={{ color: 'var(--grey-2)' }}>~/</span>
            <Typewriter />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}
          >
            <a href="#contact" className="btn-primary">Get in touch</a>
            <a href="/cv.pdf" download className="btn-ghost">Download CV</a>
            <a href="#projects" className="btn-ghost">View projects</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          style={{ width: '100%', maxWidth: 460, marginLeft: 'auto' }}
        >
          <div className="card" style={{ padding: '1rem', boxShadow: '0 35px 70px rgba(0, 0, 0, 0.35)' }}>
            <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: '16px', overflow: 'hidden', background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02) 45%, rgba(255, 255, 255, 0.03))' }}>
              {hasPortrait ? (
                <img
                  src={portraitSrc}
                  alt="Portrait of Methum Sandul"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div
                  style={{
                    height: '100%',
                    display: 'grid',
                    placeItems: 'center',
                    padding: '2rem',
                    textAlign: 'center',
                    background: 'radial-gradient(circle at top, rgba(255, 255, 255, 0.09), transparent 45%), linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
                  }}
                >
                  <div style={{ display: 'grid', gap: '1rem', justifyItems: 'center' }}>
                    <div className="mono" style={{ width: 82, height: 82, borderRadius: 24, border: '1px solid rgba(255, 255, 255, 0.16)', display: 'grid', placeItems: 'center', fontSize: '1.6rem', letterSpacing: '0.12em', color: 'var(--white)' }}>
                      MS
                    </div>
                    <p className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-1)' }}>
                      Portrait area ready
                    </p>
                    <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--grey-1)', maxWidth: 300 }}>
                      Add your portrait photo to personalize this space without changing the layout.
                    </p>
                  </div>
                </div>
              )}

              <div
                style={{
                  position: 'absolute',
                  left: '1rem',
                  right: '1rem',
                  bottom: '1rem',
                  padding: '0.95rem 1rem',
                  borderRadius: '14px',
                  background: 'rgba(8, 8, 8, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(14px)',
                }}
              >
                <div className="mono" style={{ fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-1)', marginBottom: '0.35rem' }}>
                  Internship focus
                </div>
                <div style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--white)' }}>
                  Cybersecurity, networking, and Linux operations
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ position: 'absolute', bottom: '2.5rem', right: '8%', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
      >
        <span className="mono" style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--grey-2)' }}>Scroll</span>
        <motion.div
          animate={{ x: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{ width: 32, height: 1, background: 'var(--grey-2)' }}
        />
      </motion.div>
    </section>
  )
}
