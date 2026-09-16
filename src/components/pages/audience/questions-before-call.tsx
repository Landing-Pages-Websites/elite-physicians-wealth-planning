import type { QuestionsBeforeCallContent } from "./content-types";

function QuestionItems({
  content,
}: {
  content: QuestionsBeforeCallContent;
}): React.JSX.Element {
  const isCards = content.style === "cards";
  return (
    <ul className="mt-9 grid gap-6 sm:grid-cols-3 sm:gap-8">
      {content.items.map((item) => (
        <li
          key={item}
          className={
            isCards
              ? "aud-question-card px-5 py-5"
              : "border-t border-gold/60 pt-4"
          }
        >
          <span className="flex items-start gap-3 font-body text-body-m leading-[1.55] text-ink">
            <span
              aria-hidden="true"
              className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
            />
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Three questions ticked along one horizontal gold rail (band styles). */
function RailQuestions({
  items,
  tone,
}: {
  items: readonly string[];
  tone: "light" | "dark";
}): React.JSX.Element {
  return (
    <div className="relative mt-10">
      <div
        aria-hidden="true"
        className="absolute top-[3px] right-0 left-0 hidden h-px bg-gold/70 sm:block"
      />
      <ul className="relative grid gap-6 border-l border-gold/60 pl-5 sm:grid-cols-3 sm:gap-8 sm:border-l-0 sm:pl-0">
        {items.map((item) => (
          <li key={item} className="relative sm:pt-6">
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 hidden h-[7px] w-[7px] rotate-45 bg-gold sm:block"
            />
            <span
              className={`font-body text-body-m leading-[1.55] ${
                tone === "dark" ? "text-ivory" : "text-ink"
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Navy exit band; carries the note as live copy on the band styles. */
function ExitBand({ note }: { note?: string }): React.JSX.Element {
  if (!note) {
    return (
      <div aria-hidden="true" className="aud-questions-exit relative h-14">
        <div className="va-shell relative h-full">
          <div className="absolute top-1/2 left-6 h-px w-[38%] bg-gold/80 sm:left-10 lg:left-[var(--page-pad)]" />
          <div className="absolute top-1/2 left-[calc(38%+1.5rem)] h-[5px] w-[5px] -translate-y-1/2 rotate-45 bg-gold sm:left-[calc(38%+2.5rem)] lg:left-[calc(38%+var(--page-pad))]" />
        </div>
      </div>
    );
  }
  return (
    <div data-dark-band className="aud-questions-exit relative">
      <div className="va-shell relative flex min-h-14 items-center gap-5 py-3">
        <span aria-hidden="true" className="h-px w-[18%] shrink-0 bg-gold/80" />
        <span
          aria-hidden="true"
          className="h-[5px] w-[5px] shrink-0 rotate-45 bg-gold"
        />
        <p className="max-w-2xl font-body text-body-s leading-relaxed text-mist/85">
          {note}
        </p>
      </div>
    </div>
  );
}

/** Dentists ref: ivory headline strip, questions in white on a navy band. */
function NavyBandStyle({
  content,
}: {
  content: QuestionsBeforeCallContent;
}): React.JSX.Element {
  return (
    <div className="relative">
      <div className="va-shell grid items-end gap-8 pt-14 pb-10 lg:grid-cols-[minmax(0,9fr)_minmax(0,3fr)]">
        <h2
          id="questions-before-call-heading"
          className="flex items-baseline gap-5 font-display text-display-m leading-[1.12] font-medium tracking-[-0.015em] text-ink"
        >
          <span
            aria-hidden="true"
            className="hidden h-px w-12 shrink-0 self-center bg-gold lg:block"
          />
          {content.headline}
        </h2>
        <figure className="aud-bleed-right relative -mx-6 h-28 sm:-mx-10 lg:mx-0 lg:h-32 lg:self-stretch">
          <img
            src={content.stillLife.src}
            alt={content.stillLife.alt}
            width={296}
            height={240}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: content.stillLife.objectPosition }}
          />
        </figure>
      </div>
      <div data-dark-band className="aud-questions-band">
        <div className="va-shell grid gap-10 py-12 lg:grid-cols-[minmax(0,9fr)_minmax(0,3fr)] lg:gap-14">
          <RailQuestions items={content.items} tone="dark" />
          <p className="self-center font-body text-body-s italic leading-relaxed text-mist/75">
            {content.note}
          </p>
        </div>
      </div>
    </div>
  );
}

/** CRNAs ref: material band top-right, rail questions, note in exit band. */
function MaterialBandStyle({
  content,
}: {
  content: QuestionsBeforeCallContent;
}): React.JSX.Element {
  return (
    <div className="relative">
      <div className="va-shell pt-12 pb-14 lg:pt-14">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <h2
            id="questions-before-call-heading"
            className="font-display text-display-m leading-[1.12] font-medium tracking-[-0.015em] text-balance text-ink"
          >
            {content.headline}
          </h2>
          <figure className="aud-bleed-right relative -mx-6 h-32 sm:-mx-10 lg:mx-0 lg:h-40">
            <img
              src={content.stillLife.src}
              alt={content.stillLife.alt}
              width={456}
              height={170}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: content.stillLife.objectPosition }}
            />
          </figure>
        </div>
        <RailQuestions items={content.items} tone="light" />
      </div>
      <ExitBand note={content.note} />
    </div>
  );
}

/** Execs ref: centred headline and rail, pen plate at the right edge. */
function CenteredRailStyle({
  content,
}: {
  content: QuestionsBeforeCallContent;
}): React.JSX.Element {
  return (
    <div className="relative">
      <figure className="aud-bleed-right absolute inset-y-0 right-0 hidden w-36 lg:block">
        <img
          src={content.stillLife.src}
          alt={content.stillLife.alt}
          width={196}
          height={348}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: content.stillLife.objectPosition }}
        />
      </figure>
      <div className="va-shell pt-14 pb-14 lg:pr-44">
        <h2
          id="questions-before-call-heading"
          className="text-center font-display text-display-m leading-[1.12] font-medium tracking-[-0.015em] text-balance text-ink"
        >
          {content.headline}
        </h2>
        <RailQuestions items={content.items} tone="light" />
        <figure className="relative mt-10 ml-auto h-32 w-28 lg:hidden">
          <img
            src={content.stillLife.src}
            alt={content.stillLife.alt}
            width={196}
            height={348}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: content.stillLife.objectPosition }}
          />
        </figure>
      </div>
      <ExitBand note={content.note} />
    </div>
  );
}

/** physicians/surgeons refs: question strip with the note in the body. */
function StripStyle({
  content,
}: {
  content: QuestionsBeforeCallContent;
}): React.JSX.Element {
  return (
    <div className="relative">
      <div className="va-shell grid items-center gap-10 py-16 lg:grid-cols-[minmax(0,9fr)_minmax(0,3fr)] lg:py-20">
        <div>
          <h2
            id="questions-before-call-heading"
            className="flex items-baseline gap-5 font-display text-display-m leading-[1.12] font-medium tracking-[-0.015em] text-ink"
          >
            <span
              aria-hidden="true"
              className="hidden h-px w-12 shrink-0 self-center bg-gold lg:block"
            />
            {content.headline}
          </h2>
          <QuestionItems content={content} />
          <p className="mt-8 max-w-2xl font-body text-body-s italic leading-relaxed text-charcoal/80">
            {content.note}
          </p>
        </div>
        {/* Material still-life edge; the composition map declares the
            intentional right-edge touch. */}
        <figure className="aud-bleed-right relative -mx-6 aspect-[3/2] sm:-mx-10 lg:mx-0 lg:aspect-auto lg:self-stretch lg:min-h-[300px]">
          <img
            src={content.stillLife.src}
            alt={content.stillLife.alt}
            width={296}
            height={490}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: content.stillLife.objectPosition }}
          />
        </figure>
      </div>
      <ExitBand />
    </div>
  );
}

function QuestionsBody({
  content,
}: {
  content: QuestionsBeforeCallContent;
}): React.JSX.Element {
  switch (content.style) {
    case "navy-band":
      return <NavyBandStyle content={content} />;
    case "material-band":
      return <MaterialBandStyle content={content} />;
    case "centered-rail":
      return <CenteredRailStyle content={content} />;
    default:
      return <StripStyle content={content} />;
  }
}

/**
 * 05-questions-before-call — a true strip: short question group on ivory
 * (cards, open rail, material band or centred rail) or in white on a navy
 * band (dentists), always resolving through the navy exit band that carries
 * the page-local line toward the closing section.
 */
export function QuestionsBeforeCall({
  content,
}: {
  content: QuestionsBeforeCallContent;
}): React.JSX.Element {
  return (
    <section
      id="questions-before-call"
      aria-labelledby="questions-before-call-heading"
      className="aud-questions relative overflow-hidden"
    >
      {/* Spine continuing down from the coordination map. */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 hidden h-10 w-px bg-gold/70 lg:block"
      />
      <QuestionsBody content={content} />
    </section>
  );
}
