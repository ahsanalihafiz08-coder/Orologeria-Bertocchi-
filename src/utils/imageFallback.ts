/**
 * Luxury Watch Placeholder Generator
 * Provides an individual, elegant SVG placeholder branded for each specific timepiece
 * if an image network error occurs, ensuring cards never show duplicate watch photos.
 */
export const getLuxuryWatchPlaceholder = (title: string): string => {
  const cleanTitle = (title || 'Haute Horlogerie Timepiece')
    .replace(/[<>&"']/g, '')
    .slice(0, 40);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450" fill="none">
  <rect width="600" height="450" fill="#f4efe6"/>
  <circle cx="300" cy="200" r="90" stroke="#c5a059" stroke-width="2" fill="#0c1b33" fill-opacity="0.04"/>
  <circle cx="300" cy="200" r="80" stroke="#dfc181" stroke-width="1.2" stroke-dasharray="4 4"/>
  <path d="M300 140 V200 L340 220" stroke="#c5a059" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="300" cy="200" r="4.5" fill="#c5a059"/>
  <text x="300" y="320" font-family="Georgia, serif" font-size="16" font-weight="bold" fill="#0c1b33" text-anchor="middle">${cleanTitle}</text>
  <text x="300" y="342" font-family="system-ui, -apple-system, sans-serif" font-size="10" letter-spacing="3" font-weight="600" fill="#9e7a35" text-anchor="middle">INTEMPOREL GENÈVE</text>
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};
