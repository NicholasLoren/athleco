import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NEWS } from '../data';
import Reveal from '../components/Reveal';
import NewsCard from '../components/NewsCard';
import Icon from '../components/Icon';

export default function JournalPage() {
  const cats = [...new Set(NEWS.map(n => n.category))];
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? NEWS : NEWS.filter(n => n.category === filter);
  const [lead, ...rest] = filtered;

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="crumbs"><Link to="/">Home</Link><span className="sep">/</span><span>Journal</span></div>
          <Reveal as="div" className="eyebrow">Stories & Updates</Reveal>
          <Reveal as="h1" className="display-title" delay={60} style={{ marginTop: 18 }}>The <em>Journal</em></Reveal>
          <Reveal as="p" className="lede" delay={120} style={{ marginTop: 22 }}>
            Athlete milestones, program launches and the bigger story of Ugandan sport — straight from the field.
          </Reveal>
        </div>

        <Reveal>
          <div className="filter-bar">
            <button className={'filter-chip' + (filter === 'all' ? ' active' : '')} onClick={() => setFilter('all')}>All</button>
            {cats.map(c => (
              <button key={c} className={'filter-chip' + (filter === c ? ' active' : '')} onClick={() => setFilter(c)}>{c}</button>
            ))}
          </div>
        </Reveal>

        {lead && (
          <Reveal>
            <Link to={'/journal/' + lead.id}>
              <div className="news-card" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', marginBottom: 24 }}>
                <div className="cover" style={{ height: 'auto', minHeight: 320 }}>
                  <span className="tag">Featured · {lead.category}</span>
                  <span className="kicker" style={{ fontSize: 120 }}>{lead.kicker}</span>
                </div>
                <div className="body" style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div className="date">{lead.date} · {lead.read}</div>
                  <div className="h" style={{ fontSize: 34 }}>{lead.title}</div>
                  <div className="ex" style={{ fontSize: 15 }}>{lead.excerpt}</div>
                  <div style={{ marginTop: 20 }} className="btn btn-glass btn-sm">Read Story <Icon name="arrow" size={14} /></div>
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="card-grid cols-3" style={{ paddingBottom: 40 }}>
          {rest.map((n, i) => (
            <Reveal key={n.id} delay={(i % 3) * 70}><NewsCard news={n} /></Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
