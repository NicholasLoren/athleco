import { Link } from 'react-router-dom';

export default function NewsCard({ news }) {
  return (
    <Link to={'/journal/' + news.id}>
      <div className="news-card">
        <div className="cover">
          <span className="tag">{news.category}</span>
          <span className="kicker">{news.kicker}</span>
        </div>
        <div className="body">
          <div className="date">{news.date} · {news.read}</div>
          <div className="h">{news.title}</div>
          <div className="ex">{news.excerpt}</div>
        </div>
      </div>
    </Link>
  );
}
