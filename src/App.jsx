import {
  Sun,
  Phone,
  Mail,
  CheckCircle,
  Home,
  Building2,
  ShieldCheck,
  ClipboardCheck,
  Calendar,
  Sparkles,
  HelpCircle,
  User,
  MapPin,
  Briefcase,
} from "lucide-react";

export default function App() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          background: #f8fafc;
          color: #0f172a;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255,255,255,0.94);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #e2e8f0;
        }

        .nav {
          max-width: 1180px;
          margin: auto;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 22px;
          font-weight: 900;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 22px;
          border-radius: 999px;
          font-weight: 900;
          text-decoration: none;
          border: none;
          cursor: pointer;
        }

        .btn-yellow {
          background: #facc15;
          color: #0f172a;
          box-shadow: 0 10px 25px rgba(250,204,21,0.35);
        }

        .btn-dark {
          background: #0f172a;
          color: white;
        }

        .btn-white {
          background: white;
          color: #0f172a;
          border: 1px solid #cbd5e1;
        }

        .hero {
          background:
            radial-gradient(circle at top left, rgba(250,204,21,0.25), transparent 34%),
            linear-gradient(135deg, #eff6ff 0%, #ffffff 52%, #fff7ed 100%);
          padding: 74px 24px;
        }

        .hero-grid {
          max-width: 1180px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 44px;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          border: 1px solid #e2e8f0;
          color: #0369a1;
          padding: 10px 16px;
          border-radius: 999px;
          font-weight: 900;
          margin-bottom: 20px;
          box-shadow: 0 8px 20px rgba(15,23,42,0.06);
        }

        h1 {
          font-size: 58px;
          line-height: 1.02;
          margin: 0;
          letter-spacing: -2.5px;
          color: #0f172a;
        }

        h2 {
          font-size: 42px;
          line-height: 1.1;
          margin: 12px 0 14px;
          letter-spacing: -1.5px;
          color: #0f172a;
        }

        .hero-text {
          font-size: 20px;
          line-height: 1.65;
          color: #1e293b;
          max-width: 620px;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .urgency {
          margin-top: 12px;
          font-weight: 900;
          color: #0f172a;
        }

        .trust {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 22px;
          color: #334155;
          font-weight: 800;
        }

        .trust span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .hero-card {
          background: white;
          border-radius: 30px;
          padding: 14px;
          box-shadow: 0 25px 60px rgba(15,23,42,0.16);
        }

        .hero-img {
          width: 100%;
          height: 330px;
          object-fit: cover;
          border-radius: 22px;
          display: block;
        }

        .mini-form {
          margin-top: 14px;
          padding: 22px;
          border-radius: 22px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }

        .mini-form h3 {
          margin: 0 0 8px;
          font-size: 24px;
          color: #0f172a;
        }

        .mini-form p {
          margin: 0 0 16px;
          color: #334155;
          line-height: 1.5;
        }

        .form {
          display: grid;
          gap: 12px;
        }

        .form input,
        .form textarea {
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          border: 1px solid #cbd5e1;
          font-size: 15px;
          outline: none;
        }

        .form textarea {
          min-height: 95px;
          resize: vertical;
        }

        .section {
          padding: 76px 24px;
          background: white;
        }

        .section.alt {
          background: #f1f5f9;
        }

        .container {
          max-width: 1180px;
          margin: auto;
        }

        .center {
          text-align: center;
        }

        .label {
          color: #0284c7;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.4px;
          font-size: 13px;
        }

        .subtitle {
          color: #334155;
          font-weight: 500;
          font-size: 18px;
          line-height: 1.7;
          max-width: 760px;
        }

        .center .subtitle {
          margin: auto;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 38px;
        }

        .card {
          background: white;
          padding: 30px;
          border-radius: 26px;
          box-shadow: 0 14px 34px rgba(15,23,42,0.08);
          border: 1px solid #e2e8f0;
        }

        .icon-box {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          background: #e0f2fe;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0284c7;
          margin-bottom: 18px;
        }

        .card h3 {
          margin: 0 0 10px;
          font-size: 23px;
          color: #0f172a;
        }

        .card p {
          margin: 0;
          color: #334155;
          line-height: 1.65;
        }

        .results-grid {
          display: grid;
          grid-template-columns: 1fr;
          max-width: 850px;
          margin: 38px auto 0;
        }

        .result-card {
          background: white;
          padding: 16px;
          border-radius: 26px;
          box-shadow: 0 14px 34px rgba(15,23,42,0.08);
          border: 1px solid #e2e8f0;
        }

        .result-card img {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 18px;
          display: block;
        }

        .result-label {
          padding: 14px 6px 4px;
          font-size: 22px;
          font-weight: 900;
          color: #0f172a;
          text-align: center;
        }

        .dark {
          background: #0f172a;
          color: white;
        }

        .dark h2 {
          color: white;
        }

        .dark .subtitle {
          color: #cbd5e1;
        }

        .benefits {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 35px;
        }

        .benefit {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 18px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
        }

        .benefit svg {
          color: #22c55e;
          flex-shrink: 0;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 38px;
        }

        .step {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 26px;
          padding: 30px;
          box-shadow: 0 14px 34px rgba(15,23,42,0.08);
        }

        .step-number {
          width: 46px;
          height: 46px;
          background: #facc15;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .faq {
          display: grid;
          gap: 16px;
          margin-top: 34px;
        }

        .faq-item {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 10px 26px rgba(15,23,42,0.06);
        }

        .faq-item h3 {
          display: flex;
          gap: 10px;
          align-items: center;
          margin: 0 0 8px;
          font-size: 21px;
          color: #0f172a;
        }

        .faq-item p {
          margin: 0;
          color: #334155;
          line-height: 1.65;
        }

        .quote {
          background: linear-gradient(135deg, #facc15, #f59e0b);
        }

        .quote-box {
          background: white;
          border-radius: 32px;
          padding: 45px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
          align-items: center;
          box-shadow: 0 25px 60px rgba(15,23,42,0.18);
        }

        .contact-list {
          display: grid;
          gap: 14px;
          margin-top: 24px;
        }

        .contact-list a {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #0f172a;
          text-decoration: none;
          font-weight: 900;
          font-size: 18px;
        }

        .footer {
          background: #020617;
          color: #cbd5e1;
          text-align: center;
          padding: 28px 20px;
        }

        @media (max-width: 900px) {
          .hero-grid,
          .quote-box,
          .results-grid {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 42px;
          }

          h2 {
            font-size: 34px;
          }

          .cards,
          .benefits,
          .steps {
            grid-template-columns: 1fr;
          }

          .hero-img {
            height: 280px;
          }

          .nav {
            flex-direction: column;
            gap: 14px;
          }
        }
      `}</style>

      <header className="header">
        <div className="nav">
          <div className="logo">
            <Sun color="#facc15" size={32} />
            BrightView Solar Services
          </div>

          <a className="btn btn-dark" href="tel:6033938251">
            <Phone size={18} /> 603-393-8251
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-grid">
            <div>
              <div className="badge">
                <Sparkles size={18} />
                Solar Panel Cleaning Across New England
              </div>

              <h1>Protect Your Solar Investment</h1>

              <p className="hero-text">
                BrightView Solar Services removes pollen, dirt, sap, bird droppings,
                and outdoor buildup so your solar panels stay clean, sharp, and
                performing their best.
              </p>

              <div className="hero-actions">
                <a className="btn btn-yellow" href="sms:6033938251">
                  Text for Free Quote
                </a>

                <a className="btn btn-white" href="tel:6033938251">
                  Call Now
                </a>
              </div>

              <p className="urgency">
                Same-day quotes available — most responses in under 10 minutes
              </p>

              <div className="trust">
                <span><CheckCircle size={18} color="#22c55e" /> Fast quotes</span>
                <span><CheckCircle size={18} color="#22c55e" /> No harsh chemicals</span>
                <span><CheckCircle size={18} color="#22c55e" /> Residential & commercial</span>
              </div>
            </div>

            <div className="hero-card">
              <img
                className="hero-img"
                src="/solar-cleaning.jpg"
                alt="Solar panels being cleaned"
              />

              <div className="mini-form">
                <h3>Get a Free Quote</h3>
                <p>
                  Text your panel count, town, and roof photo. Most quotes start
                  in under 2 minutes.
                </p>

                <div className="form">
                  <input placeholder="Name" />
                  <input placeholder="Phone or email" />
                  <input placeholder="Town / service address" />
                  <input placeholder="Approx. number of panels" />
                  <a className="btn btn-dark" href="sms:6033938251">
                    Start Quote by Text
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container center">
            <div className="label">Services</div>
            <h2>Solar cleaning for homes and businesses</h2>
            <p className="subtitle">
              Keep your panels clean, presentable, and free from common New England buildup.
            </p>

            <div className="cards">
              <div className="card">
                <div className="icon-box"><Home size={30} /></div>
                <h3>Residential Cleaning</h3>
                <p>Safe cleaning for homes. Great for pollen, dust, tree sap, and bird droppings.</p>
              </div>

              <div className="card">
                <div className="icon-box"><Building2 size={30} /></div>
                <h3>Commercial Cleaning</h3>
                <p>Cleaning for businesses, warehouses, property managers, and rooftop systems.</p>
              </div>

              <div className="card">
                <div className="icon-box"><ShieldCheck size={30} /></div>
                <h3>Visual Checks</h3>
                <p>Basic visual checks for debris, blocked areas, nesting, or obvious panel issues.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container center">
            <div className="label">Results</div>
            <h2>See the Difference</h2>
            <p className="subtitle">
              Removing buildup can instantly improve the look of your panels and make your system look cared for.
            </p>

            <div className="results-grid">
              <div className="result-card">
                <img src="/before-after.jpg" alt="Before and after solar panel cleaning" />
                <div className="result-label">Before vs After Cleaning</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container center">
            <div className="label">Who this is for</div>
            <h2>If you have solar panels, this applies to you</h2>
            <p className="subtitle">
              BrightView Solar Services is built for residential and commercial solar owners who want a simple, reliable cleaning option.
            </p>

            <div className="cards">
              <div className="card">
                <div className="icon-box"><User size={30} /></div>
                <h3>Homeowners</h3>
                <p>Keep your home looking clean and protect the investment sitting on your roof.</p>
              </div>

              <div className="card">
                <div className="icon-box"><MapPin size={30} /></div>
                <h3>Property Managers</h3>
                <p>Maintain a clean, professional appearance for tenants, owners, and clients.</p>
              </div>

              <div className="card">
                <div className="icon-box"><Briefcase size={30} /></div>
                <h3>Businesses</h3>
                <p>Keep your commercial solar system looking sharp and well maintained.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section dark">
          <div className="container">
            <div className="label">Why it matters</div>
            <h2>Dirty panels can hurt curb appeal and performance</h2>
            <p className="subtitle">
              Solar panels sit outside all year. Dirt, pollen, sap, leaves, and bird droppings build up over time.
              Regular cleaning helps protect your investment and keeps your system looking professional.
            </p>

            <div className="benefits">
              <div className="benefit"><CheckCircle /> Panel-safe cleaning process</div>
              <div className="benefit"><CheckCircle /> Removes pollen, sap, and grime</div>
              <div className="benefit"><CheckCircle /> Residential systems</div>
              <div className="benefit"><CheckCircle /> Commercial systems</div>
              <div className="benefit"><CheckCircle /> New England service area</div>
              <div className="benefit"><CheckCircle /> Before-and-after photos available</div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container center">
            <div className="label">Simple process</div>
            <h2>How it works</h2>
            <p className="subtitle">
              Simple, fast, and easy. No complicated estimate process.
            </p>

            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <ClipboardCheck size={34} color="#0284c7" />
                <h3>Send panel count</h3>
                <p>Text your panel count, town, and a roof photo if you have one.</p>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <Calendar size={34} color="#0284c7" />
                <h3>Get your quote</h3>
                <p>We review access, roof pitch, and buildup to provide a simple quote.</p>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <Sparkles size={34} color="#0284c7" />
                <h3>Clean panels</h3>
                <p>We clean the panels and can provide before-and-after photos.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="label">FAQ</div>
            <h2>Common questions</h2>

            <div className="faq">
              <div className="faq-item">
                <h3><HelpCircle color="#0284c7" /> How much does it cost?</h3>
                <p>Pricing is based on panel count, roof pitch, access, and buildup. First-time residential cleanings can start around $99 for smaller systems.</p>
              </div>

              <div className="faq-item">
                <h3><HelpCircle color="#0284c7" /> Do you use harsh chemicals?</h3>
                <p>No. The service is focused on panel-safe cleaning and removing common outdoor buildup.</p>
              </div>

              <div className="faq-item">
                <h3><HelpCircle color="#0284c7" /> Do you service commercial buildings?</h3>
                <p>Yes. BrightView Solar Services can quote residential, commercial, and industrial rooftop systems.</p>
              </div>

              <div className="faq-item">
                <h3><HelpCircle color="#0284c7" /> What areas do you cover?</h3>
                <p>We serve the New England area. Text your town and panel count to check availability.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section quote">
          <div className="container">
            <div className="quote-box">
              <div>
                <div className="label">Free quote</div>
                <h2>Ready to clean your panels?</h2>
                <p className="subtitle">
                  Text your address, panel count, and a roof photo. We’ll respond with the next steps.
                </p>

                <div className="contact-list">
                  <a href="tel:6033938251"><Phone /> 603-393-8251</a>
                  <a href="mailto:brightviewsolarservices@gmail.com">
                    <Mail /> brightviewsolarservices@gmail.com
                  </a>
                </div>
              </div>

              <div className="form">
                <input placeholder="Name" />
                <input placeholder="Phone or email" />
                <input placeholder="Town / service address" />
                <input placeholder="Approx. number of panels" />
                <textarea placeholder="Tell us about the roof, access, or buildup" />
                <a className="btn btn-dark" href="sms:6033938251">
                  Submit Quote Request
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2026 BrightView Solar Services | Solar Panel Cleaning Across New England
      </footer>
    </>
  );
}