import type { ReactNode } from "react";
import { ClipboardIcon, MessageIcon, NodesIcon } from "@/components/site/icons";

/**
 * 02-call-expectations. The warm paper ledger from the ref: expectation
 * rows on a gold spine at left, a ruled "what this is not" rail at right.
 * Everything is live text on CSS surfaces — the frame contracts no raster.
 */
const EXPECTATIONS = [
  {
    text: "A confidential conversation about goals and planning concerns",
    icon: MessageIcon,
  },
  {
    text: "A review of decisions in motion across tax, retirement, investments, practice, and legacy",
    icon: NodesIcon,
  },
  {
    text: "A clear description of process and next steps",
    icon: ClipboardIcon,
  },
] as const;

const NOT_LIST = [
  "Not a product presentation",
  "Not individualized tax, legal, or investment advice",
  "Does not create an advisory relationship",
] as const;

/** Circle-crossed marker for the not-list, same 24-grid stroke family. */
function NotIcon(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5 shrink-0 text-ink/60"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 9 6 6M15 9l-6 6" />
    </svg>
  );
}

function ExpectationRow({
  icon: Icon,
  children,
}: {
  icon: typeof MessageIcon;
  children: ReactNode;
}): React.JSX.Element {
  return (
    <li className="relative flex gap-5 pb-8 last:pb-0">
      <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/70 bg-white text-ink">
        <Icon className="h-5 w-5" />
      </span>
      <p className="pt-2.5 font-body text-body-m leading-[1.6] text-charcoal">
        {children}
      </p>
    </li>
  );
}

export function CallExpectations(): React.JSX.Element {
  return (
    <section
      id="call-expectations"
      aria-labelledby="call-expectations-heading"
      className="sch-expect sch-seam-in sch-seam-out relative"
    >
      <div className="va-shell py-20 lg:py-24">
        <div className="sch-expect-card rounded-sm px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_1px_minmax(0,1fr)] lg:gap-14">
            <div>
              <h2
                id="call-expectations-heading"
                className="font-display text-display-m leading-[1.08] font-medium tracking-[-0.02em] text-ink"
              >
                What to expect.
              </h2>
              <ol className="relative mt-10 before:absolute before:top-2 before:bottom-2 before:left-[21px] before:w-px before:bg-gold/60">
                {EXPECTATIONS.map(({ text, icon }) => (
                  <ExpectationRow key={text} icon={icon}>
                    {text}
                  </ExpectationRow>
                ))}
              </ol>
            </div>

            <div aria-hidden="true" className="hidden bg-ink/10 lg:block" />

            <aside aria-label="What this is not">
              <p className="font-body text-[12px] font-semibold tracking-[0.24em] text-gold-text uppercase">
                What this is not
              </p>
              <ul className="mt-6">
                {NOT_LIST.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-b border-ink/10 py-5 first:pt-0 last:border-b-0 last:pb-0"
                  >
                    <NotIcon />
                    <p className="font-body text-body-m leading-[1.6] text-charcoal">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
