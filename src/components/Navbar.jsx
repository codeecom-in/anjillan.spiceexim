import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import logoUrl from '../assets/anj_logo.png'
import navTitleUrl from '../assets/nav_title.png'
import { siteInfo } from '../data/siteData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close drawer on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="site-container nav-container">
        {/* Brand Wordmark */}
        <a href="/" className="navbar-brand" aria-label="Anjillan Spice Exim">
          <img src={logoUrl} alt="" className="navbar-brand-logo" />
          <img src={navTitleUrl} alt="anjillan.spiceexim" className="navbar-brand-title" />
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="nav-menu">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#spices" className="nav-link">Spices</a></li>
            <li><a href="#route" className="nav-link">Trade Route</a></li>
            <li><a href="#quality" className="nav-link">Quality</a></li>
            <li><a href="#why" className="nav-link">Why Us</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        {/* CTA Group */}
        <div className="nav-cta-group">
          <a href="#contact" className="btn btn-primary btn-quote">
            <span>Request Quote</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileOpen(true)}
            aria-label="Open mobile navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="mobile-drawer-overlay"
          onClick={() => setMobileOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-drawer-header">
              <a href="/" className="navbar-brand" aria-label="Anjillan Spice Exim">
                <img src={logoUrl} alt="" className="navbar-brand-logo" />
                <img src={navTitleUrl} alt="anjillan.spiceexim" className="navbar-brand-title" />
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                style={{ padding: '6px', color: 'var(--color-navy)' }}
              >
                <X size={24} />
              </button>
            </div>

            <nav className="mobile-nav-links">
              <a href="#about" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                About
              </a>
              <a href="#spices" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Spice Portfolio
              </a>
              <a href="#route" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Trade Route
              </a>
              <a href="#quality" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Quality & Testing
              </a>
              <a href="#why" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Why Anjillan
              </a>
              <a href="#contact" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Contact & RFQ
              </a>
            </nav>

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={() => setMobileOpen(false)}
                style={{ width: '100%' }}
              >
                <span>Request a Quote</span>
                <ArrowUpRight size={16} />
              </a>
              <a
                href={`https://wa.me/${siteInfo.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <span>WhatsApp Trade Desk</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
