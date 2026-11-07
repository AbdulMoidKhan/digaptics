/**
 * Compact numbered process strip.
 * @param {{steps: Array<{name: string, description: string}>, columns?: number}} props
 */
export default function ProcessSteps({ steps, headingLevel = 3 }) {
  const Tag = 'h' + headingLevel;

  return (
    <ol className="process-steps">
      {steps.map((step, index) => (
        <li className="process-steps__item reveal" key={step.name}>
          <span className="process-steps__number" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <Tag className="process-steps__name">{step.name}</Tag>
          <p className="process-steps__desc">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
