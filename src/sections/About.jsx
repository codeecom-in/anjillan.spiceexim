import React, { useEffect, useRef } from 'react'
import { Compass, ShieldCheck, Scale, MapPin } from 'lucide-react'
import { initScrollReveal } from '../animations/gsapUtils'
import aboutLogo from '../assets/logon.png'

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = initScrollReveal(sectionRef.current, '.reveal-item')
    return () => ctx && ctx.revert()
  }, [])

  return (
    <section id="about" className="about-section section-padding" ref={sectionRef}>
      <div className="site-container">
        <div className="about-grid">
          {/* Left Column: Heritage & Mission */}
          <div>
            <img
              src={aboutLogo}
              alt="Anjillan Spice Exim"
              className="about-logo reveal-item"
            />
            <span className="section-label reveal-item">Indian Heritage. Global Reach.</span>
            <h2 className="section-title reveal-item">
              From the Heart of India to the World
            </h2>
            <p className="reveal-item" style={{ fontSize: '1.05rem', color: 'var(--color-muted)', marginBottom: '1.2rem', lineHeight: 1.7 }}>
              <strong>Anjillan Spice Exim</strong> is built around a simple idea: bringing the authentic richness of Indian spices closer to the world. Rooted in the traditions of Indian spice cultivation and inspired by global opportunities, we connect quality products from India with markets beyond its borders.
            </p>
            <p className="reveal-item" style={{ fontSize: '1.02rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
              Every spice carries a story of fertile soil, generations of knowledge, traditional cultivation, and the distinctive flavours that make Indian cuisine known around the world. We turn that heritage into trusted international trade through quality, authenticity, and dependable relationships.
            </p>
            <p className="reveal-item" style={{ fontSize: '1.02rem', color: 'var(--color-primary)', fontWeight: 700, marginTop: '1.2rem', lineHeight: 1.6 }}>
              Authentic by origin. Global by vision.
            </p>

            <div className="about-features">
              <div className="about-feature-item reveal-item">
                <div className="about-feature-icon">
                  <Compass size={24} />
                </div>
                <div>
                  <h3 className="about-feature-title">Direct Plantation Sourcing</h3>
                  <p className="about-feature-desc">
                    Direct contracts with heritage growers in Idukki, Wayanad, and Malabar for fresh, high-oil lots.
                  </p>
                </div>
              </div>

              <div className="about-feature-item reveal-item">
                <div className="about-feature-icon">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="about-feature-title">Verified Grade Assurance</h3>
                  <p className="about-feature-desc">
                    Batch-tested for essential oil concentrations, zero adulteration, and international pesticide limits.
                  </p>
                </div>
              </div>

              <div className="about-feature-item reveal-item">
                <div className="about-feature-icon">
                  <Scale size={24} />
                </div>
                <div>
                  <h3 className="about-feature-title">Transparent Trade Terms</h3>
                  <p className="about-feature-desc">
                    Clear FOB Cochin or CIF Jebel Ali quotations, flexible MOQs, and dedicated bilingual logistics support.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Supply Journey Card */}
          <div className="reveal-item">
            <div className="journey-card">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--color-gold-light)', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.8rem' }}>
                <MapPin size={16} />
                The Supply Chain
              </div>
              <h3>The Anjillan Journey</h3>
              <p style={{ color: 'var(--color-on-dark-muted)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                How our spices travel with uncompromised freshness from the mountain slopes of southern India to commercial kitchens and retail shelves in Dubai and Abu Dhabi:
              </p>

              <div className="journey-steps-list">
                <div className="journey-step">
                  <span className="journey-step-num">01</span>
                  <div className="journey-step-text">
                    <strong>Kerala Mountain Estates</strong>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-on-dark-muted)' }}>Carefully harvested at peak maturity in Idukki & Wayanad</div>
                  </div>
                </div>

                <div className="journey-step">
                  <span className="journey-step-num">02</span>
                  <div className="journey-step-text">
                    <strong>Garbling, Sifting & Sun-Drying</strong>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-on-dark-muted)' }}>Cleaned, size-graded, and dried using traditional methods</div>
                  </div>
                </div>

                <div className="journey-step">
                  <span className="journey-step-num">03</span>
                  <div className="journey-step-text">
                    <strong>Laboratory Analysis & Phytosanitary</strong>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-on-dark-muted)' }}>Government certified testing and documentation</div>
                  </div>
                </div>

                <div className="journey-step">
                  <span className="journey-step-num">04</span>
                  <div className="journey-step-text">
                    <strong>Airtight Export Packaging</strong>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-on-dark-muted)' }}>Multi-layer vacuum sealing preserves aromatic oils</div>
                  </div>
                </div>

                <div className="journey-step">
                  <span className="journey-step-num">05</span>
                  <div className="journey-step-text">
                    <strong>UAE Port Clearance & Distribution</strong>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-on-dark-muted)' }}>Swift clearance at Jebel Ali for seamless delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
