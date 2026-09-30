import React, { useEffect, useRef } from 'react'
import { Anchor, Navigation, Clock, ShieldCheck, MapPin } from 'lucide-react'
import { initRouteAnimation } from '../animations/gsapUtils'

export default function KeralaToUAE() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = initRouteAnimation(sectionRef.current)
    return () => ctx && ctx.revert()
  }, [])

  return (
    <section id="route" className="route-section section-padding" ref={sectionRef}>
      <div className="site-container">
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <span className="section-label">Maritime Trade Route</span>
          <h2 className="section-title">The Arabian Sea Spice Corridor</h2>
          <p className="section-subtitle">
            Connecting India’s premier spice deepwater gateway at Cochin with Dubai's world-class logistics hub at Jebel Ali in just 3 to 4 days.
          </p>
        </div>

        <div className="route-card">
          {/* Animated SVG Route Illustration */}
          <div className="route-svg-container">
            <svg
              viewBox="0 0 800 200"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
              style={{ overflow: 'visible' }}
            >
              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--color-primary)" />
                  <stop offset="50%" stopColor="var(--color-gold)" />
                  <stop offset="100%" stopColor="var(--color-navy)" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
              </defs>

              {/* Background Reference Track */}
              <path
                d="M 100 160 C 280 150, 480 80, 700 40"
                fill="none"
                stroke="var(--color-route-track)"
                strokeWidth="4"
                strokeDasharray="6 6"
              />

              {/* Animated Foreground Route */}
              <path
                className="trade-route-path"
                d="M 100 160 C 280 150, 480 80, 700 40"
                fill="none"
                stroke="url(#routeGradient)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="url(#glow)"
              />

              {/* Origin Port Pin: Cochin */}
              <g className="route-port-pin" transform="translate(100, 160)">
                <circle r="14" fill="var(--color-primary)" opacity="0.2" />
                <circle r="7" fill="var(--color-primary)" />
                <text x="-40" y="32" fill="var(--color-navy)" fontSize="13" fontWeight="700">
                  Cochin Port (ICTT)
                </text>
                <text x="-40" y="47" fill="var(--color-muted)" fontSize="11">
                  Kerala, India
                </text>
              </g>

              {/* Route Midpoint Indicator */}
              <g transform="translate(400, 105)">
                <rect x="-65" y="-14" width="130" height="28" rx="14" fill="var(--warm-white)" stroke="var(--color-border)" />
                <text x="0" y="4" textAnchor="middle" fill="var(--color-primary)" fontSize="11" fontWeight="700">
                  3 - 4 Days Transit
                </text>
              </g>

              {/* Destination Port Pin: Jebel Ali */}
              <g className="route-port-pin" transform="translate(700, 40)">
                <circle r="14" fill="var(--color-navy)" opacity="0.2" />
                <circle r="7" fill="var(--color-navy)" />
                <text x="-50" y="-22" fill="var(--color-navy)" fontSize="13" fontWeight="700">
                  Jebel Ali Port / Dubai
                </text>
                <text x="-50" y="-8" fill="var(--color-muted)" fontSize="11">
                  United Arab Emirates
                </text>
              </g>
            </svg>
          </div>

          {/* Port Information Grid */}
          <div className="route-ports-grid">
            <div className="port-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-primary)', marginBottom: 8 }}>
                <Anchor size={20} />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase' }}>Port of Origin</span>
              </div>
              <h4>Cochin International Container Transshipment Terminal</h4>
              <p className="port-detail">
                Located within hours of Kerala's prime cardamom and pepper plantations. Direct feeder and mainline container vessels departure twice weekly with temperature-managed export bays.
              </p>
            </div>

            <div className="port-box uae">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-navy)', marginBottom: 8 }}>
                <Navigation size={20} />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase' }}>Port of Arrival</span>
              </div>
              <h4>Jebel Ali Port & Deira Trade Distribution Hub</h4>
              <p className="port-detail">
                The Middle East's premier flagship trade gateway. Comprehensive customs clearance, Dubai Municipality food inspection compliance, and rapid dispatch to wholesale buyers across all 7 Emirates.
              </p>
            </div>
          </div>

          {/* Highlights Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Clock size={24} color="var(--color-gold)" />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>Short Sea Transit</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>3 to 4 days ocean voyage</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <ShieldCheck size={24} color="var(--color-primary)" />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>FOB / CIF Flexibility</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>Tailored commercial incoterms</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <MapPin size={24} color="var(--color-navy)" />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>GCC Re-Export Ready</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>Compliant for Saudi & Gulf trade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
