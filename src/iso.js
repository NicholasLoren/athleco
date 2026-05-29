const O = '#E87B1E', OL = '#F5A054', OD = '#C4610D';

function plinth(id, c1, c2) {
  return `
    <defs>
      <linearGradient id="${id}-top" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c1}"/>
        <stop offset="1" stop-color="${c2}"/>
      </linearGradient>
      <linearGradient id="${id}-l" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="rgba(255,255,255,0.10)"/>
        <stop offset="1" stop-color="rgba(0,0,0,0.35)"/>
      </linearGradient>
      <linearGradient id="${id}-r" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="rgba(0,0,0,0.18)"/>
        <stop offset="1" stop-color="rgba(0,0,0,0.5)"/>
      </linearGradient>
    </defs>
    <g opacity="0.96">
      <polygon points="100,118 168,158 100,198 32,158" fill="url(#${id}-top)" stroke="rgba(255,255,255,0.22)" stroke-width="1"/>
      <polygon points="32,158 100,198 100,226 32,186" fill="url(#${id}-l)"/>
      <polygon points="168,158 100,198 100,226 168,186" fill="url(#${id}-r)"/>
    </g>`;
}

const shadow = `<ellipse cx="100" cy="206" rx="62" ry="18" fill="rgba(0,0,0,0.35)" filter="blur(1px)"/>`;

const shapes = {
  football: (id) => `
    <svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
      ${shadow}${plinth(id, 'rgba(46,196,182,0.55)', 'rgba(46,196,182,0.2)')}
      <g transform="translate(100,96)">
        <circle r="40" fill="#fff" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
        <circle r="40" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="8" opacity="0.4"/>
        <path d="M0,-16 L15,-5 L9,13 L-9,13 L-15,-5 Z" fill="#1b1b24"/>
        <path d="M0,-40 L0,-16 M15,-5 L34,-12 M9,13 L20,30 M-9,13 L-20,30 M-15,-5 L-34,-12" stroke="#1b1b24" stroke-width="3" fill="none"/>
        <ellipse cx="-13" cy="-15" rx="13" ry="8" fill="rgba(255,255,255,0.6)" opacity="0.5"/>
      </g>
    </svg>`,

  athletics: (id) => `
    <svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
      ${shadow}${plinth(id, 'rgba(255,200,87,0.55)', 'rgba(255,200,87,0.2)')}
      <g transform="translate(100,100)">
        <path d="M-46,30 Q-46,-30 8,-30 L40,-30 Q54,-30 54,-14" fill="none" stroke="${O}" stroke-width="11" stroke-linecap="round"/>
        <path d="M-34,30 Q-34,-18 8,-18 L40,-18" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="6 6" opacity="0.8"/>
        <path d="M-58,30 Q-58,-42 8,-42 L42,-42" fill="none" stroke="${OD}" stroke-width="11" stroke-linecap="round" opacity="0.6"/>
        <rect x="34" y="-58" width="30" height="7" rx="3.5" transform="rotate(35 49 -54)" fill="#1b1b24"/>
      </g>
    </svg>`,

  basketball: (id) => `
    <svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
      ${shadow}${plinth(id, 'rgba(245,160,84,0.55)', 'rgba(245,160,84,0.2)')}
      <g transform="translate(100,96)">
        <circle r="38" fill="${O}" stroke="${OD}" stroke-width="1.5"/>
        <path d="M0,-38 L0,38 M-38,0 L38,0" stroke="#1b1b24" stroke-width="2.5"/>
        <path d="M-27,-27 Q0,0 -27,27" fill="none" stroke="#1b1b24" stroke-width="2.5"/>
        <path d="M27,-27 Q0,0 27,27" fill="none" stroke="#1b1b24" stroke-width="2.5"/>
        <ellipse cx="-12" cy="-14" rx="11" ry="7" fill="rgba(255,255,255,0.45)"/>
      </g>
    </svg>`,

  boxing: (id) => `
    <svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
      ${shadow}${plinth(id, 'rgba(181,23,158,0.5)', 'rgba(181,23,158,0.2)')}
      <g transform="translate(100,92)">
        <path d="M-30,-18 q-16,0 -16,18 q0,26 22,30 l30,4 q22,0 22,-22 l0,-26 q0,-14 -14,-14 l-32,0 q-12,0 -12,12 z" fill="${O}" stroke="${OD}" stroke-width="1.5"/>
        <path d="M-30,-18 q-14,2 -14,18 l24,2 q4,-20 -10,-20 z" fill="${OL}" opacity="0.6"/>
        <rect x="-46" y="14" width="22" height="14" rx="4" fill="#fff" opacity="0.85"/>
        <ellipse cx="14" cy="-2" rx="8" ry="5" fill="rgba(255,255,255,0.4)"/>
      </g>
    </svg>`,

  volleyball: (id) => `
    <svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
      ${shadow}${plinth(id, 'rgba(76,201,240,0.5)', 'rgba(76,201,240,0.2)')}
      <g transform="translate(100,96)">
        <circle r="38" fill="#fff" stroke="rgba(0,0,0,0.12)" stroke-width="1"/>
        <path d="M0,-38 Q-20,0 0,38" fill="none" stroke="#4CC9F0" stroke-width="3"/>
        <path d="M0,-38 Q20,0 0,38" fill="none" stroke="${O}" stroke-width="3"/>
        <path d="M-38,0 Q0,-14 38,0" fill="none" stroke="#4CC9F0" stroke-width="3"/>
        <path d="M-34,16 Q0,28 34,16" fill="none" stroke="${O}" stroke-width="3"/>
        <ellipse cx="-12" cy="-14" rx="11" ry="7" fill="rgba(255,255,255,0.55)"/>
      </g>
    </svg>`,

  rugby: (id) => `
    <svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
      ${shadow}${plinth(id, 'rgba(46,196,182,0.5)', 'rgba(46,196,182,0.2)')}
      <g transform="translate(100,96) rotate(-28)">
        <ellipse rx="26" ry="42" fill="${O}" stroke="${OD}" stroke-width="1.5"/>
        <path d="M0,-38 L0,38" stroke="#1b1b24" stroke-width="2.5"/>
        <path d="M-7,-6 L7,-6 M-7,2 L7,2 M-7,10 L7,10 M-7,-14 L7,-14" stroke="#fff" stroke-width="2.5"/>
        <ellipse cx="-8" cy="-16" rx="7" ry="11" fill="rgba(255,255,255,0.4)"/>
      </g>
    </svg>`,

  netball: (id) => `
    <svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
      ${shadow}${plinth(id, 'rgba(232,123,30,0.5)', 'rgba(232,123,30,0.2)')}
      <g transform="translate(100,60)">
        <rect x="-3" y="0" width="6" height="84" rx="3" fill="#1b1b24"/>
        <ellipse cx="22" cy="6" rx="20" ry="8" fill="none" stroke="${O}" stroke-width="4"/>
        <path d="M4,8 L40,8 L34,26 L10,26 Z" fill="none" stroke="#fff" stroke-width="1.5" opacity="0.7"/>
        <circle cx="22" cy="20" r="11" fill="${OL}" opacity="0.85"/>
      </g>
    </svg>`,

  swimming: (id) => `
    <svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
      ${shadow}${plinth(id, 'rgba(76,201,240,0.55)', 'rgba(76,201,240,0.2)')}
      <g transform="translate(100,92)">
        <path d="M-50,10 q12,-14 25,0 t25,0 t25,0" fill="none" stroke="#4CC9F0" stroke-width="5" stroke-linecap="round"/>
        <path d="M-50,26 q12,-14 25,0 t25,0 t25,0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
        <g transform="translate(0,-22)">
          <circle cx="-12" r="11" fill="${O}" stroke="${OD}" stroke-width="1.5"/>
          <circle cx="12" r="11" fill="${O}" stroke="${OD}" stroke-width="1.5"/>
          <rect x="-3" y="-3" width="6" height="6" fill="${OD}"/>
          <circle cx="-12" cy="-3" r="4" fill="rgba(255,255,255,0.5)"/>
          <circle cx="12" cy="-3" r="4" fill="rgba(255,255,255,0.5)"/>
        </g>
      </g>
    </svg>`,

  cricket: (id) => `
    <svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
      ${shadow}${plinth(id, 'rgba(255,200,87,0.5)', 'rgba(255,200,87,0.2)')}
      <g transform="translate(100,94)">
        <g transform="rotate(32)">
          <rect x="-7" y="-44" width="14" height="30" rx="6" fill="#1b1b24"/>
          <rect x="-13" y="-16" width="26" height="46" rx="8" fill="${OL}"/>
          <rect x="-13" y="-16" width="9" height="46" rx="6" fill="${O}" opacity="0.5"/>
        </g>
        <circle cx="30" cy="20" r="13" fill="${OD}"/>
        <path d="M22,14 Q30,20 22,26 M38,14 Q30,20 38,26" stroke="#fff" stroke-width="1.5" fill="none"/>
      </g>
    </svg>`,

  para: (id) => `
    <svg viewBox="0 0 200 230" xmlns="http://www.w3.org/2000/svg">
      ${shadow}${plinth(id, 'rgba(232,123,30,0.5)', 'rgba(232,123,30,0.2)')}
      <g transform="translate(100,94)">
        <g transform="rotate(-16)">
          <circle r="36" fill="none" stroke="${O}" stroke-width="6"/>
          <circle r="36" fill="none" stroke="${OD}" stroke-width="1"/>
          <circle r="8" fill="#1b1b24"/>
          <g stroke="rgba(255,255,255,0.55)" stroke-width="1.6">
            <line x1="0" y1="-34" x2="0" y2="34"/>
            <line x1="-34" y1="0" x2="34" y2="0"/>
            <line x1="-24" y1="-24" x2="24" y2="24"/>
            <line x1="24" y1="-24" x2="-24" y2="24"/>
          </g>
        </g>
        <rect x="20" y="-44" width="34" height="7" rx="3.5" transform="rotate(-20 37 -40)" fill="#1b1b24"/>
      </g>
    </svg>`,
};

export function getIso(sport) {
  const fn = shapes[sport] || shapes.football;
  const uid = 'iso-' + sport + '-' + Math.random().toString(36).slice(2, 7);
  return fn(uid);
}
