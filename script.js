* {
  box-sizing: border-box;
}

:root {
  --bg: #f3f6fb;
  --bg-strong: #eaf1fa;
  --card: #ffffff;
  --card-alt: #f9fbff;
  --text: #14213d;
  --muted: #4f5d75;
  --primary: #1f6feb;
  --primary-dark: #1149ab;
  --secondary: #1fb6c9;
  --border: rgba(20, 33, 61, 0.08);
  --shadow: 0 18px 40px rgba(32, 64, 108, 0.12);
  --danger: #d65b5b;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, var(--bg) 0%, #edf3fa 100%);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 96px 0;
}

.alt-section {
  background: rgba(31, 111, 235, 0.02);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.section-heading {
  margin-bottom: 34px;
  max-width: 700px;
}

.eyebrow {
  margin: 0 0 12px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 12px;
  font-weight: 800;
  color: var(--primary);
}

h1, h2, h3, p {
  margin-top: 0;
}

h1 {
  font-size: clamp(2.5rem, 4vw, 4.2rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
  margin-bottom: 20px;
}

h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.15;
  letter-spacing: -0.05em;
}

h3 {
  font-size: 1.22rem;
  margin-bottom: 8px;
}

p {
  color: var(--muted);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: -0.04em;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  box-shadow: 0 10px 22px rgba(31, 111, 235, 0.24);
}

.site-nav {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
  font-size: 0.92rem;
  color: var(--muted);
}

.site-nav a {
  transition: color 0.25s ease;
}

.site-nav a:hover,
.site-nav a:focus-visible {
  color: var(--text);
}

.hero {
  padding: 78px 0 74px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.18fr 0.82fr;
  align-items: center;
  gap: 52px;
}

.hero-copy {
  max-width: 680px;
}

h1 span {
  color: var(--primary-dark);
}

.lead {
  font-size: 1.07rem;
  max-width: 620px;
  margin-bottom: 28px;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 26px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 14px 22px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  box-shadow: 0 16px 28px rgba(31, 111, 235, 0.26);
}

.btn-secondary {
  background: white;
  border: 1px solid var(--border);
  color: var(--text);
}

.contact-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.contact-pills a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.72);
  color: var(--text);
  font-weight: 600;
  font-size: 0.94rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.portrait-card {
  width: min(100%, 460px);
  padding: 22px;
  border-radius: 30px;
  background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(237,243,250,0.96));
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.portrait-frame {
  position: relative;
  overflow: hidden;
  border-radius: 26px;
  background: linear-gradient(135deg, #dfeaf9 0%, #eef4fb 100%);
  border: 1px solid rgba(20,33,61,0.06);
  min-height: 470px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.portrait-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.snapshot-box {
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  text-align: center;
}

.snapshot-box strong {
  font-size: 1.4rem;
  color: var(--text);
}

.snapshot-box span {
  color: var(--muted);
  font-size: 0.95rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 30px;
  align-items: start;
}

.about-text p {
  font-size: 1.04rem;
  margin-bottom: 20px;
}

.highlight-panel {
  display: grid;
  gap: 18px;
}

.mini-stat {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 18px 18px;
  box-shadow: 0 8px 18px rgba(20, 33, 61, 0.03);
}

.mini-stat strong {
  display: block;
  color: var(--text);
  font-size: 1.05rem;
  margin-bottom: 6px;
}

.mini-stat span {
  color: var(--muted);
}

.skills-grid,
.projects-grid,
.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.skill-card,
.project-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 24px;
  box-shadow: 0 10px 22px rgba(20, 33, 61, 0.03);
}

.skill-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
  color: var(--muted);
}

.skill-card li::before {
  content: "•";
  color: var(--primary);
  margin-right: 8px;
}

.project-card {
  display: flex;
  flex-direction: column;
}

.project-tag {
  align-self: flex-start;
  display: inline-block;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(31, 111, 235, 0.08);
  border: 1px solid rgba(31, 111, 235, 0.12);
  color: var(--primary);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: 18px;
}

.tech-stack span {
  background: #f3f7ff;
  color: var(--text);
  border: 1px solid rgba(31, 111, 235, 0.08);
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.74rem;
  font-weight: 600;
}

.timeline {
  display: grid;
  gap: 18px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 16px;
  align-items: start;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 20px 20px;
  box-shadow: 0 8px 18px rgba(20, 33, 61, 0.03);
}

.year {
  display: inline-block;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(31, 111, 235, 0.08);
  border: 1px solid rgba(31, 111, 235, 0.12);
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 800;
}

.experience-list {
  margin: 12px 0 0;
  padding-left: 18px;
  color: var(--muted);
  display: grid;
  gap: 7px;
}

.cert-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.cert-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 110px;
  text-align: center;
  padding: 18px 16px;
  border-radius: 20px;
  background: var(--card);
  border: 1px solid var(--border);
  font-weight: 700;
  color: var(--text);
}

.contact-card {
  display: grid;
  gap: 14px;
  max-width: 760px;
  margin: 0 auto;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 28px 26px;
  text-align: center;
  box-shadow: 0 14px 28px rgba(20, 33, 61, 0.04);
}

.contact-card a,
.contact-card p {
  font-size: 1.05rem;
  color: var(--text);
}

.contact-card a:hover,
.contact-card a:focus-visible {
  color: var(--primary);
}

.site-footer {
  border-top: 1px solid var(--border);
  background: rgba(255,255,255,0.75);
  padding: 22px 0;
}

.footer-wrap {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
}

@media (max-width: 900px) {
  .hero-grid,
  .about-grid,
  .skills-grid,
  .projects-grid,
  .cert-grid {
    grid-template-columns: 1fr;
  }

  .site-nav {
    position: absolute;
    top: 76px;
    left: 16px;
    right: 16px;
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 18px 16px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
  }

  .site-nav.open {
    display: flex;
  }

  .nav-toggle {
    display: flex;
  }
}

@media (max-width: 620px) {
  .hero {
    padding-top: 68px;
  }

  .timeline-item {
    grid-template-columns: 1fr;
  }

  .cta-row {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .contact-pills {
    flex-direction: column;
    align-items: stretch;
  }

  .contact-pills a {
    width: 100%;
  }
}
