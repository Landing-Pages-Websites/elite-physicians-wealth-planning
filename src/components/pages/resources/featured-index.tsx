import {
  ArrowRightIcon,
  ClipboardIcon,
  FileLockIcon,
  FileTextIcon,
} from "@/components/site/icons";

/** Manifest copy for 03-featured-index — content contract, do not edit. */
const FEATURED = {
  headline: "Start where the pressure is clearest.",
  body: "Choose the format that suits how you like to start: a guide to request, articles to browse, or a checkup to work through at your own pace.",
} as const;

type IconComponent = (props: { className?: string }) => React.JSX.Element;

interface FeaturedPath {
  readonly category: string;
  readonly label: string;
  readonly href: string;
  readonly Icon: IconComponent;
}

/** Manifest links in order; labels as the frame letters them. */
const PATHS: readonly FeaturedPath[] = [
  {
    category: "Featured path",
    label: "Open featured path",
    href: "/physician-tax-retirement-guide",
    Icon: FileLockIcon,
  },
  {
    category: "Insights",
    label: "Explore insights",
    href: "/insights",
    Icon: FileTextIcon,
  },
  {
    category: "Your checkup",
    label: "Begin your checkup",
    href: "/checkup",
    Icon: ClipboardIcon,
  },
] as const;

function PathEntry({ path }: { path: FeaturedPath }): React.JSX.Element {
  return (
    <li className="relative pl-9">
      <span
        aria-hidden="true"
        className="absolute top-0 -left-[17px] flex h-9 w-9 items-center justify-center rounded-full border border-gold bg-ivory text-gold-text"
      >
        <path.Icon className="h-4 w-4" />
      </span>
      <p className="font-body text-[11px] font-semibold tracking-[0.22em] text-gold-text uppercase">
        {path.category}
      </p>
      <a
        href={path.href}
        className="group mt-2 inline-flex min-h-11 items-center gap-2.5 font-display text-display-s leading-[1.15] font-medium text-ink transition-colors duration-200 hover:text-gold-text"
      >
        {path.label}
        <ArrowRightIcon className="h-4 w-4 shrink-0 text-gold-text transition-transform duration-200 group-hover:translate-x-0.5" />
      </a>
      <p className="font-body text-body-s text-charcoal/70">{path.href}</p>
    </li>
  );
}

/**
 * 03-featured-index. Asymmetric ivory spread: headline and body left above a
 * vertical gold rail carrying the three real routes, the large advisory
 * photograph holding the right page.
 */
export function FeaturedIndex(): React.JSX.Element {
  return (
    <section
      id="featured-index"
      aria-labelledby="featured-index-heading"
      className="res-featured relative overflow-hidden"
    >
      <div className="va-shell relative grid gap-14 py-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-center lg:gap-20 lg:py-24">
        <div>
          <h2
            id="featured-index-heading"
            className="res-reveal max-w-[15ch] font-display text-display-l leading-[1.08] font-medium tracking-[-0.02em] text-ink"
          >
            {FEATURED.headline}
          </h2>
          <p className="mt-6 max-w-[42ch] font-body text-body-m leading-[1.62] text-charcoal">
            {FEATURED.body}
          </p>
          <ul className="mt-12 space-y-9 border-l border-gold/70 pl-0 [&>li]:ml-0">
            {PATHS.map((path) => (
              <PathEntry key={path.href} path={path} />
            ))}
          </ul>
        </div>
        <figure className="res-featured-photo relative overflow-hidden rounded-[4px]">
          <img
            src="/images/design/resources/elements/03-featured-index-photo.jpg"
            alt="Physician reviewing planning worksheets across an advisory desk"
            width={914}
            height={816}
            className="h-auto w-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
