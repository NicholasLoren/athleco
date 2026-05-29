import { Link } from 'react-router-dom';
import { PROGRAMS } from '../data';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';

const ICONS = { schools: 'users', altitude: 'chart', academies: 'trophy', agency: 'star', infrastructure: 'building', events: 'flag' };

export default function ProgramsPage() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="crumbs"><Link to="/">Home</Link><span className="sep">/</span><span>Programs</span></div>
          <Reveal as="div" className="eyebrow">How We Operate</Reveal>
          <Reveal as="h1" className="display-title" delay={60} style={{ marginTop: 18 }}>Our <em>Programs</em></Reveal>
          <Reveal as="p" className="lede" delay={120} style={{ marginTop: 22 }}>
            Six interlocking programs that take an athlete from a school pitch to a
            professional contract — and build the infrastructure to make it repeatable.
          </Reveal>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingBottom: 40 }}>
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <div className="program-card">
                <div className="pic"><Icon name={ICONS[p.id] || 'star'} size={28} /></div>
                <div>
                  <div className="sub">{p.sub} · {p.count}</div>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className="program-kpis">
                  {p.kpis.map((k, j) => (
                    <div className="kpi" key={j}><div className="v">{k[0]}</div><div className="k">{k[1]}</div></div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <section style={{ marginTop: 60, paddingBottom: 20 }}>
          <Reveal>
            <div className="cta-band">
              <div className="eyebrow centered" style={{ justifyContent: 'center', marginBottom: 20 }}>Partner With Us</div>
              <h2 className="section-title" style={{ maxWidth: 720, margin: '0 auto', fontSize: 'clamp(32px,4vw,52px)' }}>
                Bring A Program <em>To Your Region</em>
              </h2>
              <p className="lede" style={{ margin: '20px auto 32px', textAlign: 'center' }}>
                Schools, federations and sponsors — let's build the next pathway together.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
                Start A Conversation <Icon name="arrowUpRight" size={16} />
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
