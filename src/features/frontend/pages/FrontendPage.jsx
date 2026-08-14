import { frontendTopics } from "../data/frontendTopics";
import ThemeToggle from "../../../components/ui/ThemeToggle";
import { Link } from "react-router-dom";

export default function FrontendPage() {
  return (
    <div
      className="mx-auto flex h-[calc(100vh-36px)] min-h-[700px] w-full max-w-[1200px] flex-col rounded-2xl border p-8 shadow-xl"
      style={{
        backgroundColor: "var(--color-bg-primary)",
        borderColor: "var(--color-border-primary)",
      }}
    >
      <header
        className="mb-8 pb-4 border-b"
        style={{ borderColor: "var(--color-border-secondary)" }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              to={"/"}
              className="block h-2.5 w-2.5 rounded-full bg-[#ff5f57]"
            />
            <span className="block h-2.5 w-2.5 rounded-full bg-[#ffbd2f]" />
            <span className="block h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <ThemeToggle />
        </div>
        <h1
          className="mt-4 text-3xl font-bold"
          style={{ color: "var(--color-text-primary)" }}
        >
          Frontend Development
        </h1>
      </header>

      <main className="flex-1">
        {/* Tag-style grid matching the image */}
        <div className="flex flex-wrap gap-3">
          {frontendTopics.map((item) => (
            <Link
              key={item.id}
              to={item.route}
              className="flex items-center gap-2"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                style={{
                  backgroundColor: "var(--color-bg-secondary)",
                  borderColor: "var(--color-border-secondary)",
                  color: "var(--color-text-primary)",
                }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor:
                      item.accent || "var(--color-border-primary)",
                  }}
                />
                {item.title}
              </div>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div
          className="mt-6 text-xs opacity-40"
          style={{ color: "var(--color-text-tertiary)" }}
        >
          {frontendTopics.length} topics
        </div>
      </main>
    </div>
  );
}
