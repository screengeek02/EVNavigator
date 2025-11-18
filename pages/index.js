import Head from 'next/head';
import styles from '@/styles/Home.module.css';

const metrics = [
  {
    label: 'Charging Stops Optimized',
    value: '12k+',
  },
  {
    label: 'Real-time Data Sources',
    value: '48',
  },
  {
    label: 'Route Time Saved',
    value: '32%',
  },
  {
    label: 'EV Models Supported',
    value: '250+',
  },
];

const features = [
  {
    icon: '⚡',
    title: 'Dynamic Route Planning',
    description:
      'Blend charger availability, elevation, weather and live traffic so drivers reach their destination faster and with confidence.',
  },
  {
    icon: '🛰️',
    title: 'Live Charger Telemetry',
    description:
      'Tap directly into partner networks for connector status, pricing and queue length before you even leave the driveway.',
  },
  {
    icon: '🌤️',
    title: 'Predictive Energy Modeling',
    description:
      'Anticipate battery drain with machine learning models tuned to your EV, driving style and environmental conditions.',
  },
  {
    icon: '🤝',
    title: 'Fleet Collaboration Suite',
    description:
      'Share preferred routes, monitor drivers, automate reimbursements and sync with the tools your operations team already trusts.',
  },
];

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>EVNavigator | Smarter Electric Road Trips</title>
        <meta
          name="description"
          content="Plan confident electric road trips with live charger availability, predictive energy usage and collaborative fleet tools."
        />
      </Head>

      <nav className={styles.navbar}>
        <a className={styles.logo} href="#home">
          <span className={styles.logoBadge}>EV</span>
          EVNavigator
        </a>
        <div className={styles.navLinks}>
          <a href="#planner">Planner</a>
          <a href="#features">Features</a>
          <a href="#stories">Stories</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className={styles.hero} id="home">
        <div className={styles.heroContent}>
          <div className={styles.badgeRow}>
            <span role="img" aria-label="spark">
              ✨
            </span>
            Plan electric adventures with confidence
          </div>
          <h1 className={styles.title}>
            A <span>smarter way</span> to map your next electric journey
          </h1>
          <p className={styles.subtitle}>
            EVNavigator pairs real-time charger data with predictive energy insights to surface the fastest, safest and most efficient
            routes—whether you are traveling solo or orchestrating an entire fleet.
          </p>
          <div className={styles.ctaRow}>
            <button className={styles.primaryButton} type="button">
              Launch live planner
            </button>
            <button className={styles.secondaryButton} type="button">
              Watch product tour
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className={styles.metrics}>
            {metrics.map((metric) => (
              <div key={metric.label} className={styles.metricCard}>
                <div className={styles.metricValue}>{metric.value}</div>
                <div className={styles.metricLabel}>{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.glassCard}>
            <h2>Route preview</h2>
            <p>Seattle → Vancouver · 182 mi · 3h 48m</p>
            <div className={styles.mapPreview}>
              <picture>
                <source srcSet="/map-dark.svg" media="(prefers-color-scheme: dark)" />
                <img
                  className={styles.mapImage}
                  src="/map-light.svg"
                  alt="Preview of EVNavigator route interface"
                />
              </picture>
            </div>
            <div className={styles.routeDetails}>
              <div className={styles.routeRow}>
                <span className={styles.routeIcon}>⚡</span>
                <div>
                  <strong>Optimal charging</strong>
                  <div>2 planned stops · average queue &lt; 5 minutes</div>
                </div>
              </div>
              <div className={styles.routeRow}>
                <span className={styles.routeIcon}>🧭</span>
                <div>
                  <strong>Energy insights</strong>
                  <div>Arrive with 22% battery using eco profile</div>
                </div>
              </div>
              <div className={styles.routeRow}>
                <span className={styles.routeIcon}>🔔</span>
                <div>
                  <strong>Live notifications</strong>
                  <div>Instant reroute if congestion spikes past 15%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.planSection} id="planner">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Everything you need to keep moving</h2>
          <p className={styles.sectionSubtitle}>
            EVNavigator layers the essentials—planning, monitoring and collaboration—into one intuitive workspace that adapts to how your
            drivers travel.
          </p>
        </div>

        <div className={styles.featureGrid} id="features">
          {features.map((feature) => (
            <article key={feature.title} className={styles.featureCard}>
              <span className={styles.featureIcon} aria-hidden>
                {feature.icon}
              </span>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </article>
          ))}
        </div>

        <aside className={styles.testimonial} id="stories">
          <p className={styles.testimonialQuote}>
            “EVNavigator reduces the anxiety of road trips for our drivers. Real-time charger availability and proactive alerts make our
            logistics team feel like we finally have superpowers.”
          </p>
          <div className={styles.testimonialAuthor}>Maya Chen · Fleet Operations, Northwind Grocers</div>
        </aside>
      </section>

      <footer className={styles.footer} id="contact">
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <div className={styles.logo}>
              <span className={styles.logoBadge}>EV</span>
              EVNavigator
            </div>
            <p>Powering the transition to zero-emission mobility with intelligent planning and decision support.</p>
          </div>
          <div className={styles.footerColumn}>
            <div className={styles.footerTitle}>Product</div>
            <a className={styles.footerLink} href="#planner">
              Route planner
            </a>
            <a className={styles.footerLink} href="#features">
              Features
            </a>
            <a className={styles.footerLink} href="#stories">
              Customer stories
            </a>
          </div>
          <div className={styles.footerColumn}>
            <div className={styles.footerTitle}>Company</div>
            <a className={styles.footerLink} href="mailto:hello@evnavigator.io">
              hello@evnavigator.io
            </a>
            <a className={styles.footerLink} href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className={styles.footerLink} href="https://www.twitter.com" target="_blank" rel="noreferrer">
              Twitter / X
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
