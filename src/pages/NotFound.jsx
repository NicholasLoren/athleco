import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

export default function NotFound() {
  return (
    <div className="page">
      <div className="container" style={{ textAlign: 'center', padding: '120px 0' }}>
        <div className="eyebrow centered" style={{ justifyContent: 'center' }}>404</div>
        <h1 className="display-title" style={{ marginTop: 16 }}>Off <em>Side</em></h1>
        <p className="lede" style={{ margin: '20px auto 32px' }}>This page wandered off the pitch. Let's get you back.</p>
        <Link to="/" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
          Back Home <Icon name="arrow" size={16} />
        </Link>
      </div>
    </div>
  );
}
