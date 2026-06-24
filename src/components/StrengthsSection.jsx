const STRENGTHS = [
  {
    title: '全栈开发',
    desc: 'React + FastAPI，独立完成前后端全流程，具备完整的产品交付能力',
    icon: 'layers',
  },
  {
    title: 'AI Agent',
    desc: 'LangChain + LangGraph 构建多模态智能体，工具调用与状态持久化',
    icon: 'cpu',
  },
  {
    title: 'RAG 系统',
    desc: '向量检索 + BM25 + 知识图谱混合检索，RRF 融合排序，容错降级',
    icon: 'search',
  },
  {
    title: '多模态应用',
    desc: '视觉模型图片识别 + OCR 双引擎，支持 20+ 文档格式智能处理',
    icon: 'image',
  },
  {
    title: '系统设计',
    desc: '四层架构设计，Docker Compose 多服务编排，模块化可扩展',
    icon: 'grid',
  },
  {
    title: '视觉设计',
    desc: 'Gradio 自定义 CSS 主题，D3.js 知识图谱可视化，注重交互体验',
    icon: 'eye',
  },
]

function StrengthIcon({ name }) {
  const svgPaths = {
    layers:
      'M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5',
    cpu: 'M9 2v2 M15 2v2 M9 22v-2 M15 22v-2 M20 9h2 M20 15h2 M2 9h2 M2 15h2 M6 6h12v12H6z M9 9h6v6H9z',
    search:
      'M11 3a8 8 0 100 16 8 8 0 000-16z M21 21l-4.35-4.35',
    image:
      'M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7z M3 17l4.5-4.5L11 16l4-5 6 4',
    grid: 'M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z',
    eye: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 100 6 3 3 0 000-6z',
  }

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: 'var(--accent)', marginBottom: '20px' }}
    >
      <path d={svgPaths[name]} />
    </svg>
  )
}

export default function StrengthsSection() {
  return (
    <section
      id="strengths"
      style={{
        padding: 'var(--section-padding)',
        background: 'var(--bg-primary)',
      }}
    >
      <div className="container">
        <p className="section-label reveal">Strengths</p>

        <h2
          className="reveal"
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 300,
            letterSpacing: '-1px',
            marginBottom: '64px',
          }}
        >
          个人优势
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'var(--border-subtle)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          {STRENGTHS.map((item) => (
            <div
              key={item.title}
              className="reveal"
              style={{
                background: 'var(--bg-primary)',
                padding: '48px 40px',
                transition: 'background 300ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-card)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-primary)'
              }}
            >
              <StrengthIcon name={item.icon} />
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 500,
                  marginBottom: '12px',
                  letterSpacing: '-0.3px',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
