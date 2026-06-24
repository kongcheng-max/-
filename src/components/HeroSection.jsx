export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#000',
      }}
    >
      {/* Ken Burns Background — abstract dark geometric gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 30% 40%, rgba(59,130,246,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 70% 60%, rgba(59,130,246,0.04) 0%, transparent 50%),
            radial-gradient(circle at 85% 15%, rgba(255,255,255,0.02) 0%, transparent 40%),
            #000
          `,
          animation: 'kenBurns 20s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Vignette overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)
          `,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
        }}
      >
        <div className="reveal visible">
          <p
            style={{
              fontSize: '14px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '32px',
            }}
          >
            Portfolio
          </p>
        </div>

        <div className="reveal visible">
          <h1
            style={{
              fontSize: 'clamp(64px, 8vw, 120px)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-2px',
              color: 'var(--text-primary)',
              marginBottom: '24px',
            }}
          >
            邹贤杰
          </h1>
        </div>

        <div className="reveal visible">
          <p
            style={{
              fontSize: 'clamp(18px, 2vw, 28px)',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              letterSpacing: '2px',
              maxWidth: '600px',
              marginBottom: '48px',
            }}
          >
            AI 应用开发 &nbsp;/&nbsp; 视觉设计 &nbsp;/&nbsp; 品牌设计
          </p>
        </div>

        <div className="reveal visible">
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              padding: '14px 40px',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '2px',
              fontSize: '14px',
              letterSpacing: '2px',
              color: 'var(--text-primary)',
              transition: 'all 300ms ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'var(--accent)'
              e.target.style.borderColor = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent'
              e.target.style.borderColor = 'rgba(255,255,255,0.3)'
            }}
          >
            取得联系
          </a>
        </div>
      </div>

      {/* Bottom fade line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
        }}
      />
    </section>
  )
}
