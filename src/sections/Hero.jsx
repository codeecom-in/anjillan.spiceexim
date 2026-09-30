import React, { useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import { siteInfo } from '../data/siteData'
import spicesHeroImg from '../assets/spices-hero.jpg'
import { initHeroEntrance } from '../animations/gsapUtils'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = initHeroEntrance(heroRef.current)
    return () => ctx && ctx.revert()
  }, [])

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="site-container">
        <div className="hero-grid">
          {/* Left Column: Headline & Content */}
          <div className="hero-content-col">
            <div className="hero-badge">
              <span className="section-label">
                <Sparkles size={14} />
                Kerala &bull; UAE Spice Export Corridor
              </span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-line" style={{ display: 'block' }}>
                From the Spice Gardens of <span className="highlight-gold">Kerala</span>
              </span>
              <span className="hero-title-line" style={{ display: 'block' }}>
                to the Global Markets of the <span style={{ color: 'var(--color-navy)' }}>UAE</span>
              </span>
            </h1>

            <p className="hero-description">
              {siteInfo.description}
            </p>

            <div className="hero-action-buttons">
              <a href="#spices" className="btn btn-primary">
                <span>Explore Spice Catalog</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                <span>Request B2B Quotation</span>
              </a>
            </div>

            {/* Key Verification Metrics */}
            <div className="hero-stats-row">
              {siteInfo.stats.map((stat, idx) => (
                <div key={idx} className="hero-stat-badge">
                  <span className="hero-stat-value">{stat.value}</span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Spice Showcase */}
          <div className="hero-visual-col">
            <div className="hero-visual-card">
              <img
                src={spicesHeroImg}
                alt="Authentic Kerala Spices Selection - Tellicherry Pepper, Alleppey Cardamom, Cinnamon, Cloves, Turmeric"
                className="hero-visual-img"
              />

              {/* Floating Glass Highlight 1 */}
              <div className="hero-float-badge top-right hero-float-accent">
                <ShieldCheck size={26} color="var(--color-gold)" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--color-navy)' }}>
                    Single Origin
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
                    Wayanad & Idukki Estates
                  </div>
                </div>
              </div>

              {/* Floating Glass Highlight 2 */}
              <div className="hero-float-badge bottom-left hero-float-accent">
                <CheckCircle2 size={24} color="var(--color-success)" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--color-navy)' }}>
                    Direct Maritime Shipping
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
                    Cochin Port to Jebel Ali (3-4 Days)
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
