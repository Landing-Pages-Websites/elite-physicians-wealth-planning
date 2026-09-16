'use client';

import { useEffect, useState } from 'react';

const HERO_ID = 'hero';
const FORM_ID = 'form';

/**
 * Reveals the sticky bar only once the visitor has scrolled past the hero and
 * hides it again while the lead form is on screen, so it never competes with
 * either the hero form or the final form. SSR-safe (effect runs client-only)
 * and degrades gracefully where IntersectionObserver is unavailable.
 */
function useStickyVisibility(): boolean {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const hero = document.getElementById(HERO_ID);
    const form = document.getElementById(FORM_ID);
    if (!hero || !form) return;

    const seen = { hero: true, form: false };
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === hero) seen.hero = entry.isIntersecting;
          if (entry.target === form) seen.form = entry.isIntersecting;
        }
        setVisible(!seen.hero && !seen.form);
      },
      { threshold: 0 },
    );
    observer.observe(hero);
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  return visible;
}

/** Mobile floating CTA: a single anchor to #form, shown between hero and form. */
export function StickyCta(): React.ReactElement {
  const visible = useStickyVisibility();

  return (
    <div className="lp-sticky lp-sticky--mobile" data-visible={visible} aria-hidden={!visible}>
      <a
        href="#form"
        className="btn btn-primary"
        style={{ width: '100%' }}
        tabIndex={visible ? undefined : -1}
      >
        Book my complimentary consultation
      </a>
    </div>
  );
}
