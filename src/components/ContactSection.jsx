export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
        }}
      />

      {/* Ambient background glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 40% 40% at 50% 60%, rgba(59,130,246,0.04) 0%, transparent 60%)
          `,
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
        }}
      >
        <p
          className="reveal"
          style={{
            fontSize: '12px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '24px',
          }}
        >
          Contact
        </p>

        <h2
          className="reveal"
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 300,
            letterSpacing: '-1px',
            marginBottom: '48px',
          }}
        >
          保持联系
        </h2>

        {/* Email — large, prominent */}
        <div className="reveal" style={{ marginBottom: '32px' }}>
          <a
            href="mailto:zxjdelenovo@outlook.com"
            style={{
              fontSize: 'clamp(24px, 3vw, 40px)',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              letterSpacing: '-0.5px',
              transition: 'color 300ms ease',
              borderBottom: '1px solid var(--border-card)',
              paddingBottom: '4px',
            }}
            onMouseEnter={(e) => {
              e.target.style.color = 'var(--accent)'
              e.target.style.borderColor = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.target.style.color = 'var(--text-secondary)'
              e.target.style.borderColor = 'var(--border-card)'
            }}
          >
            zxjdelenovo@outlook.com
          </a>
        </div>

        {/* Phone */}
        <p
          className="reveal"
          style={{
            fontSize: '18px',
            color: 'var(--text-muted)',
            marginBottom: '64px',
          }}
        >
          18270083401
        </p>

        {/* Links row */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '48px',
          }}
        >
          <span
            style={{
              fontSize: '14px',
              color: 'var(--text-muted)',
              letterSpacing: '1px',
            }}
          >
            个人博客
          </span>
          <span
            style={{
              fontSize: '14px',
              color: 'var(--text-muted)',
              letterSpacing: '1px',
            }}
          >
            广东深圳
          </span>
        </div>

        {/* Footer credit */}
        <p
          className="reveal"
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '12px',
            color: 'var(--text-muted)',
            letterSpacing: '1px',
          }}
        >
          © 2026 邹贤杰
        </p>
      </div>
    </section>
  )
}
