import { Link } from 'react-router-dom';

/**
 * Portfolio card. Only links to a detail page when the project is published,
 * so there are never dead links to empty case studies.
 */
export default function ProjectCard({ project }) {
  const hasDetailPage = Boolean(project.published && project.slug);
  const cover = project.gallery?.[0];

  return (
    <article className="project-card reveal">
      {cover && (
        <img
          className="project-card__media"
          src={cover.src}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="project-card__body">
        {project.year && <p className="project-card__meta">{project.year}</p>}
        <h3>
          {hasDetailPage ? (
            <Link to={'/work/' + project.slug}>{project.title}</Link>
          ) : (
            project.title
          )}
        </h3>
        <p>{project.summary}</p>
        {project.filters?.length > 0 && (
          <ul className="chip-row">
            {project.filters.map((filter) => (
              <li key={filter}>
                <span className="chip chip--tint">{filter}</span>
              </li>
            ))}
          </ul>
        )}
        {hasDetailPage && (
          <Link to={'/work/' + project.slug} className="link-arrow">
            View project
          </Link>
        )}
      </div>
    </article>
  );
}
