import Link from "next/link";
import { ArrowRightIcon } from "@/components/site/icons";

/**
 * 06-disclosure-boundary. Navy closing strip: the contact privacy limit in
 * one centered reading group, with the route to the full disclosures. The
 * page's gold line enters at the contracted seam and ends at a dot inside
 * this strip — it does not continue into the footer.
 */
const COPY = {
  headline: "Do not send sensitive records through the website.",
  body: "Submitting a form does not create an advisory relationship. Do not include sensitive personal, medical, tax, legal, or account information.",
  link: "Read disclosures",
} as const;

export function DisclosureBoundary(): React.JSX.Element {
  return (
    <section
      id="disclosure-boundary"
      aria-labelledby="disclosure-boundary-heading"
      data-dark-band
      className="cnt-disclosure cnt-seam-in relative"
    >
      <span aria-hidden="true" className="cnt-line-end" />

      <div className="va-shell flex flex-col items-start gap-4 py-16 text-left sm:items-center sm:text-center lg:py-20">
        <h2
          id="disclosure-boundary-heading"
          className="font-display text-display-s leading-[1.25] font-medium tracking-[-0.01em] text-balance text-ivory-bright sm:text-[1.75rem]"
        >
          {COPY.headline}
        </h2>
        <p className="max-w-[68ch] font-body text-body-m leading-[1.65] text-ivory/70">
          {COPY.body}
        </p>
        <Link
          href="/privacy-disclosures"
          className="mt-2 inline-flex min-h-11 items-center gap-2 font-body text-body-m font-medium text-gold underline underline-offset-4 transition-colors duration-150 hover:text-gold-hover"
        >
          {COPY.link}
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
