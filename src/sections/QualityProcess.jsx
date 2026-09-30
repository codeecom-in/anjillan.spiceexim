import React, { useEffect, useRef } from 'react'
import { Award } from 'lucide-react'
import { qualitySteps } from '../data/siteData'
import { initScrollReveal } from '../animations/gsapUtils'

export default function QualityProcess() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = initScrollReveal(sectionRef.current, '.quality-step-card')
    return () => ctx && ctx.revert()
  }, [])

  return (
    <section id="quality" className="quality-section section-padding" ref={sectionRef}>
      <div className="site-container">
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <span className="section-label">Quality Assurance Protocols</span>
          <h2 className="section-title">Stringent Testing & Global Standards</h2>
          <p className="section-subtitle">
            Every shipment exported under the Anjillan Exim name undergoes uncompromising quality curation, from farm gate to destination warehouse.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="quality-steps-grid">
          {qualitySteps.map((step) => (
            <div key={step.step} className="quality-step-card">
              <span className="step-number">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        {/* Certification Standards Banner */}
        <div
          style={{
            marginTop: '3.5rem',
            background: 'var(--color-cream)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '2rem 2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <Award size={36} color="var(--color-primary)" />
            <div>
              <h4 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '0.2rem' }}>
                Full Regulatory & Export Documentation
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)' }}>
                Phytosanitary Certificates, Spices Board of India Quality Badges, Certificates of Origin, and Dubai Municipality FIRS Compliance.
              </p>
            </div>
          </div>

          <a href="#contact" className="btn btn-secondary">
            Request Spec Sheets
          </a>
        </div>
      </div>
    </section>
  )
}
