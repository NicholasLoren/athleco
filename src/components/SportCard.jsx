import { Link } from 'react-router-dom';
import Iso from './Iso';

export default function SportCard({ sport }) {
  return (
    <Link to={'/sports/' + sport.id}>
      <div className="sport-card" style={{ '--card-tint': sport.tint }}>
        <Iso sport={sport.iso} />
        <div className="meta">{sport.tagline}</div>
        <div className="title">{sport.name}</div>
        <div className="desc">{sport.desc}</div>
        <div className="arrow">Explore <span>→</span></div>
      </div>
    </Link>
  );
}
