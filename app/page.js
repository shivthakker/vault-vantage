import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import Logo from "@/components/Logo";

const HERO_IMG = "/hero-crx.jpg";
const UK_IMG =
  "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=80";

const SERVICES = [
  {
    title: "Vehicle Sourcing",
    body: "Direct access to the UK's most significant collector car market — private collections, specialist dealers, marque specialists, and estate sales that never reach the open market.",
  },
  {
    title: "Acquisition Advisory",
    body: "Independent market valuations, provenance research, and mechanical assessments. We negotiate on your behalf so you acquire with complete confidence and at the right price.",
  },
  {
    title: "UK-to-Singapore Import",
    body: "End-to-end shipping, Singapore customs clearance, LTA registration, COE guidance, and full documentation management. We handle every step of the import journey.",
  },
  {
    title: "Brokerage & Resale",
    body: "When the time comes to sell, we connect your vehicle with serious buyers across our global collector network — achieving the best outcome with absolute discretion.",
  },
  {
    title: "Driving Experiences",
    body: "Curated road trips, track days, and private rally events for collectors who wish to use their cars as intended.",
  },
  {
    title: "Collector Events",
    body: "Private gatherings, exclusive viewings, and automotive lifestyle events for our community of discerning collectors.",
  },
];

const IMPORT_FEATURES = [
  {
    title: "UK Export Documentation",
    body: "V5C management, NOVA declarations, and export certificates prepared and verified before the vehicle leaves the UK.",
  },
  {
    title: "International Shipping",
    body: "Container or RoRo shipping via specialist automotive freight forwarders, with full marine insurance coverage door-to-door.",
  },
  {
    title: "Singapore Customs Clearance",
    body: "Full customs clearance including duty and GST management, handled by our Singapore-based logistics partners.",
  },
  {
    title: "LTA Registration",
    body: "Vehicle registration with the Land Transport Authority, including IU installation and all required inspections.",
  },
  {
    title: "COE Guidance",
    body: "Expert advice on Certificate of Entitlement categories, bidding strategy, and timing to minimise your total cost of acquisition.",
  },
  {
    title: "End-to-End Tracking",
    body: "A single point of contact throughout the entire process, with regular updates from UK purchase to Singapore delivery.",
  },
];

const JOURNEY = [
  {
    n: "01",
    title: "Private Consultation",
    body: "A confidential conversation to understand the vehicle you are seeking, your budget, and your timeline.",
  },
  {
    n: "02",
    title: "UK Market Search",
    body: "We leverage our network of dealers, specialists, and private contacts to identify the right car at the right price.",
  },
  {
    n: "03",
    title: "Inspection & Purchase",
    body: "Independent inspection, negotiation, and purchase management — all handled on your behalf in the UK.",
  },
  {
    n: "04",
    title: "Import to Singapore",
    body: "Complete logistics, customs, and registration managed end-to-end. Your car arrives ready to drive.",
  },
];

const FUTURE = [
  {
    title: "Storage & Vaulting",
    body: "Climate-controlled, secure long-term storage with preservation management and regular condition reporting.",
  },
  {
    title: "Driving Experiences",
    body: "Curated road trips, track days, and private rally events for collectors who wish to use their cars as intended.",
  },
  {
    title: "Collector Events",
    body: "Private gatherings, exclusive viewings, and automotive lifestyle events for our community of discerning collectors.",
  },
];

const STATS = [
  { value: "UK", label: "Primary Sourcing Market" },
  { value: "SG", label: "Primary Destination" },
  { value: "100%", label: "End-to-End Management" },
  { value: "Private", label: "Discreet Advisory" },
];

export default function Home() {
  return (
    <>
      <span id="top" />
      <Header />

      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="hero-overlay" />
        <div className="hero-overlay-side" />
        <div className="container hero-content">
          <div className="hero-eyebrow">
            <span className="gold-rule-solid" />
            <span className="section-label">Bespoke Automotive Concierge</span>
            <span className="hero-route">UK · Singapore</span>
          </div>
          <h1 className="display-heading hero-title">
            Your Dream Car,
            <br />
            <span className="serif-accent">Sourced &amp; Delivered.</span>
          </h1>
          <p className="lead hero-lead">
            We source, acquire, and import the world's most desirable collector
            vehicles from the UK — managing every detail from private sale to your
            Singapore driveway.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-gold">
              Private Enquiry
            </a>
            <a href="#services" className="btn-outline">
              Our Services
            </a>
          </div>
        </div>
        <a href="#about" className="scroll-cue" aria-label="Scroll to content">
          <span>Scroll</span>
          <span className="scroll-line" />
        </a>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="section about">
        <div className="container about-grid">
          <Reveal>
            <p className="section-label">About Vault &amp; Vantage</p>
            <div className="gold-rule-solid" style={{ margin: "1.5rem 0 2rem" }} />
            <h2 className="display-heading about-title">
              The Bridge Between
              <br />
              <span className="serif-accent">London &amp; Singapore</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead" style={{ marginBottom: "1.5rem" }}>
              Vault &amp; Vantage was built for a specific purpose: to give
              Singapore's collectors and enthusiasts direct, trusted access to the
              UK's exceptional collector car market — the deepest and most varied in
              the world.
            </p>
            <p className="lead">
              We handle everything — from identifying the right car through our UK
              network, to managing the purchase, export, shipping, and full
              Singapore registration. You receive a single point of contact and
              complete transparency throughout.
            </p>
            <div className="stats">
              {STATS.map((s) => (
                <div key={s.label} className="stat">
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section id="services" className="section services">
        <div className="container">
          <Reveal className="section-head">
            <p className="section-label">What We Do</p>
            <div className="gold-rule-solid" style={{ margin: "1rem 0 1.75rem" }} />
            <h2 className="display-heading section-title">
              Sourcing, Advisory{" "}
              <span className="serif-accent">&amp; Import — End to End</span>
            </h2>
          </Reveal>
          <div className="card-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 100}>
                <article className="service-card svc">
                  <span className="svc-index">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-body">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- UK SOURCING ---------------- */}
      <section className="section uk">
        <div className="container uk-grid">
          <Reveal className="uk-media">
            <img src={UK_IMG} alt="A classic British collector car" />
            <div className="uk-media-frame" />
          </Reveal>
          <Reveal delay={120}>
            <p className="section-label">UK Specialist Sourcing</p>
            <div className="gold-rule-solid" style={{ margin: "1rem 0 1.75rem" }} />
            <h2 className="display-heading uk-title">
              Best of <span className="serif-accent">Britain</span>
            </h2>
            <p className="lead" style={{ marginBottom: "1.5rem" }}>
              The UK remains the world's most significant market for classic and
              collector vehicles — home to marque specialists, private estates, and
              auction houses that hold the finest examples of British and European
              automotive history.
            </p>
            <p className="lead">
              Our network gives you access to cars that are never publicly listed —
              sourced through trusted relationships built over years in the trade.
              Every vehicle is independently inspected and verified before we
              recommend it to you.
            </p>
            <div className="tag-row">
              <span className="tag">Private Collections</span>
              <span className="tag">Marque Specialists</span>
              <span className="tag">Auction Access</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SINGAPORE IMPORT ---------------- */}
      <section id="import" className="section import">
        <div className="container">
          <Reveal className="section-head">
            <p className="section-label">Singapore Import Service</p>
            <div className="gold-rule-solid" style={{ margin: "1rem 0 1.75rem" }} />
            <h2 className="display-heading section-title">
              Delivered to <span className="serif-accent">Your Door</span>
            </h2>
            <p className="lead section-intro">
              Importing a collector vehicle from the UK to Singapore involves
              navigating customs regulations, LTA requirements, COE considerations,
              and specialist logistics. We manage every element of this process so
              you can focus on the car — not the paperwork.
            </p>
          </Reveal>
          <div className="card-grid">
            {IMPORT_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 100}>
                <article className="service-card svc">
                  <h3 className="svc-title">{f.title}</h3>
                  <p className="svc-body">{f.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- IMPORT JOURNEY ---------------- */}
      <section className="section journey">
        <div className="container">
          <Reveal className="section-head center">
            <p className="section-label">The Import Journey</p>
            <div
              className="gold-rule-solid"
              style={{ margin: "1rem auto 1.75rem" }}
            />
            <h2 className="display-heading section-title">
              Fully <span className="serif-accent">Managed Process</span>
            </h2>
          </Reveal>
          <div className="journey-grid">
            {JOURNEY.map((j, i) => (
              <Reveal key={j.n} delay={i * 100}>
                <div className="journey-step">
                  <span className="journey-num">{j.n}</span>
                  <h3 className="journey-title">{j.title}</h3>
                  <p className="journey-body">{j.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="center" style={{ marginTop: "3.5rem" }}>
            <a href="#contact" className="btn-gold">
              Enquire About Importing to Singapore
            </a>
          </Reveal>
        </div>
      </section>

      {/* ---------------- FUTURE SERVICES ---------------- */}
      <section className="section future">
        <div className="container">
          <Reveal className="section-head center">
            <p className="section-label">Expanding Our Services</p>
            <div
              className="gold-rule-solid"
              style={{ margin: "1rem auto 1.75rem" }}
            />
            <h2 className="display-heading section-title">
              The Full Collection{" "}
              <span className="serif-accent">Experience — Coming Soon</span>
            </h2>
            <p className="lead section-intro">
              Our vision extends beyond import and brokerage. We are building a
              complete concierge ecosystem for Singapore's collector community —
              launching progressively as we grow.
            </p>
          </Reveal>
          <div className="future-grid">
            {FUTURE.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <article className="future-card">
                  <span className="soon-badge">Coming Soon</span>
                  <h3 className="svc-title">{f.title}</h3>
                  <p className="svc-body">{f.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="center" style={{ marginTop: "3rem" }}>
            <p className="lead" style={{ marginBottom: "1.5rem" }}>
              Register your interest and be among the first to access these services
              when they launch.
            </p>
            <a href="#contact" className="btn-outline">
              Register interest →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="section contact">
        <div className="container contact-grid">
          <Reveal>
            <p className="section-label">Get in Touch</p>
            <div className="gold-rule-solid" style={{ margin: "1rem 0 1.75rem" }} />
            <h2 className="display-heading contact-title">
              Begin a <span className="serif-accent">Private Conversation</span>
            </h2>
            <p className="lead" style={{ marginBottom: "2.5rem" }}>
              Whether you have a specific car in mind or simply want to explore what
              is available, we welcome an initial conversation. All enquiries are
              handled with complete discretion.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="section-label">General Enquiries</span>
                <a href="mailto:enquiries@vaultandvantage.com" className="contact-link">
                  enquiries@vaultandvantage.com
                </a>
              </div>
              <div className="contact-item">
                <span className="section-label">Singapore Import Advisory</span>
                <a href="mailto:singapore@vaultandvantage.com" className="contact-link">
                  singapore@vaultandvantage.com
                </a>
              </div>
              <div className="contact-item">
                <span className="section-label">Based in Singapore</span>
                <span className="contact-text">By appointment only</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="form-wrap">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="brand" style={{ marginBottom: "1.25rem" }}>
              <Logo size={44} />
              <span className="brand-name">Vault &amp; Vantage</span>
            </div>
            <p className="footer-blurb">
              Bespoke automotive sourcing, advisory, and import services. Connecting
              Singapore's collectors with the finest vehicles from the United
              Kingdom.
            </p>
          </div>

          <div className="footer-col">
            <span className="section-label">Navigate</span>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#import">Singapore Import</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-col">
            <span className="section-label">Services</span>
            <a href="#services">Vehicle Sourcing</a>
            <a href="#services">Acquisition Advisory</a>
            <a href="#import">UK–Singapore Import</a>
            <a href="#services">Brokerage &amp; Resale</a>
          </div>

          <div className="footer-col">
            <span className="section-label">Contact</span>
            <a href="mailto:enquiries@vaultandvantage.com">enquiries@vaultandvantage.com</a>
            <span>Based in Singapore</span>
            <span>By appointment only</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2025 Vault &amp; Vantage. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#top">Privacy Policy</a>
            <a href="#top">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
}
