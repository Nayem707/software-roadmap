export default function SliderSlide({ slide, accent }) {
  return (
    <div className="roadmap-slide">
      <div className="slide-heading-row">
        <span
          className="slide-badge"
          style={{ borderColor: accent, color: accent }}
        >
          {slide.category}
        </span>
        <span className="slide-phase">
          PHASE {slide.phase} OF {slide.phaseCount}
        </span>
      </div>

      <h1>{slide.title}</h1>
      <p className="slide-description">{slide.description}</p>

      <div className="topic-grid">
        {slide.topics.map((topic) => (
          <article className="topic-card" key={topic.title}>
            <div className="topic-card-header">
              <span className="topic-dot" style={{ backgroundColor: accent }} />
              <h2>{topic.title}</h2>
            </div>
            <p>{topic.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
