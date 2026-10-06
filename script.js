* {
  box-sizing: border-box;
}

:root {
  --bg: #07111f;
  --bg-soft: #0d1b2a;
  --panel: rgba(18, 30, 45, 0.9);
  --panel-strong: #12263b;
  --card: #101c2b;
  --card-alt: #0b1521;
  --text: #eaf2ff;
  --muted: #b8c6d8;
  --primary: #62d0ff;
  --primary-strong: #3aa8ff;
  --accent: #7ef0c2;
  --border: rgba(255, 255, 255, 0.08);
  --shadow: 0 20px 45px rgba(0, 0, 0, 0.2);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #07111f 0%, #0b1628 100%);
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
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 96px 0;
}

.alt-section {
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.section-heading {
  margin-bottom: 40px;
  max-width: 700px;
}

.eyebrow {
  margin: 0 0 12px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 12px;
  font-weight: 700;
  color: var(--primary);
}

h1, h2, h3, p {
  margin-top: 0;
}

h1 {
  font-size: clamp(2.7rem, 5vw, 4.4rem);
  line-height: 1.08;
  margin-bottom: 18px;
  letter-spacing: -0.06em;
}

h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
  margin-bottom: 0;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
}

p {
  color: var(--muted);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
  background: rgba(7, 17, 31, 0.75);
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
  font-weight: 700;
  letter-spacing: -0.04em;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #04101b;
  font-weight: 800;
}

.site-nav {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  font-size: 0.95rem;
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
  padding: 90px 0 70px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 50px;
}

.eyebrow {
  margin-bottom: 18px;
}

.lead {
  font-size: 1.08rem;
  max-width: 610px;
  margin-bottom: 30px;
}

span {
  color: var(--primary);
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-bottom: 32px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 14px 24px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.btn:hover,
.btn:focus-visible {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #061521;
  box-shadow: 0 12px 30px rgba(98, 208, 255, 0.32);
}

.btn-secondary {
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
}

.hero-stats {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
}

.hero-stats li {
  min-width: 110px;
}

.hero-stats strong {
  display: block;
  font-size: 1.9rem;
  letter-spacing: -0.05em;
  color: var(--text);
}

.hero-stats span {
  font-size: 0.8rem;
  color: var(--muted);
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.profile-card {
  width: min(100%, 430px);
  background: linear-gradient(180deg, rgba(15, 26, 39, 1), rgba(10, 18, 28, 1));
  border: 1px solid var(--border);
  border-radius: 26px;
  box-shadow: var(--shadow);
  padding: 28px;
}

.profile-badge {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(98, 208, 255, 0.12);
  border: 1px solid rgba(98, 208, 255, 0.25);
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 700;
}

.avatar-wrap {
  margin: 20px 0 18px;
  display: flex;
  justify-content: center;
}

.avatar {
  width: 165px;
  height: 165px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.08em;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #061521;
  box-shadow: 0 18px 40px rgba(98, 208, 255, 0.24);
}

.profile-card h2 {
  text-align: center;
  margin-bottom: 8px;
}

.profile-card p {
  text-align: center;
  margin-bottom: 22px;
}

.mini-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.mini-grid div {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 14px 12px;
}

.mini-grid span {
  display: block;
  margin-bottom: 6px;
  color: var(--muted);
  font-size: 0.75rem;
}

.mini-grid strong {
  color: var(--text);
  font-size: 0.92rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 30px;
}

.about-text p {
  font-size: 1.05rem;
  margin-bottom: 20px;
}

.about-points {
  display: grid;
  gap: 18px;
}

.point-card {
  display: flex;
  gap: 16px;
  align-items: start;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px 18px;
}

.point-icon {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: rgba(126, 240, 194, 0.12);
  border: 1px solid rgba(126, 240, 194, 0.25);
  color: var(--accent);
  font-weight: 800;
}

.skills-grid,
.projects-grid,
.cert-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.skill-card,
.project-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 24px;
}

.skill-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
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
  background: rgba(98, 208, 255, 0.1);
  border: 1px solid rgba(98, 208, 255, 0.2);
  color: var(--primary);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
  padding-top: 18px;
}

.tech-stack span {
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 7px 10px;
  font-size: 0.76rem;
}

.timeline {
  display: grid;
  gap: 18px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 170px 1fr;
  gap: 16px;
  align-items: start;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 22px 20px;
}

.year {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(98, 208, 255, 0.08);
  border: 1px solid rgba(98, 208, 255, 0.18);
  color: var(--primary);
  font-weight: 700;
  font-size: 0.82rem;
  width: fit-content;
}

.cert-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.cert-item {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  text-align: center;
  padding: 20px 18px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  font-weight: 600;
  color: var(--text);
}

.contact-card {
  display: grid;
  gap: 16px;
  max-width: 760px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: 26px;
  text-align: center;
}

.contact-card a {
  font-size: 1.08rem;
  color: var(--text);
}

.contact-card a:hover,
.contact-card a:focus-visible {
  color: var(--primary);
}

.site-footer {
  border-top: 1px solid var(--border);
  background: rgba(5, 12, 20, 0.8);
  padding: 24px 0;
}

.footer-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
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
    background: rgba(10, 16, 24, 0.98);
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
    padding-top: 70px;
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
}
