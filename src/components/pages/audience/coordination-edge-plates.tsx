import type { CoordinationEdges } from "./content-types";

/**
 * The two edge-touching architectural plates declared by the CRNAs and execs
 * coordination composition maps: each complete fragment hugs its viewport
 * edge (the source crops already exit the frame) while the white field
 * between them stays quiet for the live diagram. Desktop only — the mobile
 * recomposition shows the right fragment inline after the diagram instead.
 */
export function EdgePlates({
  edges,
}: {
  edges: CoordinationEdges;
}): React.JSX.Element {
  return (
    <>
      <figure className="aud-map-edge absolute top-1/2 left-0 hidden w-[10%] -translate-y-1/2 lg:block">
        <img
          src={edges.left.src}
          alt={edges.left.alt}
          aria-hidden={edges.left.alt === "" ? true : undefined}
          width={260}
          height={640}
          className="h-auto w-full"
        />
      </figure>
      <figure className="aud-map-edge absolute top-1/2 right-0 hidden w-[19%] -translate-y-1/2 lg:block">
        <img
          src={edges.right.src}
          alt={edges.right.alt}
          aria-hidden={edges.right.alt === "" ? true : undefined}
          width={400}
          height={440}
          className="h-auto w-full"
        />
      </figure>
    </>
  );
}

/** Mobile counterpart: the right room fragment as a small inline plate. */
export function EdgePlateInline({
  edges,
}: {
  edges: CoordinationEdges;
}): React.JSX.Element {
  return (
    <figure className="aud-map-edge relative mt-12 -mr-6 ml-auto w-48 sm:-mr-10 lg:hidden">
      <img
        src={edges.right.src}
        alt={edges.right.alt}
        aria-hidden={edges.right.alt === "" ? true : undefined}
        width={200}
        height={220}
        className="h-auto w-full"
      />
    </figure>
  );
}
