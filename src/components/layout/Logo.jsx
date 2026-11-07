import { Link } from 'react-router-dom';

/**
 * Official Digaptics brandmark, supplied by the client from digaptics.io.
 * The light wordmark is used on the dark footer; the colour wordmark elsewhere.
 */
export default function Logo({ to = '/', onDark = false, className = '' }) {
  return (
    <Link
      to={to}
      className={'logo' + (onDark ? ' logo--on-dark' : '') + (className ? ' ' + className : '')}
      aria-label="Digaptics home"
    >
      <img
        src={onDark ? '/images/digaptics-footer-logo.png' : '/images/digaptics-logo.png'}
        alt="Digaptics"
        className="logo__img"
        width="175"
        height="44"
        decoding="async"
      />
    </Link>
  );
}
