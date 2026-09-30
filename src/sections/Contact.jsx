import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react'
import { siteInfo, spices } from '../data/siteData'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    volume: '1 - 5 MT (Metric Tons)',
    port: 'Jebel Ali Port (Dubai)',
    incoterm: 'CIF (Cost, Insurance & Freight)',
    selectedSpices: ['pepper', 'cardamom'],
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSpiceToggle = (spiceId) => {
    setFormData((prev) => {
      const exists = prev.selectedSpices.includes(spiceId)
      return {
        ...prev,
        selectedSpices: exists
          ? prev.selectedSpices.filter((id) => id !== spiceId)
          : [...prev.selectedSpices, spiceId]
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated submission handler
    setSubmitted(true)
  }

  const cleanWhatsapp = siteInfo.contact.whatsapp.replace(/[^0-9]/g, '')

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="site-container">
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span className="section-label">B2B Trade Inquiries</span>
          <h2 className="section-title">Request a Commercial Quotation (RFQ)</h2>
          <p className="section-subtitle">
            Speak directly with our trade specialists in Dubai and Kochi. We respond with formal FOB Cochin or CIF Jebel Ali quotations within 24 business hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-panel">
            <div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '1rem', color: 'var(--warm-white)' }}>
                Trade Desks & Offices
              </h3>
              <p style={{ color: 'var(--color-on-dark-muted)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                Whether you need a sample test kit, full container quotes, or custom export packaging, our teams are accessible across both time zones.
              </p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={22} />
              </div>
              <div>
                <div className="contact-item-title">UAE Trade Operations</div>
                <div className="contact-item-val">{siteInfo.contact.uaeOffice}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-on-dark-muted)', marginTop: 2 }}>
                  Serving Dubai, Abu Dhabi, Sharjah, and Northern Emirates
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={22} />
              </div>
              <div>
                <div className="contact-item-title">Kerala Sourcing & Packing Center</div>
                <div className="contact-item-val">{siteInfo.contact.indiaOffice}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-on-dark-muted)', marginTop: 2 }}>
                  Direct oversight of plantations, grading & Cochin port loading
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={22} />
              </div>
              <div>
                <div className="contact-item-title">Official Trade Email</div>
                <a
                  href={`mailto:${siteInfo.contact.email}`}
                  className="contact-item-val"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {siteInfo.contact.email}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={22} />
              </div>
              <div>
                <div className="contact-item-title">Direct Inquiries</div>
                <div className="contact-item-val">{siteInfo.contact.phoneUAE} (UAE Desk)</div>
                <div className="contact-item-val" style={{ fontSize: '0.95rem', color: 'var(--color-on-dark-muted)' }}>
                  {siteInfo.contact.phoneIndia} (India Office)
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Quick Button */}
            <div style={{ marginTop: '1rem' }}>
              <a
                href={`https://wa.me/${cleanWhatsapp}?text=Hello%20Anjillan%20Exim,%20I%20would%20like%20to%20inquire%20about%20Kerala%20spices%20export%20to%20UAE.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', padding: '1rem 1.5rem', fontSize: '1rem' }}
              >
                <MessageSquare size={20} />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Commercial RFQ Form */}
          <div className="rfq-form-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <CheckCircle2 size={64} color="var(--color-success)" style={{ margin: '0 auto 1.5rem' }} />
                <h3 style={{ fontSize: '1.8rem', color: 'var(--color-navy)', marginBottom: '0.8rem' }}>
                  Quotation Request Received
                </h3>
                <p style={{ color: 'var(--color-muted)', maxWidth: '440px', margin: '0 auto 1.8rem', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.name}</strong>. Our export trade desk has received your inquiry for {formData.company || 'your business'}. We will prepare a detailed CIF/FOB specification sheet and reach out to <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      volume: '1 - 5 MT (Metric Tons)',
                      port: 'Jebel Ali Port (Dubai)',
                      incoterm: 'CIF (Cost, Insurance & Freight)',
                      selectedSpices: ['pepper', 'cardamom'],
                      notes: ''
                    })
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '1.5rem' }}>
                  B2B Trade Specification Form
                </h3>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="rfq-name">Your Full Name *</label>
                    <input
                      id="rfq-name"
                      type="text"
                      required
                      placeholder="e.g. Tariq Al-Mansoor"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="rfq-company">Company / Trade License Name *</label>
                    <input
                      id="rfq-company"
                      type="text"
                      required
                      placeholder="e.g. Gulf Spice Trading LLC"
                      className="form-input"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="rfq-email">Business Email Address *</label>
                    <input
                      id="rfq-email"
                      type="email"
                      required
                      placeholder="trade@company.ae"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="rfq-phone">Phone / WhatsApp Number *</label>
                    <input
                      id="rfq-phone"
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Spices of Interest Multi-select */}
                <div className="form-group">
                  <label className="form-label">Spices of Interest (Select All That Apply):</label>
                  <div className="checkbox-spices-grid">
                    {spices.map((spice) => (
                      <label key={spice.id} className="spice-checkbox-label">
                        <input
                          type="checkbox"
                          checked={formData.selectedSpices.includes(spice.id)}
                          onChange={() => handleSpiceToggle(spice.id)}
                          style={{ accentColor: 'var(--color-primary)' }}
                        />
                        <span>{spice.name.split(' ')[0]}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="rfq-volume">Order Volume</label>
                    <select
                      id="rfq-volume"
                      className="form-select"
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    >
                      <option>500 kg - 1 MT (Trial Lot)</option>
                      <option>1 - 5 MT (Metric Tons)</option>
                      <option>5 - 15 MT (Multi-Pallet)</option>
                      <option>20ft Full Container Load (FCL)</option>
                      <option>40ft Full Container Load (FCL)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="rfq-port">Destination Port</label>
                    <select
                      id="rfq-port"
                      className="form-select"
                      value={formData.port}
                      onChange={(e) => setFormData({ ...formData, port: e.target.value })}
                    >
                      <option>Jebel Ali Port (Dubai)</option>
                      <option>Port Rashid (Dubai)</option>
                      <option>Khalifa Port (Abu Dhabi)</option>
                      <option>Port Khalid (Sharjah)</option>
                      <option>Hamriya Port (Sharjah)</option>
                      <option>Other GCC Destination</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="rfq-notes">Packaging Specifications or Custom Notes</label>
                  <textarea
                    id="rfq-notes"
                    rows="3"
                    placeholder="Provide details on required mesh size, bulk jute vs. vacuum packaging, ASTA color value, or delivery timelines..."
                    className="form-textarea"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.95rem', fontSize: '1rem' }}
                >
                  <Send size={18} />
                  <span>Submit Request for Quotation</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
