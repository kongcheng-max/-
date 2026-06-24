import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: '项目', href: '#projects' },
  { label: '经历', href: '#about' },
  { label: '优势', href: '#strengths' },
  { label: '联系', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '24px 64px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'background 400ms ease, backdrop-filter 400ms ease',
        background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <a
        href="#hero"
        style={{
          fontSize: '20px',
          fontWeight: 600,
          letterSpacing: '2px',
          color: 'var(--text-primary)',
        }}
      >
        ZXJ
      </a>

      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              transition: 'color 200ms ease',
              letterSpacing: '1px',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#fafafa')}
            onMouseLeave={(e) => (e.target.style.color = '')}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
