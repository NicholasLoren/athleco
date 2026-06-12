import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Icon from './Icon';
import { useTheme } from '../hooks/useTheme';
import logo from '../assets/logo.svg';

const NAV_ITEMS = [
  ['Home', '/'], ['Sports', '/sports'], ['Athletes', '/athletes'],
  ['Programs', '/programs'], ['Team', '/team'], ['Journal', '/journal'],
  ['About', '/about'], ['Contact', '/contact'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Athleco" className="nav-logo-img" />
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
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
          </button>
          <Link to="/contact" className="btn btn-primary btn-sm">Discover Talent</Link>
        </div>
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
            <button className="mobile-theme-toggle" onClick={toggle}>
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
