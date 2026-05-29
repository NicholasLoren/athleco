import { Link } from 'react-router-dom';
import { SPORTS } from '../data';
import Silhouette from './Silhouette';

export default function AthleteCard({ athlete }) {
  const sport = SPORTS.find(s => s.id === athlete.sport);
  return (
    <Link to={'/athletes/' + athlete.id}>
      <div className="ath-card">
        <div className="portrait">
          <span className="tag">{athlete.status}</span>
          <span className="age-badge">{athlete.city} · {athlete.age}</span>
          <Silhouette sport={athlete.sport} />
        </div>
        <div className="body">
          <div className="sport">{sport ? sport.name : athlete.sport} · {athlete.event}</div>
          <div className="name">{athlete.name}</div>
        </div>
      </div>
    </Link>
  );
}
