import Reveal from './Reveal';

export default function SectionHead({ eyebrow, title, sub, center, action }) {
  return (
    <div className={'section-head' + (center ? ' center' : '')}>
      <div style={{ flex: 1 }}>
        {eyebrow && (
          <Reveal as="div" className={'eyebrow' + (center ? ' centered' : '')}>
            {eyebrow}
          </Reveal>
        )}
        <Reveal as="h2" className="section-title" delay={60} style={{ marginTop: 16 }}>
          {title}
        </Reveal>
        {sub && (
          <Reveal
            as="p"
            className="lede"
            delay={120}
            style={{ marginTop: 18, ...(center ? { marginLeft: 'auto', marginRight: 'auto' } : {}) }}
          >
            {sub}
          </Reveal>
        )}
      </div>
      {action && !center && <div className="section-head-action">{action}</div>}
    </div>
  );
}
