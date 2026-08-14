import { useEffect, useMemo, useState } from "react";
import { roadmapData } from "../data/roadmapData";

export function useRoadmap(initialIndex = 1) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const currentSlide = useMemo(
    () => roadmapData[currentIndex] ?? roadmapData[0],
    [currentIndex],
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        setCurrentIndex((previous) =>
          Math.min(previous + 1, roadmapData.length - 1),
        );
      }

      if (event.key === "ArrowLeft") {
        setCurrentIndex((previous) => Math.max(previous - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const goTo = (index) => {
    if (index < 0 || index >= roadmapData.length) {
      return;
    }

    setCurrentIndex(index);
  };

  const goNext = () => {
    setCurrentIndex((previous) =>
      Math.min(previous + 1, roadmapData.length - 1),
    );
  };

  const goPrevious = () => {
    setCurrentIndex((previous) => Math.max(previous - 1, 0));
  };

  return {
    slides: roadmapData,
    currentIndex,
    currentSlide,
    goTo,
    goNext,
    goPrevious,
    canGoPrevious: currentIndex > 0,
    canGoNext: currentIndex < roadmapData.length - 1,
  };
}
