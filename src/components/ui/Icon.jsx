/**
 * Single inline icon set. Keeping icons as path data avoids an icon
 * dependency and keeps every glyph on the same 24x24 grid and stroke weight.
 */
const ICONS = {
  code: ['M9 7 4 12l5 5', 'M15 7l5 5-5 5', 'M13.5 4l-3 16'],
  browser: ['M3 5.5h18v13H3z', 'M3 9.5h18', 'M6 7.5h.01', 'M8.5 7.5h.01'],
  mobile: ['M7.5 2.5h9v19h-9z', 'M10.5 18.5h3'],
  workflow: [
    'M5 4.5h4v4H5z',
    'M15 15.5h4v4h-4z',
    'M9 6.5h3a3 3 0 0 1 3 3v8',
    'M5 8.5v6a3 3 0 0 0 3 3h3',
  ],
  video: ['M3.5 6.5h11v11h-11z', 'M14.5 10.5 20.5 7v10l-6-3.5'],
  palette: [
    'M12 3a9 9 0 1 0 0 18c1.2 0 1.8-.8 1.8-1.7 0-1.6 1-2.3 2.4-2.3h1.3A3.5 3.5 0 0 0 21 13.5C21 7.9 17 3 12 3z',
    'M8 9.5h.01',
    'M12 7.5h.01',
    'M15.5 9.5h.01',
  ],
  target: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 'M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z', 'M12 11.5h.01'],
  layers: ['M12 3 3 8l9 5 9-5-9-5z', 'M3 13l9 5 9-5'],
  compass: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z', 'M15.5 8.5l-2.2 5.3-5.3 2.2 2.2-5.3z'],
  spark: ['M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z'],
  shield: ['M12 3l7.5 3v6c0 4.6-3.2 7.7-7.5 9.2C7.7 19.7 4.5 16.6 4.5 12V6z', 'M9 12l2.2 2.2L15 10.5'],
  gauge: ['M4 17a9 9 0 1 1 16 0', 'M12 17l4-5'],
  chat: ['M4 5.5h16v10H9l-5 4z'],
  check: ['M20 6.5 9.5 17 4.5 12'],
  arrowRight: ['M4.5 12h14', 'M13 6.5l6 5.5-6 5.5'],
  arrowUp: ['M12 19.5v-14', 'M6 11.5l6-6 6 6'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  close: ['M6.5 6.5l11 11', 'M17.5 6.5l-11 11'],
  chevronDown: ['M6.5 9.5l5.5 5.5 5.5-5.5'],
  plus: ['M12 5.5v13', 'M5.5 12h13'],
  minus: ['M5.5 12h13'],
  search: ['M11 4.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z', 'M16 16l3.5 3.5'],
  mail: ['M3.5 5.5h17v13h-17z', 'M3.5 7.5 12 13.5l8.5-6'],
  link: [
    'M10.5 13.5a4 4 0 0 0 5.7 0l2-2a4 4 0 0 0-5.7-5.7l-1 1',
    'M13.5 10.5a4 4 0 0 0-5.7 0l-2 2a4 4 0 0 0 5.7 5.7l1-1',
  ],
  linkedin: ['M3.5 3.5h17v17h-17z', 'M8 10.5v7', 'M8 7.3v.01', 'M12 17.5v-4a2.6 2.6 0 0 1 5.2 0v4'],
  instagram: [
    'M7.5 3.5h9a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4h-9a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4z',
    'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
    'M16.8 7.2v.01',
  ],
  facebook: ['M14.5 8.5H16V5.4h-2.2A3.8 3.8 0 0 0 10 9.2v1.8H8v3h2v7h3v-7h2.2l.5-3H13V9.2c0-.4.3-.7.7-.7z'],
  indeed: ['M3.5 7.5h17v12h-17z', 'M9 7.5V5h6v2.5', 'M3.5 12h17'],
  briefcase: ['M3.5 7.5h17v12h-17z', 'M9 7.5V5h6v2.5'],
  quote: ['M7.5 16.5c-2 0-3-1.3-3-3.2 0-3.2 2.4-5.8 5.5-6.8', 'M17 16.5c-2 0-3-1.3-3-3.2 0-3.2 2.4-5.8 5.5-6.8'],
  shoppingCart: ['M3 3h2l2 11h11l2-8H6', 'M9 19a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z', 'M17 19a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z'],
  printer: ['M6 9V4h12v5', 'M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2', 'M6 14h12v7H6z'],
  camera: ['M4 7h4l2-3h4l2 3h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z', 'M12 10a4 4 0 1 0 0 8 4 4 0 0 0 0-8z'],
  headset: ['M3 13a9 9 0 1 1 18 0v4a2 2 0 0 1-2 2h-2v-6h3', 'M5 13v6H4a2 2 0 0 1-2-2v-4h3'],
  trendingUp: ['M22 6 12.5 15.5l-4.5-4.5L2 17', 'M16 6h6v6'],
};

export default function Icon({ name, size = 24, className = '', label, strokeWidth = 1.6 }) {
  const paths = ICONS[name];
  if (!paths) return null;
  const isFilled = name === 'facebook';

  return (
    <svg
      className={'icon ' + className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={label ? 'img' : 'presentation'}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : 'true'}
      focusable="false"
    >
      {paths.map((d) => (
        <path key={d} d={d} fill={isFilled ? 'currentColor' : 'none'} />
      ))}
    </svg>
  );
}
