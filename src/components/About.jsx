import Reveal from './Reveal'

const stats = [
  { n: '4+', l: 'Portfolio projects' },
  { n: '9+', l: 'Industry certifications' },
  { n: 'RHCSA', l: 'Red Hat Linux certified' },
  { n: 'Open', l: 'Internship availability' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '7rem 8%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <div className="h-rule">
            <span className="label">01 - About</span>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '5rem', alignItems: 'start' }}>
          <div>
            <Reveal>
              <h2 className="section-title" style={{ marginBottom: '2rem' }}>
                Profile.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="section-copy" style={{ marginBottom: '1.25rem' }}>
                Ethical Hacking and Network Security undergraduate at NIBM with hands-on experience in Linux administration, Cisco networking, and firewall operations.
              </p>
              <p className="section-copy">
                I build lab environments, validate results, and communicate technical work clearly. Actively seeking an internship in cybersecurity, networking, or system administration.
              </p>
            </Reveal>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem' }}>
            {stats.map(({ n, l }, i) => (
              <Reveal key={l} delay={i * 0.07}>
                <article className="card" style={{ height: '100%', padding: '1.6rem 1.4rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--white)', marginBottom: '0.55rem' }}>{n}</div>
                  <div className="mono" style={{ fontSize: '0.74rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-1)', lineHeight: 1.8 }}>{l}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
