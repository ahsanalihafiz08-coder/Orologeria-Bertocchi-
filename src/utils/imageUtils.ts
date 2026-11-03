import React from 'react';

/**
 * Utility functions for rock-solid, instant, zero-failure local image loading.
 */

// Guaranteed local luxury watch asset
export const FALLBACK_WATCH_IMAGE = '/images/fallback_watch.jpg';

// Minimalist, high-performance luxury fallback placeholder as inline SVG data-uri
// Guarantees zero "broken image" or "service unavailable" states even in offline scenarios.
export const EMERGENCY_FALLBACK_SVG =
  'data:image/svg+xml;charset=utf-8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450" fill="none">
      <rect width="600" height="450" fill="#f4efe6"/>
      <circle cx="300" cy="205" r="85" stroke="#c5a059" stroke-width="2" fill="#0c1b33" fill-opacity="0.04"/>
      <circle cx="300" cy="205" r="75" stroke="#dfc181" stroke-width="1.2" stroke-dasharray="4 4"/>
      <path d="M300 150 V205 L335 225" stroke="#c5a059" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="300" cy="205" r="4.5" fill="#c5a059"/>
      <text x="300" y="325" font-family="Playfair Display, Georgia, serif" font-size="15" font-weight="600" fill="#0c1b33" text-anchor="middle" letter-spacing="1">HAUTE HORLOGERIE</text>
      <text x="300" y="348" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="600" fill="#9e7a35" text-anchor="middle" letter-spacing="3">INTEMPOREL GENÈVE</text>
    </svg>`.trim()
  );

/**
 * Automatically intercepts and resolves any external link or relative path
 * into a direct root-relative local public asset path (/images/...).
 */
export const resolveLocalImagePath = (src?: string): string => {
  if (!src) return FALLBACK_WATCH_IMAGE;
  if (src.startsWith('data:')) return src;

  // Local assets are already direct absolute public paths
  if (src.startsWith('/images/')) {
    return src;
  }
  if (src.startsWith('/assets/images/')) {
    return src.replace('/assets/images/', '/images/');
  }

  // Intercept any legacy external i.ibb.co URL and map to local /images/ asset
  if (src.includes('i.ibb.co/')) {
    const parts = src.split('i.ibb.co/')[1];
    if (parts) {
      return `/images/${parts.replace('/', '_')}`;
    }
  }

  // Any other external or non-root relative path
  if (src.startsWith('http://') || src.startsWith('https://')) {
    const filename = src.split('/').pop();
    if (filename && (filename.endsWith('.jpg') || filename.endsWith('.png') || filename.endsWith('.webp'))) {
      return `/images/${filename}`;
    }
    return FALLBACK_WATCH_IMAGE;
  }

  return src.startsWith('/') ? src : `/${src}`;
};

/**
 * Bulletproof multi-tier fallback handler for image load errors:
 * Automatically intercepts external links, broken network requests, or missing files
 * and swaps them with local assets, guaranteeing zero "service unavailable" errors.
 */
export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  customFallback?: string
) => {
  const target = e.currentTarget;
  const stage = parseInt(target.dataset.fallbackStage || '0', 10);

  // Prevent endless error loops
  if (stage >= 3) {
    target.onerror = null;
    target.src = EMERGENCY_FALLBACK_SVG;
    return;
  }

  target.dataset.fallbackStage = String(stage + 1);

  // Stage 0 -> 1: If URL had external i.ibb.co domain, map to local /images/ asset
  if (stage === 0 && target.src.includes('i.ibb.co/')) {
    const parts = target.src.split('i.ibb.co/')[1];
    if (parts) {
      target.src = `/images/${parts.replace('/', '_')}`;
      return;
    }
  }

  // Stage 1 -> 2: Switch to guaranteed primary local luxury watch asset
  if (stage <= 1) {
    target.src = customFallback || FALLBACK_WATCH_IMAGE;
    return;
  }

  // Stage 2 -> 3: Ultimate inline SVG fallback that never fails
  target.onerror = null;
  target.src = EMERGENCY_FALLBACK_SVG;
};
