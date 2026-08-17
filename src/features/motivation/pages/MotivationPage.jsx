import { Link } from "react-router-dom";
import ThemeToggle from "../../../components/ui/ThemeToggle";
import { motivationTopics } from "../data/motivationData";

export default function MotivationPage() {
  return (
    <div
      className="mx-auto flex h-[calc(100vh-36px)] min-h-[700px] w-full max-w-[1200px] flex-col rounded-xl border p-8 shadow-[0_10px_25px_rgba(2,6,23,0.45)]"
      style={{
        backgroundColor: "var(--color-bg-primary)",
        borderColor: "var(--color-border-primary)",
      }}
    >
      {/* Header */}
      <header
        className="border-b pb-4"
        style={{
          borderColor: "var(--color-border-secondary)",
        }}
      >
        <div className="mb-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              aria-label="Back to home"
              className="block h-2.5 w-2.5 rounded-full bg-[#ff5f57]"
            />

            <span className="block h-2.5 w-2.5 rounded-full bg-[#ffbd2f]" />
            <span className="block h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>

          <ThemeToggle />
        </div>

        <div>
          <p
            className="mb-2 text-xs font-medium uppercase tracking-widest"
            style={{
              color: "var(--color-text-tertiary)",
            }}
          >
            01. Engineering Mindset
          </p>

          <h1
            className="text-3xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Motivation & Mindset
          </h1>

          <p
            className="mt-2 max-w-4xl text-sm leading-6"
            style={{
              color: "var(--color-text-tertiary)",
            }}
          >
            Develop the mindset, habits, and engineering thinking required to
            become a better software developer.
          </p>
        </div>
      </header>

      {/* Topics */}
      {/* Topics - Minimal Version */}
      <main className="overflow-y-auto grid gap-4 md:grid-cols-2 xl:grid-cols-3 pt-4 pe-4">
        {motivationTopics.map((topic) => (
          <article
            key={topic.id}
            className="group relative rounded-xl border p-6 transition-all duration-200 hover:shadow-lg hover:border-opacity-100"
            style={{
              backgroundColor: "var(--color-bg-secondary)",
              borderColor: "var(--color-border-secondary)",
              borderOpacity: 0.6,
            }}
          >
            <h2
              className="mb-2 text-base font-semibold transition-colors duration-200"
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              {topic.title}
            </h2>

            <p
              className="text-sm leading-relaxed"
              style={{
                color: "var(--color-text-tertiary)",
              }}
            >
              {topic.description}
            </p>

            {/* Bottom accent line on hover */}
            <div
              className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover:w-full"
              style={{
                backgroundColor: "var(--color-accent)",
                width: "0%",
              }}
            />
          </article>
        ))}
      </main>
    </div>
  );
}
