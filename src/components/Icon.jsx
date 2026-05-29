export default function Icon({ name, size = 20, color = 'currentColor', sw = 2 }) {
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    arrowUpRight: <path d="M7 17L17 7M7 7h10v10" />,
    target: <g><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></g>,
    users: <g><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></g>,
    trophy: <g><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z" /></g>,
    map: <g><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></g>,
    mail: <g><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></g>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />,
    check: <path d="M20 6 9 17l-5-5" />,
    star: <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
    zap: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
    calendar: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
    clock: <g><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></g>,
    building: <g><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22v-4h6v4M9 6h.01M15 6h.01M9 10h.01M15 10h.01M9 14h.01M15 14h.01" /></g>,
    chart: <g><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></g>,
    globe: <g><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" /></g>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
    heart: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3 5.49 5.49 0 0 0 12 5.36 5.49 5.49 0 0 0 7.5 3 5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />,
    play: <path d="m6 3 14 9-14 9V3z" />,
    instagram: <g><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></g>,
    x: <path d="M18 6 6 18M6 6l12 12" />,
    medal: <g><circle cx="12" cy="15" r="6" /><path d="M9 21 5 8M15 21l4-13M8 4h8l-2 5h-4z" /></g>,
    whistle: <g><path d="M21 9a6 6 0 1 1-6-6h6v6Z" /><circle cx="9" cy="15" r="3" /></g>,
    flag: <g><path d="M4 22V4s2-2 6-2 6 2 10 0v12c-4 2-6 0-10 0s-6 2-6 2Z" /></g>,
    sparkle: <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3z" />,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}
         strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || paths.arrow}
    </svg>
  );
}
