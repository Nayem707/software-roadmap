import { Link } from "react-router-dom";
import ThemeToggle from "../../../components/ui/ThemeToggle";
import { sdlcTopics } from "../data/sdlcData";

export default function SdlcPage() {
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
            02. SDLC
          </p>

          <h1
            className="text-3xl font-bold"
            style={{
              color: "var(--color-text-primary)",
            }}
          >
            Software Development Life Cycle
          </h1>

          <p
            className="mt-2 max-w-2xl text-sm leading-6"
            style={{
              color: "var(--color-text-tertiary)",
            }}
          >
            Understand the complete software development process, from
            requirements and architecture to deployment, maintenance, and
            continuous improvement.
          </p>
        </div>
      </header>

      {/* SDLC Topics */}
      <main className="overflow-y-auto grid gap-4 md:grid-cols-2 xl:grid-cols-3 pt-4 pe-4">
        {sdlcTopics.map((topic, index) => (
          <article
            key={topic.id}
            className="rounded-xl border p-6 transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: "var(--color-bg-secondary)",
              borderColor: "var(--color-border-secondary)",
            }}
          >
            <div className="flex items-center gap-2">
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-lg font-semibold"
                style={{
                  backgroundColor: "var(--color-bg-tertiary)",
                  color: "var(--color-text-secondary)",
                }}
              >
                {String(index + 1).padStart(2, "0")}.
              </span>

              <h2
                className="text-lg font-semibold"
                style={{
                  color: "var(--color-text-primary)",
                }}
              >
                {topic.title}
              </h2>
            </div>

            <p
              className="text-sm leading-6"
              style={{
                color: "var(--color-text-tertiary)",
              }}
            >
              {topic.description}
            </p>
          </article>
        ))}
      </main>
    </div>
  );
}
