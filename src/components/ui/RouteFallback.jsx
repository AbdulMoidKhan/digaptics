/** Loading state shown while a lazily-loaded route chunk arrives. */
export default function RouteFallback() {
  return (
    <div className="route-fallback" role="status" aria-live="polite">
      <span className="route-fallback__bar" aria-hidden="true" />
      <span>Loading page…</span>
    </div>
  );
}
