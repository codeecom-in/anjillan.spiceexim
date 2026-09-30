import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, X, Sparkles, CheckCircle } from 'lucide-react'
import { spices } from '../data/siteData'
import { initScrollReveal } from '../animations/gsapUtils'

export default function SpicePortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [activeModalSpice, setActiveModalSpice] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = initScrollReveal(sectionRef.current, '.spice-card')
    return () => ctx && ctx.revert()
  }, [selectedCategory])

  const filteredSpices = selectedCategory === 'all'
    ? spices
    : spices.filter(item => item.category === selectedCategory)

  return (
    <section id="spices" className="spices-section section-padding" ref={sectionRef}>
      <div className="site-container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <span className="section-label">
            <Sparkles size={14} />
            Export Catalog
          </span>
          <h2 className="section-title">Our Premium Spice Portfolio</h2>
          <p className="section-subtitle">
            Carefully curated, graded, and packed for high-demand wholesale, retail distribution, and food processing industries across the UAE and Gulf region.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="spices-filter-bar">
          <button
            type="button"
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Export Spices ({spices.length})
          </button>
          <button
            type="button"
            className={`filter-btn ${selectedCategory === 'whole' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('whole')}
          >
            Whole Spices
          </button>
          <button
            type="button"
            className={`filter-btn ${selectedCategory === 'bark' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('bark')}
          >
            Bark & Quills
          </button>
          <button
            type="button"
            className={`filter-btn ${selectedCategory === 'powder' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('powder')}
          >
            Powder & Rhizomes
          </button>
        </div>

        {/* Spice Cards Grid */}
        <div className="spices-grid">
          {filteredSpices.map((spice) => (
            <div key={spice.id} className="spice-card">
              <div className="spice-card-img-wrap">
                <img
                  src={spice.img}
                  alt={`${spice.name} export quality from Kerala`}
                  className="spice-card-img"
                  loading="lazy"
                />
                <span className="spice-card-badge">{spice.badge}</span>
              </div>

              <div className="spice-card-body">
                <div className="spice-card-origin">{spice.origin}</div>
                <h3 className="spice-card-title">{spice.name}</h3>
                <p className="spice-card-desc">{spice.desc}</p>

                <div className="spice-card-footer">
                  <span className="spice-grade-tag">{spice.grade.split(' ')[0]} Grade</span>
                  <button
                    type="button"
                    className="btn-spec-details"
                    onClick={() => setActiveModalSpice(spice)}
                  >
                    <span>View Specs</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Technical Specifications */}
      {activeModalSpice && (
        <div
          className="modal-overlay"
          onClick={() => setActiveModalSpice(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => setActiveModalSpice(null)}
              aria-label="Close details"
            >
              <X size={20} />
            </button>

            <span className="section-label" style={{ marginBottom: '0.8rem' }}>
              Technical Export Specification
            </span>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-navy)', marginBottom: '0.4rem' }}>
              {activeModalSpice.name}
            </h3>
            <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.92rem' }}>
              Origin: {activeModalSpice.origin}
            </p>

            <table className="modal-specs-table">
              <tbody>
                <tr>
                  <td>Official Grade</td>
                  <td><strong>{activeModalSpice.grade}</strong></td>
                </tr>
                {activeModalSpice.specs.moisture && (
                  <tr>
                    <td>Moisture Content</td>
                    <td>{activeModalSpice.specs.moisture}</td>
                  </tr>
                )}
                {activeModalSpice.specs.volatileOil && (
                  <tr>
                    <td>Volatile Oil Content</td>
                    <td>{activeModalSpice.specs.volatileOil}</td>
                  </tr>
                )}
                {activeModalSpice.specs.piperine && (
                  <tr>
                    <td>Piperine Content</td>
                    <td>{activeModalSpice.specs.piperine}</td>
                  </tr>
                )}
                {activeModalSpice.specs.curcumin && (
                  <tr>
                    <td>Natural Curcumin</td>
                    <td>{activeModalSpice.specs.curcumin}</td>
                  </tr>
                )}
                {activeModalSpice.specs.eugenol && (
                  <tr>
                    <td>Eugenol Content</td>
                    <td>{activeModalSpice.specs.eugenol}</td>
                  </tr>
                )}
                {activeModalSpice.specs.density && (
                  <tr>
                    <td>Bulk Density</td>
                    <td>{activeModalSpice.specs.density}</td>
                  </tr>
                )}
                {activeModalSpice.specs.packaging && (
                  <tr>
                    <td>Packaging Formats</td>
                    <td>{activeModalSpice.specs.packaging}</td>
                  </tr>
                )}
              </tbody>
            </table>

            <div style={{ background: 'var(--color-cream)', padding: '1.2rem', borderRadius: '8px', marginBottom: '1.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, color: 'var(--color-navy)', marginBottom: 4 }}>
                <CheckCircle size={18} color="var(--color-primary)" />
                Compliance & Quality Guarantee
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--color-muted)' }}>
                Certified free from synthetic dyes, zero aflatoxin above UAE/EU maximum residual limits (MRL), tested by Spices Board of India accredited labs.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={() => setActiveModalSpice(null)}
                style={{ flex: 1 }}
              >
                Inquire About This Spice
              </a>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setActiveModalSpice(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
