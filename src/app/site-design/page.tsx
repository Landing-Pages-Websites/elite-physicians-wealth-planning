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
            &quot;{siteDesignDelivery.selectedDirectionName}&quot;. This image-first set gives all{" "}
            {siteDesignDelivery.pageCount} interior routes route-specific page-mode compositions,
            SEO intent contracts, and concrete responsive implementation guidance.
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
          <div>
            <dt>Ready to implement</dt>
            <dd>{siteDesignDelivery.readyCount} routes</dd>
          </div>
          <div>
            <dt>Publication holds</dt>
            <dd>{siteDesignDelivery.holdCount} content-gated routes</dd>
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
            <strong>Designed image-first:</strong> every route was generated section by section
            from its own manifest, then visually reviewed and stitched into a complete page.
            Navigation and footer remain shared implementation chrome, not baked into the frames.
          </p>
        </div>
        <div className={styles.note}>
          <span aria-hidden="true" />
          <p>
            <strong>Truthful publication gates:</strong> {siteDesignDelivery.holdCount} routes
            deliberately await manuscripts, team data, integrations, or contact routing. Their
            designs are implementation-ready, but they must not be published as complete content.
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
                  <p className={page.implementation_ready ? styles.ready : styles.hold}>
                    {page.implementation_ready ? "Implementation-ready" : "Internal hold"}
                  </p>
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
