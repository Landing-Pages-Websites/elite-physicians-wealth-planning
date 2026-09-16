import { CtaGroup } from './cta-group';
import { PlusIcon } from './icons';

const FAQS = [
  {
    q: 'What happens in the complimentary consultation?',
    a: 'It is a complimentary introductory conversation about tax planning, retirement planning, and the professionals already involved. We also explain the Elite Physician Wealth Blueprint process.',
  },
  {
    q: 'What does “coordinated” actually mean?',
    a: 'We work alongside your CPA, third-party administrator, estate-planning attorney, and insurance professionals - bringing your tax and retirement strategy into one plan. We do not replace your existing team or claim to perform their services.',
  },
  {
    q: 'How does the Elite Physician Wealth Blueprint work?',
    a: 'It is a six-step process: Discover, Assess, Strategize, Implement, Optimize, and Review. It carries your strategy from the first conversation through ongoing check-ins.',
  },
  {
    q: 'Does the retirement-plan question affect whether you will work with me?',
    a: 'No. Whether you have a written retirement plan is context only and does not affect qualification.',
  },
  {
    q: 'Is anything on this page financial or tax advice?',
    a: 'No. The information here is educational and is not individualized investment, tax, or legal advice.'
  },
] as const;

/** Collapsed FAQ accordion built on native <details> for zero-JS accessibility. */
export function Faq(): React.ReactElement {
  return (
    <section id="faq" className="lp-section lp-surface-ivory lp-grain">
      <div className="lp-container" style={{ position: 'relative', zIndex: 1, maxWidth: '860px' }}>
        <div className="lp-section-head lp-reveal" style={{ textAlign: 'center', marginInline: 'auto' }}>
          <span className="lp-eyebrow lp-eyebrow--center">Questions, answered</span>
          <h2 style={{ marginTop: '0.75rem' }}>Before you book</h2>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          {FAQS.map((item) => (
            <details key={item.q} className="lp-faq-item lp-reveal" name="epwp-faq">
              <summary className="lp-faq-summary">
                {item.q}
                <PlusIcon className="lp-faq-icon" style={{ fontSize: '1.25rem' }} />
              </summary>
              <p className="lp-faq-body">{item.a}</p>
            </details>
          ))}
        </div>

        <p className="lp-muted" style={{ marginTop: '2rem', fontSize: '0.8125rem', textAlign: 'center', maxWidth: '64ch', marginInline: 'auto' }}>
          This page is educational information only and is not investment, tax, or legal advice.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
          <CtaGroup primaryLabel="Talk to an advisor" align="center" />
        </div>
      </div>
    </section>
  );
}
