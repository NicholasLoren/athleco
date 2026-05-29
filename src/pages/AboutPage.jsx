import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import Icon from '../components/Icon';

export default function AboutPage() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="crumbs"><Link to="/">Home</Link><span className="sep">/</span><span>About</span></div>
          <Reveal as="div" className="eyebrow">Who We Are</Reveal>
          <Reveal as="h1" className="display-title" delay={60} style={{ marginTop: 18 }}>
            Built For <em>Uganda.</em><br />Aimed At The <em>World.</em>
          </Reveal>
        </div>

        <Reveal>
          <div className="split">
            <div>
              <p className="lede" style={{ fontSize: 22, color: 'var(--fg)' }}>
                Uganda doesn't have a talent problem. It has a structure problem.
              </p>
              <p className="body-copy" style={{ marginTop: 20, fontSize: 16 }}>
                For decades, gifted athletes have emerged from village pitches, school fields and
                dusty courts — only to be lost. No scouting, no agency, no professional support.
                Athleco exists to close that gap.
              </p>
              <p className="body-copy" style={{ marginTop: 16, fontSize: 16 }}>
                Founded in 2018 and formally registered in September 2024, we are a full-stack
                sports development company: scouting, academies, sports science, a licensed agency,
                infrastructure and events — all under one roof, all focused on Uganda first.
              </p>
            </div>
            <div className="card-grid cols-2" style={{ gap: 12 }}>
              {[
                ['target', 'Identify', 'We find talent early, where others never look.'],
                ['chart', 'Develop', 'World-class training, science and welfare.'],
                ['trophy', 'Promote', 'A licensed agency that opens global doors.'],
                ['heart', 'Protect', 'Athletes are people first — we look after them.'],
              ].map(([ic, h, p], i) => (
                <div className="value-card" key={i}>
                  <div className="ic"><Icon name={ic} size={26} /></div>
                  <h4>{h}</h4>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <section style={{ marginTop: 100 }}>
          <Reveal>
            <div className="stats-row">
              {[['2018','Founded'], ['380+','Athletes'], ['10','Sports'], ['145','Schools']].map(([n, l], i) => (
                <div className="stat" key={i}><div className="num">{n}</div><div className="label">{l}</div></div>
              ))}
            </div>
          </Reveal>
        </section>

        <section style={{ marginTop: 100 }}>
          <SectionHead eyebrow="The Journey" title={<>Our <em>Story</em> So Far</>} />
          <Reveal>
            <div className="timeline">
              {[
                ['2018', 'The Idea', 'Founded after one too many gifted athletes slipped through the cracks. First scouting trips begin in four schools.'],
                ['2020', 'Going Regional', 'Combine network expands beyond Kampala into the north and east. First academy partnerships signed.'],
                ['2022', 'Altitude & Science', "Kapchorwa altitude project breaks ground. Uganda's first endurance sport-science protocol stack is built."],
                ['2024', 'Formally Registered', 'Athleco is formally registered in September 2024. The agency arm secures FIFA, FIBA and IRB licensing.'],
                ['2026', 'National Scale', 'School network hits 145 institutions. Para program goes national. Cricket joins the roster.'],
              ].map(([yr, h, p], i) => (
                <div className="timeline-item" key={i}>
                  <div className="yr">{yr}</div>
                  <h4>{h}</h4>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section style={{ marginTop: 90, paddingBottom: 20 }}>
          <Reveal>
            <div className="cta-band">
              <h2 className="section-title" style={{ maxWidth: 720, margin: '0 auto', fontSize: 'clamp(32px,4vw,52px)' }}>
                Meet The <em>People</em> Behind It
              </h2>
              <p className="lede" style={{ margin: '20px auto 32px', textAlign: 'center' }}>
                A team of coaches, scouts, scientists and builders making it happen every day.
              </p>
              <Link to="/team" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
                Our Team <Icon name="arrow" size={16} />
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
