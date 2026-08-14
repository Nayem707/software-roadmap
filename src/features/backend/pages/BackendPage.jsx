import { useNavigate } from "react-router-dom";
import ThemeToggle from "../../../components/ui/ThemeToggle";

export default function BackendPage() {
  const navigate = useNavigate();

  return (
    <div
      className="mx-auto flex h-[calc(100vh-36px)] min-h-[700px] w-full max-w-[1200px] flex-col rounded-xl border p-8 shadow-[0_10px_25px_rgba(2,6,23,0.45)]"
      style={{
        backgroundColor: "var(--color-bg-primary)",
        borderColor: "var(--color-border-primary)",
      }}
    >
      <header
        className="mb-8 pb-4"
        style={{ borderColor: "var(--color-border-secondary)" }}
      >
        <div className="mb-2 flex items-center justify-between gap-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded px-2 py-1 text-sm transition-colors"
            style={{
              color: "var(--color-text-secondary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-ui-hover)";
              e.currentTarget.style.color = "var(--color-text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--color-text-secondary)";
            }}
          >
            ← Back
          </button>
          <div className="flex items-center gap-2">
            <span className="block h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="block h-2.5 w-2.5 rounded-full bg-[#ffbd2f]" />
            <span className="block h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <ThemeToggle />
        </div>
        <h1
          className="text-3xl font-bold"
          style={{ color: "var(--color-text-primary)" }}
        >
          Backend Development
        </h1>
      </header>

      <main className="grid flex-1 gap-5 md:grid-cols-2">
        <div
          className="rounded-xl border p-6"
          style={{
            backgroundColor: "var(--color-bg-secondary)",
            borderColor: "var(--color-border-secondary)",
          }}
        >
          <h2
            className="mb-3 text-xl font-semibold"
            style={{ color: "var(--color-text-primary)" }}
          >
            APIs & servers
          </h2>
          <p
            className="text-sm leading-6"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Learn how to build HTTP services, authenticate requests, validate
            input, and structure clean backend logic.
          </p>
        </div>

        <div
          className="rounded-xl border p-6"
          style={{
            backgroundColor: "var(--color-bg-secondary)",
            borderColor: "var(--color-border-secondary)",
          }}
        >
          <h2
            className="mb-3 text-xl font-semibold"
            style={{ color: "var(--color-text-primary)" }}
          >
            Databases & persistence
          </h2>
          <p
            className="text-sm leading-6"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Work with relational and document databases, handle migrations, and
            design reliable data access patterns.
          </p>
        </div>

        <div
          className="rounded-xl border p-6"
          style={{
            backgroundColor: "var(--color-bg-secondary)",
            borderColor: "var(--color-border-secondary)",
          }}
        >
          <h2
            className="mb-3 text-xl font-semibold"
            style={{ color: "var(--color-text-primary)" }}
          >
            Security & deployment
          </h2>
          <p
            className="text-sm leading-6"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Protect application data, manage environment configuration, and ship
            versions with confidence.
          </p>
        </div>

        <div
          className="rounded-xl border p-6"
          style={{
            backgroundColor: "var(--color-bg-secondary)",
            borderColor: "var(--color-border-secondary)",
          }}
        >
          <h2
            className="mb-3 text-xl font-semibold"
            style={{ color: "var(--color-text-primary)" }}
          >
            Team workflows
          </h2>
          <p
            className="text-sm leading-6"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Establish APIs that support product teams, monitor systems, and
            collaborate across the full stack.
          </p>
        </div>
      </main>
    </div>
  );
}
