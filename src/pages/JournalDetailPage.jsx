import { Link, useParams } from 'react-router-dom';
import { NEWS } from '../data';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import NewsCard from '../components/NewsCard';
import NotFound from './NotFound';

export default function JournalDetailPage() {
  const { id } = useParams();
  const n = NEWS.find(x => x.id === id);
  if (!n) return <NotFound />;
  const more = NEWS.filter(x => x.id !== id).slice(0, 3);

  return (
    <div className="page">
      <div className="container">
        <div className="page-header" style={{ paddingBottom: 30 }}>
          <div className="crumbs">
            <Link to="/">Home</Link><span className="sep">/</span>
            <Link to="/journal">Journal</Link><span className="sep">/</span><span>{n.category}</span>
          </div>
        </div>

        <div className="article">
          <Reveal>
            <div className="eyebrow">{n.kicker} · {n.category}</div>
            <h1 className="display-title" style={{ marginTop: 18, fontSize: 'clamp(40px,5.5vw,76px)' }}>{n.title}</h1>
            <div style={{ marginTop: 22, fontFamily: 'var(--font-display)', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--fg-4)', fontSize: 12 }}>
              {n.date} · {n.read} read
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="news-card" style={{ margin: '40px auto', maxWidth: 920 }}>
            <div className="cover" style={{ height: 360 }}>
              <span className="kicker" style={{ fontSize: 160 }}>{n.kicker}</span>
            </div>
          </div>
        </Reveal>

        <div className="article">
          <Reveal>
            <p className="lead">{n.excerpt}</p>
            <p>{n.body}</p>
            <p>
              It's the kind of moment Athleco was built for — proof that with the right structure
              around them, Ugandan athletes can compete with anyone. The work now is to make moments
              like this routine, not remarkable.
            </p>
            <p>
              "This is exactly why we do what we do," said the Athleco team. "Talent was never the
              question in Uganda. Opportunity was. We're changing that, one athlete at a time."
            </p>
          </Reveal>
        </div>

        <section style={{ marginTop: 90, paddingBottom: 20 }}>
          <SectionHead eyebrow="Keep Reading" title={<>More <em>Stories</em></>} />
          <div className="card-grid cols-3">
            {more.map((m, i) => (
              <Reveal key={m.id} delay={(i % 3) * 70}><NewsCard news={m} /></Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
