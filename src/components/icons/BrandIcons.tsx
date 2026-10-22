import React from 'react';

// Official Simple Icons SVG paths for authentic brand logos

export const WhatsAppIcon: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-5 h-5',
  size = 20,
}) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="WhatsApp"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const FacebookIcon: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-5 h-5',
  size = 20,
}) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Facebook"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-5 h-5',
  size = 20,
}) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Instagram"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// Luxury Brand Logo Emblems
export const RolexLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Rolex Crown">
    <circle cx="2.5" cy="8" r="1.3" />
    <circle cx="7" cy="5" r="1.3" />
    <circle cx="12" cy="4" r="1.4" />
    <circle cx="17" cy="5" r="1.3" />
    <circle cx="21.5" cy="8" r="1.3" />
    <path d="M3.2 9.4L6.5 17h11l3.3-7.6-4.5 3.3-4.3-6.2-4.3 6.2zM6 18.2h12v1.8c0 .3-.3.6-.6.6H6.6a.6.6 0 0 1-.6-.6z" />
  </svg>
);

export const PatekLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Patek Philippe Cross">
    <path d="M12 2c-.6 0-1 .4-1 1v2.5c-.8-.5-1.8-.7-2.8-.4-1.3.4-2.1 1.5-2.2 2.9-.1 1.1.4 2.2 1.3 2.8H5c-.6 0-1 .4-1 1s.4 1 1 1h2.3c-.9.6-1.4 1.7-1.3 2.8.1 1.4.9 2.5 2.2 2.9 1 .3 2 .1 2.8-.4V21c0 .6.4 1 1 1s1-.4 1-1v-2.5c.8.5 1.8.7 2.8.4 1.3-.4 2.1-1.5 2.2-2.9.1-1.1-.4-2.2-1.3-2.8H19c.6 0 1-.4 1-1s-.4-1-1-1h-2.3c.9-.6 1.4-1.7 1.3-2.8-.1-1.4-.9-2.5-2.2-2.9-1-.3-2-.1-2.8.4V3c0-.6-.4-1-1-1zm0 7.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
  </svg>
);

export const AudemarsLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Audemars Piguet AP">
    <path d="M7.8 4h2.4l4.2 14h-2.3l-.8-3.1h-4.6l-.8 3.1H3.6zm.5 8.9h3.4l-1.7-6.5zm7.2-6.9h4.3c2.2 0 3.8 1.4 3.8 3.5s-1.6 3.5-3.8 3.5h-2.1V18h-2.2zm2.2 5.1h1.9c.9 0 1.7-.5 1.7-1.6s-.8-1.6-1.7-1.6h-1.9z" />
  </svg>
);

export const CartierLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Cartier Monogram">
    <path d="M10.2 6.5c-3.1 0-5.5 2.5-5.5 5.5s2.4 5.5 5.5 5.5c1.8 0 3.3-.8 4.2-2.1l-1.6-1.1c-.6.8-1.5 1.3-2.6 1.3-1.9 0-3.4-1.5-3.4-3.6s1.5-3.6 3.4-3.6c1.1 0 2 .5 2.6 1.3l1.6-1.1c-.9-1.3-2.4-2.1-4.2-2.1zm3.6 0c-.8 0-1.5.2-2.1.6 1.1 1.2 1.8 2.9 1.8 4.9s-.7 3.7-1.8 4.9c.6.4 1.3.6 2.1.6 3.1 0 5.5-2.5 5.5-5.5s-2.4-5.5-5.5-5.5zm0 1.9c1.9 0 3.4 1.5 3.4 3.6s-1.5 3.6-3.4 3.6c-.6 0-1.1-.1-1.6-.4.5-.9.8-2.1.8-3.2 0-1.1-.3-2.3-.8-3.2.5-.3 1-.4 1.6-.4z" />
  </svg>
);

export const TudorLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Tudor Shield">
    <path d="M12 2.5L4 5v6.5C4 16.8 7.4 21 12 22.5c4.6-1.5 8-5.7 8-11V5zm0 2.2l6 1.9v4.9c0 4.1-2.6 7.7-6 9.1-3.4-1.4-6-5-6-9.1V6.6zm-4 4.5v1.8h8V9.2zm3 3v4.6h2v-4.6z" />
  </svg>
);

export const OmegaLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Omega Symbol">
    <path d="M12 3.5C7.3 3.5 3.5 7.3 3.5 12c0 2.7 1.2 5.1 3.2 6.7H4.5v2.3h4.3v-2.3H8c-2.3-1.3-3.8-3.8-3.8-6.7 0-4.3 3.5-7.8 7.8-7.8s7.8 3.5 7.8 7.8c0 2.9-1.5 5.4-3.8 6.7h-.8v2.3h4.3v-2.3h-2.2c2-1.6 3.2-4 3.2-6.7 0-4.7-3.8-8.5-8.5-8.5z" />
  </svg>
);

export const BreguetLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Breguet Emblem">
    <path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm-4 3.5h4.2c1.7 0 2.8.9 2.8 2.2 0 .9-.5 1.6-1.3 1.9 1.1.3 1.8 1.1 1.8 2.2 0 1.5-1.3 2.5-3.1 2.5H8zm2 1.8v2h2c.6 0 1.1-.3 1.1-.9 0-.6-.5-.9-1.1-.9zm0 3.6v2.2h2.2c.7 0 1.2-.4 1.2-1.1 0-.7-.5-1.1-1.2-1.1z" />
  </svg>
);

export const VacheronLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Vacheron Constantin Maltese Cross">
    <path d="M12 2l-2.6 6.5L3 6l4.2 6-4.2 6 6.4-2.5L12 22l2.6-6.5L21 18l-4.2-6 4.2-6-6.4 2.5z" />
  </svg>
);
