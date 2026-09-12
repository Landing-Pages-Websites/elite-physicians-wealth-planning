import type { Metadata } from "next";
import Link from "next/link";
import { siteDesignDelivery } from "@/lib/site-design/data";
import styles from "./site-design.module.css";

export const metadata: Metadata = {
  title: "Site Design Review",
  description:
    "Internal review gallery for Elite Physician Wealth Planning interior page designs.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SiteDesignPage(): React.JSX.Element {
  const { pages, pageCount } = siteDesignDelivery;

  return (
    <main id="main" className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>Internal review surface</p>
          <h1>Elite Physician Wealth Planning interior designs</h1>
          <p className={styles.summary}>
            Selected direction: Direction {siteDesignDelivery.selectedHomeDirection},{" "}
            &quot;{siteDesignDelivery.selectedDirectionName}&quot;. Revision note:
            the frozen images show alignment and hierarchy, not literal line
            geometry; publish the 36 interior page designs at /site-design.
          </p>
        </div>
        <dl className={styles.facts} aria-label="Review summary">
          <div>
            <dt>Selected direction</dt>
            <dd>Direction {siteDesignDelivery.selectedHomeDirection}</dd>
          </div>
          <div>
            <dt>Design language</dt>
            <dd>{siteDesignDelivery.selectedDirectionName}</dd>
          </div>
          <div>
            <dt>Total routes</dt>
            <dd>{pageCount} interiors</dd>
          </div>
        </dl>
      </header>

      <section className={styles.reference} aria-labelledby="homepage-reference">
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.kicker}>Context only</p>
            <h2 id="homepage-reference">Approved homepage reference</h2>
          </div>
          <a
            className={styles.textLink}
            href={siteDesignDelivery.homepageReference.src}
            aria-label="Open the approved homepage Direction A reference image"
          >
            Open reference image
          </a>
        </div>
        <a
          className={styles.referenceFrame}
          href={siteDesignDelivery.homepageReference.src}
          aria-label="Inspect approved homepage Direction A reference image"
        >
          <img
            src={siteDesignDelivery.homepageReference.src}
            alt="Approved Direction A homepage reference for The Consult Ledger."
          />
        </a>
      </section>

      <section className={styles.notes} aria-label="Revision and build notes">
        <div className={styles.note}>
          <span aria-hidden="true" />
          <p>
            <strong>Line implementation contract:</strong> production uses only
            short section-local connectors, a maximum of one simple path per
            section, no cross-section continuation, and no multi-branch
            topology. The frozen images communicate alignment and hierarchy, not
            literal line geometry.
          </p>
        </div>
        <div className={styles.note}>
          <span aria-hidden="true" />
          <p>
            Named-person placeholders and unresolved content gates remain
            build-time items.
          </p>
        </div>
      </section>

      <section className={styles.gallery} aria-labelledby="interior-gallery">
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.kicker}>Sitemap order</p>
            <h2 id="interior-gallery">{pageCount} interior page comps</h2>
          </div>
          <p className={styles.helper}>
            Open any card for a full-page same-origin inspection view.
          </p>
        </div>

        <ol className={styles.grid}>
          {pages.map((page) => (
            <li key={page.route}>
              <Link
                className={styles.card}
                href={page.detailHref}
                aria-label={`Inspect full-page comp for ${page.routeLabel}`}
              >
                <div className={styles.preview}>
                  <img
                    src={page.imageSrc}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span>{String(page.order).padStart(2, "0")}</span>
                    <code>{page.route}</code>
                  </div>
                  <h3>{page.routeLabel}</h3>
                  <p>
                    <span>Page title:</span> {page.title}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
