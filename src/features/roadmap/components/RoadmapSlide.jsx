import Badge from "../../../components/ui/Badge";

export default function RoadmapSlide({ slide, phaseCount }) {
  return (
    <div className="max-w-[980px] pt-5">
      <div className="mb-4 flex items-center gap-4">
        <Badge
          className="inline-flex items-center rounded-md border px-2.5 py-1 text-[10px] uppercase tracking-[0.06em]"
          style={{
            borderColor: slide.accent,
            color: slide.accent,
            backgroundColor: `${slide.accent}20`,
          }}
        >
          {slide.category}
        </Badge>
        <span
          className="text-[10px] uppercase tracking-[0.18em]"
          style={{
            fontFamily:
              "SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace",
            color: "var(--color-text-tertiary)",
          }}
        >
          PHASE {slide.phase} OF {phaseCount}
        </span>
      </div>

      <h1
        className="m-0 text-[clamp(2.2rem,3vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.065em]"
        style={{ color: "var(--color-text-primary)" }}
      >
        {slide.title}
      </h1>
      <p
        className="mt-4 mb-7 max-w-[860px] text-base leading-6"
        style={{ color: "var(--color-text-tertiary)" }}
      >
        {slide.description}
      </p>

      <div className="grid max-w-[980px] grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {slide.topics.map((topic) => (
          <article
            className="min-h-[132px] rounded-xl border p-4"
            key={topic.title}
            style={{
              backgroundColor: "var(--color-bg-secondary)",
              borderColor: "var(--color-border-secondary)",
            }}
          >
            <div className="mb-2.5 flex items-center gap-2.5">
              <span
                className="block h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: slide.accent }}
              />
              <h2
                className="m-0 text-[15px] font-bold"
                style={{ color: "var(--color-text-primary)" }}
              >
                {topic.title}
              </h2>
            </div>
            <p
              className="m-0 text-sm leading-6"
              style={{ color: "var(--color-text-tertiary)" }}
            >
              {topic.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
