import { Link, useParams } from 'react-router-dom';
import { ATHLETES, SPORTS } from '../data';
import Iso from '../components/Iso';
import Silhouette from '../components/Silhouette';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import AthleteCard from '../components/AthleteCard';
import Icon from '../components/Icon';
import NotFound from './NotFound';

export default function AthleteDetailPage() {
  const { id } = useParams();
  const a = ATHLETES.find(x => x.id === id);
  if (!a) return <NotFound />;
  const sport = SPORTS.find(s => s.id === a.sport);
  const teammates = ATHLETES.filter(x => x.sport === a.sport && x.id !== a.id).slice(0, 4);

  return (
    <div className="page">
      <div className="container">
        <div className="page-header">
          <div className="crumbs">
            <Link to="/">Home</Link><span className="sep">/</span>
            <Link to="/athletes">Athletes</Link><span className="sep">/</span><span>{a.name}</span>
          </div>
        </div>

        <Reveal>
          <div className="profile-hero">
            <div className="profile-portrait">
              <span className="ribbon">{a.status}</span>
              <Silhouette sport={a.sport} />
            </div>
            <div>
              <div className="eyebrow">
                <Link to={'/sports/' + a.sport} style={{ color: 'var(--orange)' }}>{sport ? sport.name : a.sport}</Link>
                {' · '}{a.event}
              </div>
              <h1 className="display-title" style={{ marginTop: 14, fontSize: 'clamp(46px,6vw,88px)' }}>{a.name}</h1>
              <p className="lede" style={{ marginTop: 20 }}>{a.bio}</p>

              <div className="bio-stat-grid" style={{ marginTop: 30 }}>
                <div className="bio-stat"><div className="k">Hometown</div><div className="v">{a.city}</div></div>
                <div className="bio-stat"><div className="k">Age</div><div className="v">{a.age}</div></div>
                <div className="bio-stat"><div className="k">With Athleco Since</div><div className="v">{a.since}</div></div>
                <div className="bio-stat"><div className="k">Career Mark</div><div className="v">{a.pb}</div></div>
              </div>

              <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">
                  Represent {a.name.split(' ')[0]} <Icon name="arrowUpRight" size={15} />
                </Link>
                {a.club && (
                  <span className="btn btn-glass" style={{ cursor: 'default' }}>
                    <Icon name="shield" size={15} /> {a.club}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        <section style={{ marginTop: 100 }}>
          <div className="split" style={{ alignItems: 'start' }}>
            <Reveal>
              <div>
                <div className="eyebrow">Career Highlights</div>
                <h2 className="section-title" style={{ marginTop: 16, fontSize: 'clamp(32px,4vw,48px)' }}>Achievements</h2>
                <div className="achieve-list" style={{ marginTop: 24 }}>
                  {a.achievements.map((ac, i) => (
                    <div className="achieve-item" key={i}>
                      <span className="ic"><Icon name="medal" size={22} /></span>
                      <span>{ac}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="detail-iso-stage" style={{ background: `radial-gradient(circle at 50% 40%, ${sport ? sport.tint : 'rgba(232,123,30,0.14)'}, transparent 62%)`, aspectRatio: '4/3' }}>
                <Iso sport={a.sport} style={{ position: 'static', width: '60%', height: 'auto' }} />
              </div>
            </Reveal>
          </div>
        </section>

        {teammates.length > 0 && (
          <section style={{ marginTop: 100, paddingBottom: 20 }}>
            <SectionHead
              eyebrow="Same Sport"
              title={<>More {sport ? sport.name : ''} <em>Talent</em></>}
              action={<Link to={'/sports/' + a.sport} className="btn btn-ghost">View Sport <Icon name="arrow" size={15} /></Link>}
            />
            <div className="card-grid cols-4">
              {teammates.map((t, i) => (
                <Reveal key={t.id} delay={(i % 4) * 70}><AthleteCard athlete={t} /></Reveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
