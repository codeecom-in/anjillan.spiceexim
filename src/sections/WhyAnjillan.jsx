import React, { useEffect, useRef } from 'react'
import { ShieldCheck, Award, TrendingUp, Ship, Sparkles } from 'lucide-react'
import { tradePillars } from '../data/siteData'
import { initScrollReveal } from '../animations/gsapUtils'

export default function WhyAnjillan() {
  const sectionRef = useRef(null)

  const iconMap = {
    ShieldCheck: <ShieldCheck size={28} />,
    Award: <Award size={28} />,
    TrendingUp: <TrendingUp size={28} />,
    Ship: <Ship size={28} />
  }

  useEffect(() => {
    const ctx = initScrollReveal(sectionRef.current, '.why-card')
    return () => ctx && ctx.revert()
  }, [])

  return (
    <section id="why" className="why-section section-padding" ref={sectionRef}>
      <div className="site-container">
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <span className="section-label">
            <Sparkles size={14} />
            The Anjillan Advantage
          </span>
          <h2 className="section-title">Why Leading Gulf Importers Choose Us</h2>
          <p className="section-subtitle">
            We bridge the gap between traditional agricultural excellence in south India and the demanding commercial pace of Dubai and the GCC.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="why-grid">
          {tradePillars.map((pillar, idx) => (
            <div key={idx} className="why-card">
              <div className="why-icon-wrap">
                {iconMap[pillar.icon] || <ShieldCheck size={28} />}
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Commercial Readiness Banner */}
        <div
          style={{
            marginTop: '3.5rem',
            background: 'rgba(255, 253, 249, 0.03)',
            border: '1px solid rgba(255, 253, 249, 0.09)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem',
            textAlign: 'center'
          }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.6rem' }}>
            Looking for Custom Mesh Sizes, Grades, or Private Labeling?
          </h3>
          <p style={{ color: 'var(--color-on-dark-muted)', maxWidth: '650px', margin: '0 auto 1.5rem' }}>
            We accommodate custom grinding, nitrogen packaging, and private label branding for UAE retail chains, hospitality providers, and spice millers.
          </p>
          <a href="#contact" className="btn btn-gold">
            Discuss Custom Requirements
          </a>
        </div>
      </div>
    </section>
  )
}
