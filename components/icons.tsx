import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2.5 5.5C2.5 4 3.7 2.8 5.2 2.8h1.6c.7 0 1.3.5 1.5 1.2l.8 3c.2.6 0 1.3-.5 1.7l-1.3 1c1 2.1 2.7 3.8 4.8 4.8l1-1.3c.4-.5 1.1-.7 1.7-.5l3 .8c.7.2 1.2.8 1.2 1.5v1.6c0 1.5-1.2 2.7-2.7 2.7C10.1 21.6 2.5 14 2.5 5.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.6 1.1 6.5L12 21.4l-5.8 3.05 1.1-6.5-4.7-4.6 6.5-.95L12 2.5Z" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.8-.1-1.6-.15-2.4-.15-2.4 0-4.05 1.45-4.05 4.15v2.3H7.7V13h2.5v8h3.3Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function YelpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.1 2.3c.9-.2 1.7.5 1.7 1.4l.3 7.4c0 1-1 1.6-1.9 1.2L9.6 10c-.7-.4-.9-1.3-.4-2L13 2.6c0-.1.1-.2.1-.3Zm-1.6 12.4c.5-.7 1.6-.6 2 .2l1.6 3.3c.4.8-.2 1.7-1 1.6l-3.6-.5c-.9-.1-1.3-1.2-.7-1.9l1.7-2.7Zm-2.2-1.4c.8.3 1 1.3.4 1.9l-2.5 2.6c-.6.7-1.8.3-1.9-.6l-.4-3.6c-.1-.9.8-1.5 1.6-1.2l2.8 1Zm-.2-3.6c.4.8-.2 1.7-1.1 1.6L4.3 11c-.9-.1-1.3-1.2-.6-1.9l2.7-2.7c.6-.6 1.7-.3 2 .5l1 2.6Zm7.5 5.1c-.8.1-1.4-.7-1.1-1.5l1.2-3.4c.3-.8 1.4-1 2-.3l2.3 2.8c.6.7.1 1.8-.8 1.8l-3.6.6Z" />
    </svg>
  );
}

export function GoogleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M21.6 12.2c0-.7-.06-1.2-.18-1.8H12v3.4h5.4c-.1.9-.7 2.2-1.95 3.1l-.02.12 2.83 2.18.2.02c1.8-1.66 2.84-4.1 2.84-7.04Z" fill="#4285F4" />
      <path d="M12 22c2.57 0 4.73-.85 6.3-2.3l-3-2.32c-.8.56-1.88.95-3.3.95-2.52 0-4.66-1.66-5.42-3.96l-.11.01-2.94 2.27-.04.11C4.05 19.6 7.77 22 12 22Z" fill="#34A853" />
      <path d="M6.58 14.37c-.2-.6-.32-1.24-.32-1.9 0-.66.12-1.3.31-1.9l-.005-.13L3.6 8.13l-.1.05A9.98 9.98 0 0 0 2.4 12.47c0 1.6.39 3.12 1.1 4.46l3.08-2.56Z" fill="#FBBC05" />
      <path d="M12 6.6c1.79 0 3 .77 3.69 1.42l2.69-2.63C16.72 3.9 14.57 3 12 3 7.77 3 4.05 5.4 3.5 9.01l3.07 2.56C7.34 8.26 9.48 6.6 12 6.6Z" fill="#EA4335" />
    </svg>
  );
}

/** Simple boba-cup mark used as the logo glyph. */
export function BobaCupIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path d="M14 6l2.5-2.5h15L34 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M11 12h26l-2.2 28.2A4 4 0 0 1 30.8 44H17.2a4 4 0 0 1-4-3.8L11 12Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M12 20h24" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M27 4l-4 16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="18" cy="34" r="2" fill="currentColor" />
      <circle cx="25" cy="37" r="2" fill="currentColor" />
      <circle cx="30" cy="32" r="2" fill="currentColor" />
      <circle cx="22" cy="30" r="2" fill="currentColor" />
    </svg>
  );
}
