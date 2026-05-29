import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ATHLETES, SPORTS } from '../data';
import Reveal from '../components/Reveal';
import AthleteCard from '../components/AthleteCard';

export default function AthletesPage() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? ATHLETES : ATHLETES.filter(a => a.sport === filter);
  const sportsWithAthletes = SPORTS.filter(s => ATHLETES.some(a => a.sport === s.id));

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="crumbs"><Link to="/">Home</Link><span className="sep">/</span><span>Athletes</span></div>
          <Reveal as="div" className="eyebrow">The Roster</Reveal>
          <Reveal as="h1" className="display-title" delay={60} style={{ marginTop: 18 }}>
            Our <em>Athletes</em>
          </Reveal>
          <Reveal as="p" className="lede" delay={120} style={{ marginTop: 22 }}>
            The faces of the movement. Every athlete here was scouted, developed and is
            represented by Athleco — from junior prospects to seasoned professionals.
          </Reveal>
        </div>

        <Reveal>
          <div className="filter-bar">
            <button className={'filter-chip' + (filter === 'all' ? ' active' : '')} onClick={() => setFilter('all')}>
              All · {ATHLETES.length}
            </button>
            {sportsWithAthletes.map(s => (
              <button key={s.id} className={'filter-chip' + (filter === s.id ? ' active' : '')} onClick={() => setFilter(s.id)}>
                {s.name}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="card-grid cols-4" style={{ paddingBottom: 40 }}>
          {filtered.map((a, i) => (
            <Reveal key={a.id} delay={(i % 4) * 60}><AthleteCard athlete={a} /></Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
