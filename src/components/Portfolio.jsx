import { SectionRef } from './SectionRef.jsx';
import { useState } from 'react';
import { ArrowRightIcon } from './Icons.jsx';
import { CAT_KEYS, PROJECTS, PH_HEIGHTS, PROJECTS_BY_CATEGORY } from '../projects.js';
import { ProjectCard } from './ProjectCard.jsx';
import { SectionHeading } from './SectionHeading.jsx';

export function Portfolio({ data: portfolio }) {
  const [filter, setFilter] = useState('all');
  const shown = PROJECTS_BY_CATEGORY[filter];
  const labelFor = (key) => portfolio.cats[CAT_KEYS.indexOf(key)] || key;
  return (
    <section className="section wrap" id="archiv">
      <SectionRef data={portfolio.ref} />
      <SectionHeading eyebrow={portfolio.eyebrow} description={portfolio.desc}>
        <h2>
          {portfolio.headA}
          <br />
          <em>{portfolio.headEm}</em>.
        </h2>
      </SectionHeading>
      <div className="filter-row" role="group" aria-label={portfolio.ref.title}>
        {CAT_KEYS.map((c) => (
          <button
            type="button"
            className={'pill' + (filter === c ? ' active' : '')}
            data-cat={c}
            aria-pressed={filter === c}
            onClick={() => setFilter(c)}
            key={c}
          >
            {labelFor(c)}
            <span className="count">
              ({String(PROJECTS_BY_CATEGORY[c].length).padStart(2, '0')})
            </span>
          </button>
        ))}
      </div>
      <div className="archive-counter">
        <span aria-live="polite">
          {portfolio.showing} · {String(shown.length).padStart(2, '0')} /{' '}
          {String(PROJECTS.length).padStart(2, '0')}
        </span>
        <span>{portfolio.sortLabel}</span>
      </div>
      <div className="archive-grid">
        {shown.map((pr, i) => (
          <ProjectCard
            key={pr.id}
            project={{ ...pr, ...portfolio.projectLabels?.[pr.id] }}
            labels={portfolio.card}
            categoryLabel={labelFor(pr.cat)}
            placeholderHeight={PH_HEIGHTS[i % PH_HEIGHTS.length]}
          />
        ))}
      </div>
      {/* The source has no additional records or load-more handler. */}
      <div className="load-more">
        <button type="button" className="btn btn-ghost">
          {portfolio.loadMore} <ArrowRightIcon size={16} />
        </button>
      </div>
    </section>
  );
}
