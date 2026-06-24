const DATA_POINTS = [
  { value: '3+', label: 'AI 项目' },
  { value: '全栈', label: '技术方向' },
  { value: '2027', label: '本科毕业' },
]

const CONTACT_ITEMS = [
  { icon: 'phone', label: '18270083401' },
  { icon: 'email', label: 'zxjdelenovo@outlook.com' },
  { icon: 'location', label: '广东深圳' },
]

function Icon({ name, size = 16 }) {
  const paths = {
    phone: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z',
    email: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6',
    location: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 7a3 3 0 100 6 3 3 0 000-6z',
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, color: 'var(--text-muted)' }}
    >
      <path d={paths[name]} />
    </svg>
  )
}

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: 'var(--section-padding)',
        background: 'var(--bg-primary)',
      }}
    >
      <div className="container">
        <p className="section-label reveal">About</p>

        {/* Top row: name + data anchors */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '80px',
            marginBottom: '80px',
          }}
        >
          {/* Left: name + bio */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 300,
                letterSpacing: '-1px',
                lineHeight: 1.2,
                marginBottom: '20px',
              }}
            >
              邹贤杰
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: 'var(--text-secondary)',
                maxWidth: '480px',
                lineHeight: 1.8,
              }}
            >
              软件工程专业在读，专注于 AI 应用开发与视觉设计。
              善于在技术实现与审美表达之间寻找平衡，
              独立完成从概念到部署的全流程项目。
            </p>
          </div>

          {/* Right: data anchors */}
          <div style={{ display: 'flex', gap: '80px' }}>
            {DATA_POINTS.map((item) => (
              <div key={item.label} style={{ textAlign: 'center' }}>
                <p
                  style={{
                    fontSize: '72px',
                    fontWeight: 200,
                    lineHeight: 1,
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                    letterSpacing: '-2px',
                  }}
                >
                  {item.value}
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="reveal"
          style={{
            height: '1px',
            background: 'var(--border-subtle)',
            marginBottom: '64px',
          }}
        />

        {/* Contact row */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          {CONTACT_ITEMS.map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '15px',
                color: 'var(--text-secondary)',
              }}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="reveal"
          style={{
            height: '1px',
            background: 'var(--border-subtle)',
            marginBottom: '64px',
          }}
        />

        {/* Education timeline */}
        <div className="reveal">
          <p
            style={{
              fontSize: '12px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '32px',
            }}
          >
            教育经历
          </p>
          <div
            style={{
              borderLeft: '1px solid var(--border-card)',
              paddingLeft: '32px',
            }}
          >
            <p
              style={{
                fontSize: '14px',
                color: 'var(--text-muted)',
                marginBottom: '6px',
              }}
            >
              2023.09 — 2027.07
            </p>
            <p
              style={{
                fontSize: '20px',
                fontWeight: 500,
                marginBottom: '8px',
              }}
            >
              江西软件职业技术大学
            </p>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)' }}>
              软件工程（本科）&nbsp;&nbsp;·&nbsp;&nbsp;主修：程序设计基础、数据结构、计算机网络、数据库原理
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
