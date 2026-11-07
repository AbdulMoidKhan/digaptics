import Icon from './Icon.jsx';

/**
 * Honest empty state. Used where content has not been published yet instead of
 * filling pages with invented case studies or articles.
 */
export default function EmptyState({
  icon = 'layers',
  title,
  body,
  actions = null,
  children,
  headingLevel = 3,
}) {
  // Heading level is configurable so the empty state never skips a level
  // (for example when it is the first heading after the page H1).
  const Heading = 'h' + headingLevel;
  return (
    <div className="empty-state">
      <span className="empty-state__icon">
        <Icon name={icon} size={24} />
      </span>
      <Heading>{title}</Heading>
      {body && <p>{body}</p>}
      {children}
      {actions && <div className="btn-row empty-state__actions">{actions}</div>}
    </div>
  );
}
