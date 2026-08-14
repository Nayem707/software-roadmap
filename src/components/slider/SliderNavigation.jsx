import Button from "../ui/Button";

export default function SliderNavigation({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}) {
  return (
    <div className="slider-navigation">
      <Button
        type="button"
        className="nav-button nav-button-prev"
        onClick={onPrevious}
        disabled={!canGoPrevious}
      >
        <span className="nav-arrow">‹</span> Previous
      </Button>

      <div className="slider-progress-area">
        <SliderProgress value={0} total={1} />
      </div>

      <Button
        type="button"
        className="nav-button nav-button-next"
        onClick={onNext}
        disabled={!canGoNext}
      >
        Next <span className="nav-arrow">›</span>
      </Button>
    </div>
  );
}
