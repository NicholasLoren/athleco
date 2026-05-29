import { Link, useParams } from 'react-router-dom';
import { SPORTS, ATHLETES } from '../data';
import Iso from '../components/Iso';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import AthleteCard from '../components/AthleteCard';
import Icon from '../components/Icon';
import NotFound from './NotFound';

export default function SportDetailPage() {
  const { id } = useParams();
  const sport = SPORTS.find(s => s.id === id);
  if (!sport) return <NotFound />;
  const roster = ATHLETES.filter(a => a.sport === id);

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="crumbs">
            <Link to="/">Home</Link><span className="sep">/</span>
            <Link to="/sports">Sports</Link><span className="sep">/</span><span>{sport.name}</span>
          </div>
        </div>

        <Reveal>
          <div className="detail-hero">
            <div>
              <div className="eyebrow">{sport.tagline}</div>
              <h1 className="display-title" style={{ marginTop: 16, fontSize: 'clamp(52px,7vw,104px)' }}>{sport.name}</h1>
              <p className="lede" style={{ marginTop: 22 }}>{sport.desc}</p>
              <div className="fact-row" style={{ marginTop: 36 }}>
                <div className="fact"><div className="v">{sport.athletes}</div><div className="k">Athletes</div></div>
                <div className="fact"><div className="v">{sport.schools}</div><div className="k">Schools</div></div>
                <div className="fact"><div className="v">{sport.clubs}</div><div className="k">Clubs / Gyms</div></div>
              </div>
            </div>
            <div className="detail-iso-stage" style={{ background: `radial-gradient(circle at 50% 40%, ${sport.tint}, transparent 62%)` }}>
              <Iso sport={sport.iso} className="big-iso" style={{ position: 'static', width: '72%', height: 'auto' }} />
            </div>
          </div>
        </Reveal>

        <section style={{ marginTop: 110 }}>
          <div className="split">
            <Reveal>
              <div>
                <div className="eyebrow">The Landscape</div>
                <h2 className="section-title" style={{ marginTop: 16, fontSize: 'clamp(34px,4vw,52px)' }}>Why It Matters</h2>
                <p className="body-copy" style={{ marginTop: 20, fontSize: 16 }}>{sport.history}</p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="card-grid" style={{ gap: 12 }}>
                {sport.facts.map((f, i) => (
                  <div className="program-card" key={i} style={{ gridTemplateColumns: '1fr auto', padding: 24 }}>
                    <div><h3 style={{ fontSize: 20, margin: 0 }}>{f.k}</h3></div>
                    <div className="program-kpis"><div className="kpi"><div className="v" style={{ color: 'var(--orange)' }}>{f.v}</div></div></div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section style={{ marginTop: 110 }}>
          <SectionHead center eyebrow="The Pathway" title={<>{sport.name} <em>Journey</em></>} />
          <Reveal>
            <div className="pathway">
              {sport.pathway.map((p, i) => (
                <div className="pathway-step" key={i}>
                  <div className="n">{String(i + 1).padStart(2, '0')}</div>
                  <h4 style={{ fontSize: 15 }}>{p}</h4>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {roster.length > 0 && (
          <section style={{ marginTop: 110, paddingBottom: 20 }}>
            <SectionHead
              eyebrow="The Roster"
              title={<>{sport.name} <em>Athletes</em></>}
              action={<Link to="/athletes" className="btn btn-ghost">All Athletes <Icon name="arrow" size={15} /></Link>}
            />
            <div className="card-grid cols-4">
              {roster.map((a, i) => (
                <Reveal key={a.id} delay={(i % 4) * 70}><AthleteCard athlete={a} /></Reveal>
              ))}
            </div>
          </section>
        )}

        <section style={{ marginTop: 90, paddingBottom: 20 }}>
          <Reveal>
            <div className="cta-band">
              <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto', fontSize: 'clamp(32px,4vw,52px)' }}>
                Play {sport.name}? <em>Let's Talk.</em>
              </h2>
              <p className="lede" style={{ margin: '20px auto 32px', textAlign: 'center' }}>
                Whether you're an athlete, a coach or a school — there's a pathway here for you.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
                Get Scouted <Icon name="arrowUpRight" size={16} />
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
