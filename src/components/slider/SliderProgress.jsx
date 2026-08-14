import ProgressBar from "../ui/ProgressBar";

export default function SliderProgress({ value, total }) {
  const percent = ((value + 1) / total) * 100;

  return (
    <div className="slider-progress-wrap">
      <span className="slider-counter-text">
        {value + 1} / {total}
      </span>
      <div className="slider-progress-shell">
        <ProgressBar value={percent} className="slider-progress" />
      </div>
      <div className="slider-pagination-dots" aria-label="Slide pagination">
        {Array.from({ length: total }).map((_, index) => (
          <span
            key={index}
            className={`slider-dot ${index === value ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
