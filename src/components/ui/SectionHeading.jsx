/**
 * Reusable section heading. `level` keeps heading order correct per page,
 * `align` switches between left and centered layouts, and `aside` renders
 * supporting content (usually a link or button) beside the heading.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lede,
  level = 2,
  align = 'left',
  aside = null,
  id,
}) {
  const Tag = 'h' + level;
  // `reveal` opts the heading into the shared scroll-reveal batch.
  const classes = ['section-head', 'reveal'];
  if (align === 'center') classes.push('section-head--center');
  if (aside) classes.push('section-head--split');

  return (
    <div className={classes.join(' ')}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <Tag id={id}>{title}</Tag>
        {lede && <p className="lede">{lede}</p>}
      </div>
      {aside && <div className="section-head__aside">{aside}</div>}
    </div>
  );
}
