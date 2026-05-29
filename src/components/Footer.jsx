import { Link } from 'react-router-dom';
import { SPORTS } from '../data';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-wordmark">ATHLECO</div>
            <p className="footer-tag">Unlocking Uganda's sporting potential. From the grassroots, for the world stage.</p>
            <div className="footer-socials" style={{ marginTop: 20 }}>
              <Link to="/contact" aria-label="Instagram"><Icon name="instagram" size={16} /></Link>
              <Link to="/contact" aria-label="X"><Icon name="x" size={16} /></Link>
              <Link to="/contact" aria-label="Mail"><Icon name="mail" size={16} /></Link>
            </div>
          </div>
          <div className="footer-col">
            <div className="footer-col-h">Explore</div>
            <ul>
              <li><Link to="/sports">Sports</Link></li>
              <li><Link to="/athletes">Athletes</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/journal">Journal</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-h">Company</div>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-h">Sports</div>
            <ul>
              {SPORTS.slice(0, 5).map(s => (
                <li key={s.id}><Link to={'/sports/' + s.id}>{s.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-col-h">Visit</div>
            <ul>
              <li style={{ color: 'var(--fg-3)' }}>Plot 14, Kira Road</li>
              <li style={{ color: 'var(--fg-3)' }}>Kampala, Uganda</li>
              <li style={{ color: 'var(--fg-3)' }}>hello@athleco.ug</li>
              <li style={{ color: 'var(--fg-3)' }}>+256 700 000 000</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copy">© 2026 ATHLECO. Registered in Uganda, Sept 2024. All rights reserved.</div>
          <div className="copy">We identify. We develop. We promote.</div>
        </div>
      </div>
    </footer>
  );
}
