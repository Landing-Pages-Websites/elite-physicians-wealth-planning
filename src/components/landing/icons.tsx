import type { SVGProps } from 'react';

/**
 * Custom 1.5px line icons - one coherent family, no emoji, no icon-font
 * dependency. Sized 1em so callers control scale via font-size / width.
 */

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps): IconProps {
  return {
    width: '1em',
    height: '1em',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: false,
    ...props,
  };
}

export function PhoneIcon(props: IconProps): React.ReactElement {
  return (
    <svg {...base(props)}>
      <path d="M6.5 3.5h3l1.2 4-2 1.3a12 12 0 0 0 5.2 5.2l1.3-2 4 1.2v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps): React.ReactElement {
  return (
    <svg {...base(props)}>
      <path d="M12 3 5 6v5c0 4.3 2.9 7.6 7 9 4.1-1.4 7-4.7 7-9V6l-7-3Z" />
      <path d="m9.2 11.8 1.9 1.9 3.7-3.9" />
    </svg>
  );
}

export function CompassIcon(props: IconProps): React.ReactElement {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </svg>
  );
}

export function StethoscopeIcon(props: IconProps): React.ReactElement {
  return (
    <svg {...base(props)}>
      <path d="M6 3v5a4 4 0 0 0 8 0V3" />
      <path d="M10 15v1a5 5 0 0 0 5 5 4 4 0 0 0 4-4v-3" />
      <circle cx="19" cy="11" r="2" />
    </svg>
  );
}

export function RouteIcon(props: IconProps): React.ReactElement {
  return (
    <svg {...base(props)}>
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M8.5 18H14a3.5 3.5 0 0 0 0-7H10a3.5 3.5 0 0 1 0-7h5.5" />
    </svg>
  );
}

export function ScaleIcon(props: IconProps): React.ReactElement {
  return (
    <svg {...base(props)}>
      <path d="M12 3v18M7 21h10" />
      <path d="M12 6 5 8l-2.5 6a3 3 0 0 0 5 0L5 8m14 0-2.5 6a3 3 0 0 0 5 0L19 8l-7 2" />
    </svg>
  );
}

export function LayersIcon(props: IconProps): React.ReactElement {
  return (
    <svg {...base(props)}>
      <path d="m12 3 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4M4 17l8 4 8-4" />
    </svg>
  );
}

export function PlusIcon(props: IconProps): React.ReactElement {
  return (
    <svg {...base(props)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
