import React from 'react'
import { ArrowUp, MessageCircle, ShieldCheck } from 'lucide-react'
import logoUrl from '../assets/logon_white.png'
import { siteInfo } from '../data/siteData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <a href="#home" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: '0.8rem' }}>
              <img
                src={logoUrl}
                alt="Anjillan Exim Logo"
                style={{ height: 48, borderRadius: 6, objectFit: 'contain' }}
              />
              {/* <span className="brand-name" style={{ color: 'var(--warm-white)', fontSize: '1.35rem' }}>
                {siteInfo.name}
              </span> */}
            </a>
            <p className="footer-desc">
              Dedicated to authentic single-origin Kerala spice export and dependable supply chain bridges across Dubai, Abu Dhabi, and the wider GCC region.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-gold-light)', fontSize: '0.85rem', fontWeight: 600 }}>
              <ShieldCheck size={18} />
              <span>Spices Board of India &bull; Dubai Municipality Compliant</span>
            </div>
            <a
              href="https://www.instagram.com/anjillan.exports/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Anjillan Exim on Instagram"
              title="Anjillan Exim on Instagram"
            >
              <span className="instagram-glyph" aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/message/J23A2DTIXDE2G1"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link footer-whatsapp-link"
              aria-label="Chat with Anjillan Exim on WhatsApp"
              title="Chat with Anjillan Exim on WhatsApp"
            >
              <MessageCircle size={20} aria-hidden="true" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">Heritage & Mission</a></li>
              <li><a href="#spices" className="footer-link">Spice Catalog</a></li>
              <li><a href="#route" className="footer-link">Trade Route Map</a></li>
              <li><a href="#quality" className="footer-link">Quality Standards</a></li>
              <li><a href="#why" className="footer-link">Why Anjillan</a></li>
              <li><a href="#contact" className="footer-link">Commercial RFQ</a></li>
            </ul>
          </div>

          {/* Spices Exported */}
          <div>
            <h4 className="footer-title">Export Varieties</h4>
            <ul className="footer-links">
              <li><a href="#spices" className="footer-link">Tellicherry Black Pepper</a></li>
              <li><a href="#spices" className="footer-link">Alleppey Green Cardamom</a></li>
              <li><a href="#spices" className="footer-link">True Ceylon Cinnamon</a></li>
              <li><a href="#spices" className="footer-link">Hand-Picked Cloves</a></li>
              <li><a href="#spices" className="footer-link">High-Curcumin Turmeric</a></li>
              <li><a href="#spices" className="footer-link">Sun-Dried Ginger</a></li>
              <li><a href="#spices" className="footer-link">Kerala Nutmeg & Mace</a></li>
            </ul>
          </div>

          {/* Commercial Trade Corridors */}
          <div>
            <h4 className="footer-title">Trade Desks</h4>
            <div style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--warm-white)' }}>UAE Desk:</strong><br />
              {siteInfo.contact.uaeOffice}<br />
              <span style={{ color: 'var(--color-gold-light)' }}>{siteInfo.contact.phoneUAE}</span>
            </div>
            <div style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--warm-white)' }}>Kerala Operations:</strong><br />
              {siteInfo.contact.indiaOffice}<br />
              <span style={{ color: 'var(--color-gold-light)' }}>{siteInfo.contact.phoneIndia}</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} {siteInfo.legalName}. All rights reserved. Registered Export Entity.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>
              Developed by{' '}
              <a
                href="https://roshan.codeecom.in"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-credit-link"
              >
                Muhammed Roshan
              </a>{' '}
              for{' '}
              <a
                href="https://codeecom.in"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-credit-link"
              >
                Codeecom.in
              </a>
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: 'var(--warm-white)',
                background: 'rgba(255,253,249,0.08)',
                padding: '6px 14px',
                borderRadius: '4px',
                fontSize: '0.85rem'
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
