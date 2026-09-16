import Image from "next/image";

const EYEBROW = "Audience focus";
const HEADLINE = "Why the focus is on medical professionals.";
const BODY =
  "Physicians often spend their careers caring for others while postponing their own planning. The objective is a disciplined, structured, coordinated approach to building and preserving wealth.";

/**
 * 04-why-physicians. Mist clinical band: the anonymous-physician collage
 * anchors the left column (live "Audience focus" eyebrow above it — the
 * baked one is windowed out of the raster), a white-framed desk/corridor
 * inset overlaps its right edge on desktop, and the copy holds the right
 * column. No contextual figure is presented as named staff.
 */
export function WhyPhysicians(): React.JSX.Element {
  return (
    <section
      id="why-physicians"
      aria-labelledby="why-physicians-heading"
      className="mme-audience relative overflow-hidden"
    >
      <div className="va-shell relative py-20 lg:py-24">
        <span aria-hidden="true" className="mme-seam mme-seam-top" />
        <span aria-hidden="true" className="mme-seam mme-seam-bottom" />
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-body text-body-s font-semibold tracking-[0.22em] text-gold-text uppercase">
              {EYEBROW}
            </p>
            <div className="relative mt-5">
              <div className="mme-collage">
                <Image
                  src="/images/design/meet-michael-epps/elements/physician-audience-anchor.jpg"
                  alt=""
                  aria-hidden="true"
                  width={430}
                  height={864}
                />
              </div>
              <figure className="mme-collage-inset hidden lg:block">
                <Image
                  src="/images/design/meet-michael-epps/elements/physician-desk-inset.jpg"
                  alt=""
                  aria-hidden="true"
                  width={320}
                  height={225}
                />
              </figure>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2
              id="why-physicians-heading"
              className="va-reveal max-w-[18ch] font-display text-display-m leading-[1.14] font-medium tracking-[-0.01em] text-balance text-ink"
            >
              {HEADLINE}
            </h2>
            <span aria-hidden="true" className="mt-7 block h-px w-20 bg-gold" />
            <p className="mt-6 max-w-[48ch] font-body text-body-m leading-[1.65] text-charcoal">
              {BODY}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
