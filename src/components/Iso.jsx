import { useMemo } from 'react';
import { getIso } from '../iso';

export default function Iso({ sport, className = '', style = {} }) {
  const html = useMemo(() => getIso(sport), [sport]);
  return (
    <div
      className={`iso${className ? ' ' + className : ''}`}
      style={style}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
