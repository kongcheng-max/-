const PROJECTS = [
  {
    id: 'officetool',
    name: 'OfficeTool',
    subtitle: '企业级文档智能问答系统',
    letter: 'O',
    tags: ['FastAPI', 'React 18', 'PostgreSQL', 'Milvus', 'Neo4j', 'Docker'],
    description:
      '全栈独立开发。四层架构（前端/后端/数据层/模型层），8个服务 Docker Compose 编排。自研混合检索 RAG 管线：向量检索 + BM25 + 知识图谱，RRF 融合排序。支持 SSE 流式问答、查询改写、答案溯源。',
  },
  {
    id: 'personalchief',
    name: 'PersonalChief',
    subtitle: 'AI 私厨管家',
    letter: 'P',
    tags: ['FastAPI', 'LangChain', 'LangGraph', 'Qwen', 'React 19', 'SQLite'],
    description:
      '基于 LangChain + LangGraph 构建多模态 AI Agent。集成 Qwen 视觉模型实现食材图片识别，结合 Tavily Search 联网检索真实菜谱。SSE 流式推送，打字机效果，工具调用可视化。',
  },
  {
    id: 'noteexam',
    name: 'NoteExam',
    subtitle: 'AI 智能出题系统',
    letter: 'N',
    tags: ['Python', 'Gradio', 'DeepSeek', 'EasyOCR', 'PaddleOCR'],
    description:
      '两阶段 AI 出题流水线：知识提取 + 高温生成，重复率 ≤ 30%。自研三层容错 JSON 解析器。双引擎 OCR 自适应方案，支持图片/PDF/文本三种输入。',
  },
]

function ProjectCard({ project }) {
  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-card)',
        borderRadius: '4px',
        overflow: 'hidden',
        transition: 'transform 400ms ease, border-color 400ms ease, box-shadow 400ms ease',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.borderColor = 'var(--border-hover)'
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'var(--border-card)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Card image placeholder — dark gradient with project letter */}
      <div
        style={{
          height: '240px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `
            radial-gradient(circle at 60% 30%, rgba(59,130,246,0.08) 0%, transparent 60%),
            linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)
          `,
          borderBottom: '1px solid var(--border-subtle)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Abstract grid lines background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        <span
          style={{
            position: 'relative',
            fontSize: '72px',
            fontWeight: 200,
            color: 'rgba(255,255,255,0.15)',
            zIndex: 1,
          }}
        >
          {project.letter}
        </span>
      </div>

      {/* Card body */}
      <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3
          style={{
            fontSize: '24px',
            fontWeight: 500,
            letterSpacing: '-0.5px',
            marginBottom: '4px',
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            marginBottom: '16px',
          }}
        >
          {project.subtitle}
        </p>

        {/* Tech tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '20px',
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                display: 'inline-block',
                padding: '3px 10px',
                fontSize: '11px',
                letterSpacing: '1px',
                color: 'var(--text-muted)',
                border: '1px solid var(--border-card)',
                borderRadius: '2px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
          }}
        >
          {project.description}
        </p>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: 'var(--section-padding)',
        background: 'var(--bg-secondary)',
      }}
    >
      <div className="container">
        <p className="section-label reveal">Projects</p>

        <h2
          className="reveal"
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 300,
            letterSpacing: '-1px',
            marginBottom: '64px',
          }}
        >
          精选项目
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}
        >
          {PROJECTS.map((project) => (
            <div key={project.id} className="reveal">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
