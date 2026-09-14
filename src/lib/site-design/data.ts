import deliveryIndex from "./delivery-index.json";

type DeliveryPage = {
  route: string;
  title: string;
  canonical_png: string;
  review_derivative: string;
  mobile_derivative: string;
  manifest: string;
  classification: "REDESIGN_NOW" | "SYSTEM_UTILITY" | "CONTENT_GATE";
  seo_ready: boolean;
  implementation_ready: boolean;
  hold_reason?: string | null;
};

type DeliveryIndex = {
  customer: string;
  selected_home_direction: string;
  selected_direction_name: string;
  homepage_reference: string;
  page_count: number;
  ready_count: number;
  hold_count: number;
  pages: DeliveryPage[];
};

const index = deliveryIndex as DeliveryIndex;

if (index.pages.length !== index.page_count) {
  throw new Error(
    `Site design delivery index expected ${index.page_count} pages but contains ${index.pages.length}.`
  );
}

function labelFromRoute(route: string): string {
  if (route === "/") return "Home";

  return route
    .split("/")
    .filter(Boolean)
    .map((segment) =>
      segment
        .split("-")
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    )
    .join(" / ");
}

function slugFromDerivative(reviewDerivative: string): string {
  return reviewDerivative.replace(/\.review\.webp$/, "");
}

export const siteDesignDelivery = {
  customer: index.customer,
  selectedHomeDirection: index.selected_home_direction.toUpperCase(),
  selectedDirectionName: index.selected_direction_name,
  homepageReference: {
    fileName: index.homepage_reference,
    src: `/site-design/${index.homepage_reference}`,
  },
  pageCount: index.page_count,
  readyCount: index.ready_count,
  holdCount: index.hold_count,
  pages: index.pages.map((page, order) => {
    const slug = slugFromDerivative(page.review_derivative);

    return {
      ...page,
      order: order + 1,
      slug,
      routeLabel: labelFromRoute(page.route),
      imageSrc: `/site-design/pages/${page.review_derivative}`,
      mobileImageSrc: `/site-design/mobile/${page.mobile_derivative}`,
      detailHref: `/site-design/${slug}`,
    };
  }),
} as const;

export type SiteDesignPage = (typeof siteDesignDelivery.pages)[number];

export function getSiteDesignPage(slug: string): SiteDesignPage | undefined {
  return siteDesignDelivery.pages.find((page) => page.slug === slug);
}
