import React from 'react';

/**
 * Utility functions for rock-solid, instant, zero-failure local image loading.
 */

// Guaranteed local luxury watch asset
export const FALLBACK_WATCH_IMAGE = '/images/fallback_watch.jpg';

/**
 * Automatically resolves any path into a direct root-relative local public asset path (/images/...).
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

  // If any other external URL, extract the filename and map to local /images/
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
 * Fallback handler: immediately swaps with the guaranteed authentic local timepiece photo
 * without any SVG clocks, placeholder spinners, or broken states.
 */
export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  customFallback?: string
) => {
  const target = e.currentTarget;
  // Prevent infinite loops if fallback itself fails
  if (target.dataset.failed === 'true') {
    return;
  }
  target.dataset.failed = 'true';
  target.onerror = null;
  target.src = customFallback || FALLBACK_WATCH_IMAGE;
};
