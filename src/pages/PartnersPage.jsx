import { Link } from 'react-router-dom';
import { PARTNERS } from '../data';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';

export default function PartnersPage() {
  const types = [...new Set(PARTNERS.map(p => p.type))];

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="crumbs"><Link to="/">Home</Link><span className="sep">/</span><span>Partners</span></div>
          <Reveal as="div" className="eyebrow">Who We Work With</Reveal>
          <Reveal as="h1" className="display-title" delay={60} style={{ marginTop: 18 }}>Our <em>Partners</em></Reveal>
          <Reveal as="p" className="lede" delay={120} style={{ marginTop: 22 }}>
            Federations, government, corporates and international bodies. Real change needs
            real alliances — these are the organizations building Ugandan sport with us.
          </Reveal>
        </div>

        {types.map((type) => (
          <section key={type} style={{ marginBottom: 48 }}>
            <Reveal as="h3" className="footer-col-h" style={{ marginBottom: 18 }}>{type}</Reveal>
            <div className="partner-grid">
              {PARTNERS.filter(p => p.type === type).map((p, i) => (
                <Reveal key={p.name} delay={(i % 4) * 50}>
                  <div className="partner-card">
                    <div className="logo-mark">{p.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</div>
                    <div className="pn">{p.name}</div>
                    <div className="pt">{p.sport} · Since {p.since}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        <section style={{ marginTop: 70, paddingBottom: 20 }}>
          <Reveal>
            <div className="cta-band">
              <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto', fontSize: 'clamp(32px,4vw,52px)' }}>
                Become A <em>Partner</em>
              </h2>
              <p className="lede" style={{ margin: '20px auto 32px', textAlign: 'center' }}>
                Sponsor an athlete, fund a program, or build a facility with us. Let's talk impact.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
                Partner With Athleco <Icon name="arrowUpRight" size={16} />
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
