import { useMemo, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RoadmapHeader from "./RoadmapHeader";
import RoadmapSlide from "./RoadmapSlide";
import Button from "../../../components/ui/Button";
import { useRoadmapData } from "../hooks/useRoadmapData";

export default function RoadmapViewer({ slides, topicId }) {
  const navigate = useNavigate();
  const { subtopicSlug } = useParams();
  const touchStartX = useRef(null);

  const initialIndex = Math.max(
    0,
    slides.findIndex((s) => s.id === subtopicSlug),
  );

  const {
    slides: allSlides,
    currentIndex,
    currentSlide,
    goTo,
    goNext,
    goPrevious,
    canGoPrevious,
    canGoNext,
  } = useRoadmapData(slides, initialIndex);

  const progress = useMemo(
    () => ((currentIndex + 1) / allSlides.length) * 100,
    [currentIndex, allSlides.length],
  );

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const diff = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        goNext();
      } else {
        goPrevious();
      }
    }

    touchStartX.current = null;
  };

  const handleSlideClick = (index) => {
    goTo(index);
    navigate(`/frontend/${topicId}/${allSlides[index].id}`);
  };

  const handleNextClick = () => {
    if (canGoNext) {
      goNext();
      navigate(`/frontend/${topicId}/${allSlides[currentIndex + 1].id}`);
    }
  };

  const handlePreviousClick = () => {
    if (canGoPrevious) {
      goPrevious();
      navigate(`/frontend/${topicId}/${allSlides[currentIndex - 1].id}`);
    }
  };

  return (
    <div
      className="mx-auto flex h-[calc(100vh-36px)] min-h-[830px] w-full flex-col overflow-hidden rounded-xl border shadow-[0_10px_25px_rgba(2,6,23,0.45)]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        backgroundColor: "var(--color-bg-primary)",
        borderColor: "var(--color-border-primary)",
      }}
    >
      <RoadmapHeader currentSlide={currentSlide} onBack={() => navigate(-1)} />

      <div className="flex min-h-0 flex-1">
        <aside
          className="w-[260px] shrink-0 border-r pt-4 md:w-[320px]"
          style={{
            backgroundColor: "var(--color-bg-secondary)",
            borderColor: "var(--color-border-secondary)",
          }}
        >
          <div
            className="px-4 pb-2.5 text-[10px] font-bold uppercase tracking-[0.18em]"
            style={{
              fontFamily:
                "SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace",
              color: "var(--color-text-tertiary)",
            }}
          >
            MODULE · {topicId.toUpperCase()} · {allSlides.length} TOPICS
          </div>
          <ul className="m-0 list-none p-0">
            {allSlides.map((slide, index) => (
              <li key={slide.id}>
                <button
                  type="button"
                  className="flex w-full items-center gap-2 border-l-2 border-transparent px-3 py-1.5 text-left text-[12px] transition-colors duration-200"
                  style={{
                    color:
                      index === currentIndex
                        ? "var(--color-text-primary)"
                        : "var(--color-text-tertiary)",
                    backgroundColor:
                      index === currentIndex
                        ? "var(--color-ui-active)"
                        : "transparent",
                    borderColor:
                      index === currentIndex
                        ? "var(--color-accent-primary)"
                        : "transparent",
                    fontFamily:
                      "SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace",
                  }}
                  onClick={() => handleSlideClick(index)}
                  onMouseEnter={(e) => {
                    if (index !== currentIndex) {
                      e.currentTarget.style.backgroundColor =
                        "var(--color-ui-hover)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== currentIndex) {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }
                  }}
                >
                  <span className="w-6 shrink-0 opacity-75">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="block h-2 w-2 shrink-0 rounded-sm"
                    style={{ backgroundColor: slide.accent }}
                  />
                  <span className="min-w-0 truncate">{slide.filename}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main
          className="min-w-0 flex-1 px-7 pb-3 pt-8"
          style={{ backgroundColor: "var(--color-bg-quaternary)" }}
        >
          <RoadmapSlide slide={currentSlide} phaseCount={allSlides.length} />
        </main>
      </div>

      <footer
        className="grid h-[70px] grid-cols-[1fr_2fr_1fr] items-center gap-4 border-t px-4"
        style={{
          backgroundColor: "var(--color-bg-secondary)",
          borderColor: "var(--color-border-secondary)",
        }}
      >
        <Button
          type="button"
          className="justify-self-start rounded-md border bg-transparent px-3 py-2 text-[12px] transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-35"
          style={{
            fontFamily:
              "SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace",
            color: "var(--color-text-secondary)",
            borderColor: "var(--color-border-primary)",
          }}
          onMouseEnter={(e) => {
            if (!e.currentTarget.disabled) {
              e.currentTarget.style.backgroundColor = "var(--color-ui-hover)";
              e.currentTarget.style.color = "var(--color-text-primary)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--color-text-secondary)";
          }}
          onClick={handlePreviousClick}
          disabled={!canGoPrevious}
        >
          <span className="text-lg leading-none align-middle">‹</span> Previous
        </Button>

        <div className="flex w-full items-center justify-center gap-3.5">
          <div
            className="min-w-[70px] text-right text-[11px]"
            style={{
              fontFamily:
                "SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace",
              color: "var(--color-text-tertiary)",
            }}
          >
            {currentIndex + 1} / {allSlides.length}
          </div>
          <div
            className="relative h-2 max-w-[380px] flex-1 overflow-hidden rounded-full"
            aria-label="Progress indicator"
            style={{ backgroundColor: "var(--color-ui-active)" }}
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: `${progress}%`,
                background:
                  "linear-gradient(90deg, var(--color-accent-primary) 0%, var(--color-accent-primary) 60%, rgba(249,115,22,0.4) 100%)",
                boxShadow: "0 0 12px var(--color-accent-primary)",
              }}
            />
            <div className="pointer-events-none absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-1.5 pl-2.5">
              {allSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className="h-1.5 w-1.5 rounded-full border-0 p-0 transition-all"
                  style={{
                    backgroundColor:
                      index === currentIndex
                        ? "var(--color-text-primary)"
                        : "var(--color-border-primary)",
                    boxShadow:
                      index === currentIndex
                        ? "0 0 10px var(--color-text-primary)"
                        : "none",
                  }}
                  onClick={() => handleSlideClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <Button
          type="button"
          className="justify-self-end rounded-md border bg-transparent px-3 py-2 text-[12px] transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-35"
          style={{
            fontFamily:
              "SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace",
            color: "var(--color-text-secondary)",
            borderColor: "var(--color-border-primary)",
          }}
          onMouseEnter={(e) => {
            if (!e.currentTarget.disabled) {
              e.currentTarget.style.backgroundColor = "var(--color-ui-hover)";
              e.currentTarget.style.color = "var(--color-text-primary)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--color-text-secondary)";
          }}
          onClick={handleNextClick}
          disabled={!canGoNext}
        >
          Next <span className="text-lg leading-none align-middle">›</span>
        </Button>
      </footer>
    </div>
  );
}
