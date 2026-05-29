export default function Silhouette({ sport, className = '' }) {
  const poses = {
    athletics: "M48 14a7 7 0 1 1-7-7 7 7 0 0 1 7 7zM38 24c8-2 16 2 20 10l12 14-8 6-12-12-4 18 10 22-9 4-13-26 2-22-14 8-8-10 22-12z",
    football: "M50 12a7 7 0 1 1-7-7 7 7 0 0 1 7 7zM40 22c10 0 16 6 18 16l6 20-9 3-6-18-3 26 4 24h-10l-4-26-6 22-9-3 7-30 1-30c3-2 8-4 11-4z",
    boxing: "M50 13a7 7 0 1 1-7-7 7 7 0 0 1 7 7zM30 24c8-4 18-3 24 4l10 6-5 9-11-6-2 4 6 30-9 3-6-22-5 24h-9l4-40c-2-6 4-13 8-15z",
    basketball: "M52 12a7 7 0 1 1-7-7 7 7 0 0 1 7 7zM42 22c8 0 14 5 16 14 2 8 8 10 14 8l-2 9c-10 3-18-2-22-12l-2 14 6 28h-10l-5-28-6 26h-10l7-40c0-18 11-29 16-29z",
    default: "M50 12a7 7 0 1 1-7-7 7 7 0 0 1 7 7zM41 22c9 0 15 6 17 16l6 20-9 3-6-18-3 26 4 24h-10l-4-26-6 22-9-3 7-30 2-30c2-2 6-4 9-4z",
  };
  return (
    <svg viewBox="0 0 90 110" className={'silhouette ' + className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={'sg-' + sport} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F5A054" />
          <stop offset="1" stopColor="#C4610D" />
        </linearGradient>
      </defs>
      <path d={poses[sport] || poses.default} fill={'url(#sg-' + sport + ')'} />
    </svg>
  );
}
