# Personal Portfolio Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page personal portfolio website with 5 sections (Hero, About, Projects, Strengths, Contact) — dark minimalist aesthetic, PC-only.

**Architecture:** React 19 + Vite, single CSS file with custom properties for theming, 6 components (Navbar + 5 sections), all visuals CSS-generated (no external images/fonts), CSS-only Ken Burns zoom effect.

**Tech Stack:** React 19, Vite 6, plain CSS (no UI library, no Tailwind, no external fonts)

## Global Constraints
- Background: `#000000`, Text: `#FAFAFA`, Accent: `#3B82F6` (sparingly)
- Typography: `-apple-system, "Helvetica Neue", sans-serif`
- Max-width container: `1700px`
- PC only (no mobile responsive)
- No external images — all visuals CSS/SVG generated
- No UI library, no CDN dependencies
- Smooth scroll via CSS `scroll-behavior: smooth`

---

## File Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css              # Global styles, CSS custom properties, resets
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── StrengthsSection.jsx
│   │   └── ContactSection.jsx
```

Each component is self-contained in one `.jsx` file. All styles live in `index.css` organized by section via CSS comments — keeps the project small and avoids fragmented style files for a single page.

---

### Task 1: Scaffold Vite + React Project

**Files:**
- Create: `portfolio/` (entire project scaffold)

- [ ] **Step 1: Create project with Vite**

```bash
cd "d:/WPS/我的简历/个人作品集"
npm create vite@latest portfolio -- --template react
```

- [ ] **Step 2: Install dependencies**

```bash
cd "d:/WPS/我的简历/个人作品集/portfolio"
npm install
```

- [ ] **Step 3: Clean boilerplate**

Remove default Vite boilerplate files:
```bash
rm -f src/App.css src/assets/react.svg public/vite.svg
```

- [ ] **Step 4: Verify scaffold runs**

```bash
npm run dev
```

Expected: Vite dev server starts, blank React app visible at `http://localhost:5173`. Kill server after confirming.

- [ ] **Step 5: Commit**

```bash
cd "d:/WPS/我的简历/个人作品集/portfolio"
git init
git add -A
git commit -m "feat: scaffold Vite + React project"
```

---

### Task 2: Global CSS — Design Tokens & Base Styles

**Files:**
- Create: `src/index.css`
- Modify: `src/main.jsx` (update CSS import)

**Interfaces:**
- Produces: CSS custom properties consumed by all components, base element resets, scroll behavior, Ken Burns keyframes, `.container` utility class

- [ ] **Step 1: Write global CSS**

Create `src/index.css` with the complete global stylesheet:

```css
/* ===== CSS Custom Properties ===== */
:root {
  --bg-primary: #000000;
  --bg-secondary: #0a0a0a;
  --bg-card: #0f0f0f;
  --text-primary: #fafafa;
  --text-secondary: #a0a0a0;
  --text-muted: #606060;
  --accent: #3b82f6;
  --accent-dim: rgba(59, 130, 246, 0.15);
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-card: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(59, 130, 246, 0.4);
  --glass-bg: rgba(255, 255, 255, 0.02);
  --container-max: 1700px;
  --section-padding: 120px 64px;
  --transition-fast: 200ms ease;
  --transition-slow: 600ms ease;
}

/* ===== Reset ===== */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: var(--bg-primary);
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
  color: inherit;
}

ul, ol {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
}

/* ===== Utility Classes ===== */
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 64px;
}

.section-label {
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 24px;
}

/* ===== Ken Burns Keyframes ===== */
@keyframes kenBurns {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
}

/* ===== Fade In Up (scroll reveal) ===== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

- [ ] **Step 2: Update main.jsx to import new CSS**

Edit `src/main.jsx`:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 3: Commit**

```bash
git add src/index.css src/main.jsx
git commit -m "feat: add global CSS with design tokens and base styles"
```

---

### Task 3: App Shell + Navbar Component

**Files:**
- Create: `src/components/Navbar.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Produces: `Navbar` component (fixed top, transparent→dark on scroll), `App` shell with section IDs and IntersectionObserver for scroll reveal

- [ ] **Step 1: Write Navbar component**

Create `src/components/Navbar.jsx`:

```jsx
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
```

- [ ] **Step 2: Write App shell**

Replace `src/App.jsx`:

```jsx
import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import StrengthsSection from './components/StrengthsSection'
import ContactSection from './components/ContactSection'

export default function App() {
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <StrengthsSection />
        <ContactSection />
      </main>
    </>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.jsx src/App.jsx
git commit -m "feat: add App shell with Navbar and scroll reveal observer"
```

---

### Task 4: HeroSection — Fullscreen with Ken Burns

**Files:**
- Create: `src/components/HeroSection.jsx`

**Interfaces:**
- Consumes: CSS custom properties, `.container`, `.reveal`, `@keyframes kenBurns` from `index.css`
- Produces: `<HeroSection>` — fullscreen 100vh with CSS-generated abstract dark background, Ken Burns zoom, name, subtitle, CTA ghost button

- [ ] **Step 1: Write HeroSection component**

Create `src/components/HeroSection.jsx`:

```jsx
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
```

- [ ] **Step 2: Verify section renders**

```bash
npm run dev
```

Expected: Dev server starts. At `http://localhost:5173`, see fullscreen black Hero with name "邹贤杰", subtitle, ghost CTA button, and subtle blue gradient Ken Burns background animating slowly. Kill server after confirming.

- [ ] **Step 3: Commit**

```bash
git add src/components/HeroSection.jsx
git commit -m "feat: add Hero section with Ken Burns background"
```

---

### Task 5: AboutSection — Data Anchors + Education

**Files:**
- Create: `src/components/AboutSection.jsx`

**Interfaces:**
- Consumes: CSS custom properties, `.container`, `.reveal`, `.section-label` from `index.css`
- Produces: `<AboutSection>` — name/description, 3 data anchors (large numerals), contact info row, minimal education timeline

- [ ] **Step 1: Write AboutSection component**

Create `src/components/AboutSection.jsx`:

```jsx
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
```

- [ ] **Step 2: Verify section renders**

```bash
npm run dev
```

Expected: Below Hero, see About section with name + bio, 3 large data numbers, contact icons, and education timeline. Kill server after confirming.

- [ ] **Step 3: Commit**

```bash
git add src/components/AboutSection.jsx
git commit -m "feat: add About section with data anchors and education timeline"
```

---

### Task 6: ProjectsSection — Three Project Cards

**Files:**
- Create: `src/components/ProjectsSection.jsx`

**Interfaces:**
- Consumes: CSS custom properties, `.container`, `.reveal`, `.section-label` from `index.css`
- Produces: `<ProjectsSection>` — 3 cards with project name, tech stack tags, description, dark gradient placeholder

- [ ] **Step 1: Write ProjectsSection component**

Create `src/components/ProjectsSection.jsx`:

```jsx
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
```

- [ ] **Step 2: Verify section renders**

```bash
npm run dev
```

Expected: Projects section with 3 cards in a row, each with dark placeholder image, project letter, tags, and description. Hover triggers lift + blue border glow. Kill server after confirming.

- [ ] **Step 3: Commit**

```bash
git add src/components/ProjectsSection.jsx
git commit -m "feat: add Projects section with 3 project cards"
```

---

### Task 7: StrengthsSection — Skill Card Grid

**Files:**
- Create: `src/components/StrengthsSection.jsx`

**Interfaces:**
- Consumes: CSS custom properties, `.container`, `.reveal`, `.section-label` from `index.css`
- Produces: `<StrengthsSection>` — 6 skill cards in 3-column grid with SVG icons

- [ ] **Step 1: Write StrengthsSection component**

Create `src/components/StrengthsSection.jsx`:

```jsx
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
```

- [ ] **Step 2: Verify section renders**

```bash
npm run dev
```

Expected: Strengths section with 6 skill cards in a 3×2 grid with 1px borders (table-like), SVG icons in accent blue, hover highlights. Kill server after confirming.

- [ ] **Step 3: Commit**

```bash
git add src/components/StrengthsSection.jsx
git commit -m "feat: add Strengths section with 6 skill cards"
```

---

### Task 8: ContactSection — Fullscreen Closer

**Files:**
- Create: `src/components/ContactSection.jsx`

**Interfaces:**
- Consumes: CSS custom properties, `.container`, `.reveal` from `index.css`
- Produces: `<ContactSection>` — fullscreen 100vh closer with large email, phone, and links

- [ ] **Step 1: Write ContactSection component**

Create `src/components/ContactSection.jsx`:

```jsx
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
```

- [ ] **Step 2: Verify section renders**

```bash
npm run dev
```

Expected: Fullscreen Contact section with centered "保持联系" heading, large email link, phone, placeholders for blog/location, and copyright footer. Kill server after confirming.

- [ ] **Step 3: Commit**

```bash
git add src/components/ContactSection.jsx
git commit -m "feat: add Contact section fullscreen closer"
```

---

### Task 9: Final Integration — Verify & Polish

**Files:**
- Verify: `src/App.jsx`, all components, `src/index.css`

- [ ] **Step 1: Run full dev preview**

```bash
cd "d:/WPS/我的简历/个人作品集/portfolio"
npm run dev
```

- [ ] **Step 2: Manual verification checklist**

Open `http://localhost:5173` and verify:
1. Navbar: transparent at top, dark + blur after scroll past 60px; anchor links scroll to sections
2. Hero: Ken Burns background animating; name "邹贤杰" large and prominent; ghost CTA button
3. About: 3 data numbers visible; contact icons row; education timeline
4. Projects: 3 cards horizontal; hover lift + blue border; tags and descriptions correct
5. Strengths: 6 cards in 3×2 grid; accent blue icons; hover background change
6. Contact: fullscreen; email prominent; footer copyright
7. Scroll reveal: sections animate in on scroll
8. Overall: consistent dark theme, max-width 1700px contained

- [ ] **Step 3: Fix any visual issues discovered**

If any section spacing, color, or behavior is off, adjust inline styles in the relevant component.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: final integration polish for portfolio v1"
```

---

## Post-Implementation Notes
- To deploy: `npm run build` → serve `dist/` via any static host
- To replace the Ken Burns background with a real image later: swap the `background` style in HeroSection for `background-image: url(...)` while keeping the animation container
- To add real project screenshots: replace the letter placeholder div in ProjectCard with `<img>` tags
