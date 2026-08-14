export default function SliderPagination({ currentIndex, total, onSelect }) {
  return (
    <div className="slider-pagination" aria-label="Pagination">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          type="button"
          className={`slider-page-dot ${index === currentIndex ? "active" : ""}`}
          onClick={() => onSelect(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
