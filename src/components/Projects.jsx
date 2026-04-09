import { useState } from 'react'
import Reveal from './Reveal'

const base = import.meta.env.BASE_URL

const projects = [
  {
    num: '01',
    category: 'Enterprise networking lab',
    title: 'Campus Network Segmentation and VLAN Rollout',
    desc: 'Built a segmented Cisco campus lab with VLAN isolation and controlled inter-department routing.',
    impact: 'Shows I can turn network requirements into a secure, maintainable switching design.',
    highlights: [
      'Mapped access and trunk ports with clear VLAN boundaries.',
      'Configured inter-VLAN routing for only required traffic flows.',
      'Validated isolation and reachability with structured endpoint tests.',
    ],
    tags: ['Cisco IOS', 'VLAN', 'Inter-VLAN routing', 'Switching'],
    gallery: [
      {
        src: `${base}images/projects/project-01-1.jpg`,
        alt: 'Network topology view for the VLAN rollout project', 
      },
      {
        src: `${base}images/projects/project-01-2.jpg`,
        alt: 'Configuration or validation view for the VLAN rollout project', 
      },
    ],
  },
  {
    num: '02',
    category: 'Linux infrastructure lab',
    title: 'Multi-Service Linux Environment for Core Network Services',
    desc: 'Deployed DNS, DHCP, secure FTP, and Apache hosting in one Linux lab environment.',
    impact: 'Demonstrates end-to-end infrastructure setup with reliable validation and security-aware configuration.',
    highlights: [
      'Configured BIND zones, DHCP scopes, and Apache virtual hosts.',
      'Enabled secure FTP workflows with SSL/TLS controls.',
      'Tested service behavior and availability across realistic scenarios.',
    ],
    tags: ['Linux', 'BIND', 'DHCP', 'Apache', 'SSL/TLS'],
  },
  {
    num: '03',
    category: 'Security and operations lab',
    title: 'Firewall, Proxy, and Backup Operations Setup',
    desc: 'Implemented firewall policy, proxy filtering, traffic balancing, and automated backups in a security lab.',
    impact: 'Highlights operational readiness through stronger control, resilience, and recovery planning.',
    highlights: [
      'Built pfSense and Squid rules to enforce traffic policy.',
      'Applied load balancing to reduce single-point bottlenecks.',
      'Automated backups with scheduled rsync and Bash scripts.',
    ],
    tags: ['pfSense', 'Squid Proxy', 'Load balancing', 'rsync', 'Bash'],
  },
  {
    num: '04',
    category: 'AI productivity software',
    title: 'ANT - AI Note Taker for Live Lectures',
    desc: 'Built an AI desktop app that transcribes lectures and generates structured study notes in real time.',
    impact: 'Shows product-focused execution by combining live capture, summarization, and context-aware AI chat.',
    highlights: [
      'Captured and displayed live lecture transcription during sessions.',
      'Converted transcripts into concise, study-ready note blocks.',
      'Integrated Groq chat and slide uploads for better contextual answers.',
    ],
    tags: ['Groq AI', 'Desktop software', 'Live transcription', 'AI notes', 'Lecture Q&A', 'Slide upload'],
    gallery: [
      {
        src: `${base}images/projects/ant-screenshot.png`,
        alt: 'ANT AI Note Taker interface showing live transcript, AI notes, and lecture chat panels',
        fit: 'contain',
        ratio: '16 / 10',
      },
    ],
  },
]

function ProjectShot({ src, alt, fit = 'cover', ratio = '4 / 3', slot }) {
  const [hasError, setHasError] = useState(false)

  return (
    <div style={{ display: 'grid', gap: '0.75rem' }}>
      <div
        style={{
          position: 'relative',
          aspectRatio: ratio,
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid var(--grey-3)',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02))',
        }}
      >
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setHasError(true)}
            style={{ width: '100%', height: '100%', objectFit: fit }}
          />
        ) : (
          <div
            style={{
              height: '100%',
              display: 'grid',
              placeItems: 'center',
              padding: '1.25rem',
              textAlign: 'center',
              background: 'radial-gradient(circle at top, rgba(255, 255, 255, 0.06), transparent 52%), linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01))',
            }}
          >
            <div style={{ display: 'grid', gap: '0.55rem', justifyItems: 'center' }}>
              <div
                className="mono"
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'var(--white)',
                  fontSize: '0.78rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {slot}
              </div>
              <p className="mono" style={{ margin: 0, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--grey-1)' }}>
                Screenshot ready
              </p>
              <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--grey-1)' }}>
                Add this project image and it will appear here.
              </p>
            </div>
          </div>
        )}

        {!hasError ? (
          <div
            style={{
              position: 'absolute',
              right: '0.8rem',
              bottom: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 48,
              padding: '0.55rem 0.7rem',
              borderRadius: '12px',
              background: 'rgba(8, 8, 8, 0.68)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span className="mono" style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--grey-1)' }}>
              {slot}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '7rem 8%' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Reveal>
          <div className="h-rule">
            <span className="label">03 - Projects</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="section-subtitle" style={{ maxWidth: 760, marginBottom: '3rem' }}>
            Selected projects focused on secure execution, reliable delivery, and practical technical impact.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {projects.map(({ num, category, title, desc, impact, highlights, tags, gallery }, i) => (
            <Reveal key={num} delay={i * 0.08}>
              <article className="card" style={{ padding: '2rem', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                <div style={{ display: 'grid', gap: '1.2rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
                    <span className="mono" style={{ fontSize: '0.74rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-1)' }}>
                      Project {num}
                    </span>
                    <span className="pill">{category}</span>
                  </div>

                  <h3 style={{ fontSize: 'clamp(1.65rem, 3vw, 2.2rem)', fontWeight: 600, color: 'var(--white)', letterSpacing: '-0.035em', lineHeight: 1.08 }}>
                    {title}
                  </h3>

                  <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--grey-1)' }}>
                    {desc}
                  </p>

                  <div style={{ display: 'grid', gap: '0.9rem' }}>
                    <div className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-2)' }}>
                      What I delivered
                    </div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: '0.8rem' }}>
                      {highlights.map((item) => (
                        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--white)', marginTop: '0.55rem', flexShrink: 0 }} />
                          <span style={{ fontSize: '0.98rem', lineHeight: 1.75, color: 'var(--grey-1)' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ display: 'grid', gap: '1rem', alignContent: 'start' }}>
                  {gallery?.length ? (
                    <div style={{ border: '1px solid var(--grey-3)', borderRadius: '16px', padding: '1.2rem 1.25rem', background: 'rgba(255, 255, 255, 0.02)' }}>
                      <div className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-2)', marginBottom: '0.8rem' }}>
                        Project gallery
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: gallery.length === 1 ? '1fr' : 'repeat(2, minmax(0, 1fr))', gap: '0.9rem' }}>
                        {gallery.map((shot, shotIndex) => (
                          <ProjectShot
                            key={shot.src}
                            src={shot.src}
                            alt={shot.alt}
                            fit={shot.fit}
                            ratio={shot.ratio}
                            slot={`0${shotIndex + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div style={{ border: '1px solid var(--grey-3)', borderRadius: '16px', padding: '1.2rem 1.25rem', background: 'rgba(255, 255, 255, 0.02)' }}>
                    <div className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-2)', marginBottom: '0.7rem' }}>
                      Value delivered
                    </div>
                    <p style={{ margin: 0, fontSize: '0.98rem', lineHeight: 1.8, color: 'var(--grey-1)' }}>
                      {impact}
                    </p>
                  </div>

                  <div style={{ border: '1px solid var(--grey-3)', borderRadius: '16px', padding: '1.2rem 1.25rem', background: 'rgba(255, 255, 255, 0.02)' }}>
                    <div className="mono" style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-2)', marginBottom: '0.8rem' }}>
                      Tools and technologies
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                      {tags.map((tag) => <span key={tag} className="pill">{tag}</span>)}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
