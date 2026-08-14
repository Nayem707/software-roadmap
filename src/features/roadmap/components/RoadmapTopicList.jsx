export default function RoadmapTopicList({ topics, accent }) {
  return (
    <div className="topic-grid">
      {topics.map((topic) => (
        <article className="topic-card" key={topic.title}>
          <div className="topic-card-header">
            <span className="topic-dot" style={{ backgroundColor: accent }} />
            <h2>{topic.title}</h2>
          </div>
          <p>{topic.description}</p>
        </article>
      ))}
    </div>
  );
}
