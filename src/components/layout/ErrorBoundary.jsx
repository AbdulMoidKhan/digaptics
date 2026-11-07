import { Component } from 'react';

/**
 * Catches render errors so a failure in one route shows a usable message and
 * recovery links instead of a blank page.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    // Surfaced in the console for debugging; no third-party reporting is wired up.
    console.error('Unhandled UI error:', error);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <section className="section">
        <div className="container container--narrow">
          <p className="eyebrow">Something went wrong</p>
          <h1>This page failed to load</h1>
          <p className="lede">
            An unexpected error stopped this view from rendering. Reloading usually clears it. If it
            keeps happening, let us know what you were doing.
          </p>
          <div className="btn-row">
            <button type="button" className="btn" onClick={() => window.location.reload()}>
              Reload the page
            </button>
            <a className="btn btn--secondary" href="/">
              Back to home
            </a>
            <a className="btn btn--secondary" href="/contact">
              Report the problem
            </a>
          </div>
        </div>
      </section>
    );
  }
}
