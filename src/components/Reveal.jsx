import { useRef, useEffect } from 'react';

export default function Reveal({ children, delay = 0, as = 'div', className = '', style = {} }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timeout;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeout = setTimeout(() => el.classList.add('in'), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    observer.observe(el);
    return () => { observer.disconnect(); clearTimeout(timeout); };
  }, [delay]);

  const Tag = as;
  return (
    <Tag ref={ref} className={`r${className ? ' ' + className : ''}`} style={style}>
      {children}
    </Tag>
  );
}
