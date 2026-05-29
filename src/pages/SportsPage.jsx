import { Link } from 'react-router-dom';
import { SPORTS } from '../data';
import Reveal from '../components/Reveal';
import SportCard from '../components/SportCard';

export default function SportsPage() {
  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="crumbs"><Link to="/">Home</Link><span className="sep">/</span><span>Sports</span></div>
          <Reveal as="div" className="eyebrow">10 Disciplines</Reveal>
          <Reveal as="h1" className="display-title" delay={60} style={{ marginTop: 18 }}>
            Our <em>Sports</em>
          </Reveal>
          <Reveal as="p" className="lede" delay={120} style={{ marginTop: 22 }}>
            From the most-played to the most-overlooked, we cover ten sports across Uganda —
            each with a dedicated pathway, scouts and specialist staff.
          </Reveal>
        </div>
        <div className="card-grid cols-3" style={{ paddingBottom: 40 }}>
          {SPORTS.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 70}>
              <SportCard sport={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
