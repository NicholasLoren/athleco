import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TEAM } from '../data';
import Reveal from '../components/Reveal';

export default function TeamPage() {
  const depts = [...new Set(TEAM.map(t => t.dept))];
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? TEAM : TEAM.filter(t => t.dept === filter);

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="crumbs"><Link to="/">Home</Link><span className="sep">/</span><span>Team</span></div>
          <Reveal as="div" className="eyebrow">The People</Reveal>
          <Reveal as="h1" className="display-title" delay={60} style={{ marginTop: 18 }}>Our <em>Team</em></Reveal>
          <Reveal as="p" className="lede" delay={120} style={{ marginTop: 22 }}>
            Coaches, scouts, scientists, lawyers and builders — a multi-disciplinary team
            united by one belief: Ugandan talent deserves world-class support.
          </Reveal>
        </div>

        <Reveal>
          <div className="filter-bar">
            <button className={'filter-chip' + (filter === 'all' ? ' active' : '')} onClick={() => setFilter('all')}>All</button>
            {depts.map(d => (
              <button key={d} className={'filter-chip' + (filter === d ? ' active' : '')} onClick={() => setFilter(d)}>{d}</button>
            ))}
          </div>
        </Reveal>

        <div className="card-grid cols-3" style={{ paddingBottom: 40 }}>
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 60}>
              <div className="person-card">
                <div className="avatar">{p.initials}</div>
                <div className="name">{p.name}</div>
                <div className="role">{p.role}</div>
                <div className="bio">{p.bio}</div>
                <div className="meta">
                  <span><b>Based</b> {p.city}</span>
                  <span><b>Since</b> {p.joined}</span>
                  <span><b>Focus</b> {p.focus}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
