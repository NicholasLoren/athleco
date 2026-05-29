import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Icon from './Icon';

const NAV_ITEMS = [
  ['Home', '/'], ['Sports', '/sports'], ['Athletes', '/athletes'],
  ['Programs', '/programs'], ['Team', '/team'], ['Journal', '/journal'],
  ['About', '/about'], ['Contact', '/contact'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-logo">
          <span className="brand-mark">A</span>
          <span className="word">ATHLECO</span>
        </Link>
        <div className="nav-links">
          {NAV_ITEMS.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            >
              {label}
            </NavLink>
          ))}
        </div>
        <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginLeft: 'auto' }}>
          Discover Talent
        </Link>
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span></span>
        </button>
      </nav>
      {open && (
        <div className="mobile-menu" onClick={() => setOpen(false)}>
          <div className="mobile-menu-inner glass-strong" onClick={(e) => e.stopPropagation()}>
            {NAV_ITEMS.map(([label, to]) => (
              <Link key={to} to={to} className="mobile-link" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
