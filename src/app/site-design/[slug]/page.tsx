import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getSiteDesignPage,
  siteDesignDelivery,
} from "@/lib/site-design/data";
import styles from "../site-design.module.css";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams(): Array<{ slug: string }> {
  return siteDesignDelivery.pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSiteDesignPage(slug);

  if (!page) {
    return {
      title: "Site Design Review",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${page.routeLabel} | Site Design Review`,
    description: `Internal full-page inspection view for ${page.route}.`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function SiteDesignDetailPage({
  params,
}: PageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const page = getSiteDesignPage(slug);

  if (!page) notFound();

  const previous = siteDesignDelivery.pages[page.order - 2];
  const next = siteDesignDelivery.pages[page.order];

  return (
    <main id="main" className={`${styles.page} ${styles.detailPage}`}>
      <header className={styles.detailHeader}>
        <div>
          <p className={styles.kicker}>
            {String(page.order).padStart(2, "0")} of{" "}
            {siteDesignDelivery.pageCount}
          </p>
          <h1>{page.routeLabel}</h1>
          <p className={styles.detailTitle}>{page.title}</p>
          <p className={styles.routeLine}>
            Route: <code>{page.route}</code>
          </p>
        </div>
        <nav className={styles.detailActions} aria-label="Inspection controls">
          <Link href="/site-design">Back to gallery</Link>
          <a href={page.imageSrc}>Open image file</a>
          {previous ? (
            <Link href={previous.detailHref}>Previous</Link>
          ) : (
            <span aria-disabled="true">Previous</span>
          )}
          {next ? (
            <Link href={next.detailHref}>Next</Link>
          ) : (
            <span aria-disabled="true">Next</span>
          )}
        </nav>
      </header>

      <section className={styles.inspectSurface} aria-label="Full-page comp">
        <img
          src={page.imageSrc}
          alt={`Full-page design comp for ${page.routeLabel}, route ${page.route}.`}
        />
      </section>
    </main>
  );
}
