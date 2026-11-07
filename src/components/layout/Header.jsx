import { useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { companyNavigation, mainNavigation } from '../../data/site.js';
import { catalogTree } from '../../data/catalog/index.js';
import Icon from '../ui/Icon.jsx';
import Logo from './Logo.jsx';
import { DURATION, EASE, gsap, prefersReducedMotion } from '../../motion/gsap.js';
import './Header.css';

const MAX_LINKS_PER_COLUMN = 10;

function categoryFor(id) {
  return catalogTree.find((category) => category.id === id) ?? null;
}

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  /** Which top-level item has its panel open: category id, 'company', or null. */
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileSection, setMobileSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const baseId = useId();
  const mobileId = useId();
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const panelRef = useRef(null);
  const mobilePanelRef = useRef(null);
  const toggleRef = useRef(null);

  // Close every layer on navigation.
  const [lastPath, setLastPath] = useState(location.pathname);
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname);
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileSection(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape closes the open layer; Tab is trapped inside the mobile panel.
  useEffect(() => {
    if (!openMenu && !mobileOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Tab' && mobileOpen && mobilePanelRef.current) {
        const targets = [
          toggleRef.current,
          ...mobilePanelRef.current.querySelectorAll('a, button'),
        ].filter(Boolean);
        const first = targets[0];
        const last = targets[targets.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
        return;
      }
      if (event.key !== 'Escape') return;
      if (openMenu) {
        const trigger = navRef.current?.querySelector('[data-menu="' + openMenu + '"] button');
        setOpenMenu(null);
        trigger?.focus();
      }
      if (mobileOpen) {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [openMenu, mobileOpen]);

  // Pointer or focus outside the nav closes the open panel.
  useEffect(() => {
    if (!openMenu) return undefined;
    const onOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) setOpenMenu(null);
    };
    document.addEventListener('pointerdown', onOutside);
    document.addEventListener('focusin', onOutside);
    return () => {
      document.removeEventListener('pointerdown', onOutside);
      document.removeEventListener('focusin', onOutside);
    };
  }, [openMenu]);

  // Keep menu state in sync with the CSS breakpoint.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1300px)');
    const onBreakpoint = (event) => {
      if (event.matches) setMobileOpen(false);
      else setOpenMenu(null);
    };
    desktop.addEventListener('change', onBreakpoint);
    return () => desktop.removeEventListener('change', onBreakpoint);
  }, []);

  // Lock background scroll while the mobile panel is open.
  useEffect(() => {
    if (!mobileOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    mobilePanelRef.current?.querySelector('a, button')?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  useGSAP(
    () => {
      if (!openMenu || prefersReducedMotion() || !panelRef.current) return;
      gsap.fromTo(
        panelRef.current,
        { autoAlpha: 0, y: -8 },
        {
          autoAlpha: 1,
          y: 0,
          duration: DURATION.ui,
          ease: EASE.out,
          clearProps: 'opacity,visibility,transform',
        },
      );
    },
    { dependencies: [openMenu], scope: headerRef },
  );

  const renderMegaPanel = (item) => {
    const category = categoryFor(item.categoryId);
    if (!category) return null;
    const panelId = baseId + '-' + item.categoryId;
    const isOpen = openMenu === item.categoryId;
    return (
      <div
        id={panelId}
        className={'mega-menu' + (isOpen ? ' is-open' : '')}
        hidden={!isOpen}
        ref={isOpen ? panelRef : undefined}
      >
        <div className="container mega-menu__inner">
          <div className="mega-menu__lead">
            <p className="eyebrow">{category.kicker}</p>
            <p className="mega-menu__headline">{category.headline}</p>
            <Link to={category.path} className="link-arrow">
              All {category.label} ({category.count})
            </Link>
          </div>
          <div className="mega-menu__columns">
            {category.groups.map((group) => (
              <div className="mega-menu__column" key={group.id}>
                <p className="mega-menu__column-title">{group.label}</p>
                <ul>
                  {group.entries.slice(0, MAX_LINKS_PER_COLUMN).map((entry) => (
                    <li key={entry.path}>
                      <Link to={entry.path}>{entry.title}</Link>
                    </li>
                  ))}
                  {group.entries.length > MAX_LINKS_PER_COLUMN && (
                    <li>
                      <Link to={category.path + '#' + group.id} className="mega-menu__more">
                        + {group.entries.length - MAX_LINKS_PER_COLUMN} more
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderCompanyPanel = () => {
    const panelId = baseId + '-company';
    const isOpen = openMenu === 'company';
    return (
      <div
        id={panelId}
        className={'mega-menu mega-menu--compact' + (isOpen ? ' is-open' : '')}
        hidden={!isOpen}
        ref={isOpen ? panelRef : undefined}
      >
        <div className="container mega-menu__inner">
          <div className="mega-menu__lead">
            <p className="eyebrow">Company</p>
            <p className="mega-menu__headline">Who we are and how we work</p>
          </div>
          <div className="mega-menu__columns">
            <div className="mega-menu__column">
              <p className="mega-menu__column-title">Digaptics</p>
              <ul>
                {companyNavigation.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/sitemap">All pages</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <header className={'site-header' + (scrolled ? ' is-scrolled' : '')} ref={headerRef}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="container site-header__inner">
          <Logo />

          <nav className="site-nav" aria-label="Main" ref={navRef}>
            <ul className="site-nav__list">
              {mainNavigation.map((item) => {
                // Plain links (Home) have no panel and no disclosure button.
                if (!item.hasMegaMenu && !item.companyMenu) {
                  return (
                    <li key={item.label} className="site-nav__item">
                      <NavLink to={item.to} className="site-nav__link" end={item.exact}>
                        {item.label}
                      </NavLink>
                    </li>
                  );
                }
                const menuKey = item.categoryId ?? 'company';
                const panelId = baseId + '-' + menuKey;
                const isOpen = openMenu === menuKey;
                return (
                  <li
                    key={item.label}
                    className="site-nav__item site-nav__item--has-menu"
                    data-menu={menuKey}
                  >
                    <NavLink to={item.to} className="site-nav__link">
                      {item.label}
                    </NavLink>
                    <button
                      type="button"
                      className="site-nav__disclosure"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenMenu(isOpen ? null : menuKey)}
                    >
                      <span className="visually-hidden">
                        {isOpen ? 'Close ' + item.label + ' menu' : 'Open ' + item.label + ' menu'}
                      </span>
                      <Icon name="chevronDown" size={15} />
                    </button>
                    {item.hasMegaMenu ? renderMegaPanel(item) : renderCompanyPanel()}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="site-header__actions">
            <Link to="/contact" className="btn btn--sm site-header__cta">
              Start a Project
            </Link>
            <button
              type="button"
              className="site-header__toggle"
              aria-expanded={mobileOpen}
              aria-controls={mobileId}
              onClick={() => setMobileOpen((open) => !open)}
              ref={toggleRef}
            >
              <Icon name={mobileOpen ? 'close' : 'menu'} size={22} />
              <span className="visually-hidden">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Rendered outside <header> so the header backdrop filter does not become
          the containing block for this fixed panel. */}
      <div
        id={mobileId}
        className={'mobile-nav' + (mobileOpen ? ' is-open' : '')}
        hidden={!mobileOpen}
        ref={mobilePanelRef}
      >
        <nav className="container mobile-nav__inner" aria-label="Mobile">
          <ul className="mobile-nav__list">
            <li>
              <NavLink to="/" className="mobile-nav__link" end>
                Home
              </NavLink>
            </li>
            {catalogTree.map((category) => {
              const expanded = mobileSection === category.id;
              return (
                <li key={category.id}>
                  <div className="mobile-nav__row">
                    <NavLink to={category.path} className="mobile-nav__link">
                      {category.label}
                    </NavLink>
                    <button
                      type="button"
                      className="mobile-nav__expand"
                      aria-expanded={expanded}
                      onClick={() => setMobileSection(expanded ? null : category.id)}
                    >
                      <span className="visually-hidden">
                        {expanded ? 'Hide ' + category.label : 'Show ' + category.label}
                      </span>
                      <Icon name={expanded ? 'minus' : 'plus'} size={18} />
                    </button>
                  </div>
                  {expanded && (
                    <ul className="mobile-nav__sublist">
                      {category.groups.map((group) => (
                        <li key={group.id}>
                          <Link
                            to={category.path + '#' + group.id}
                            className="mobile-nav__sublink"
                          >
                            {group.label} ({group.entries.length})
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link to={category.path} className="mobile-nav__sublink">
                          All {category.label}
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              );
            })}
            {companyNavigation.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className="mobile-nav__link">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn--block">
            Start a Project
          </Link>
        </nav>
      </div>
    </>
  );
}
