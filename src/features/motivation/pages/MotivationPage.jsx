import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../../../components/ui/ThemeToggle";

export default function MotivationPage() {
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
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="block h-2.5 w-2.5 rounded-full bg-[#ff5f57]"
            />
            <span className="block h-2.5 w-2.5 rounded-full bg-[#ffbd2f]" />
            <span className="block h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <ThemeToggle />
        </div>
        <h1
          className="text-3xl font-bold"
          style={{ color: "var(--color-text-primary)" }}
        >
          Motivation & Mindset
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
            Developer Mindset
          </h2>
          <p
            className="text-sm leading-6"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Cultivate the right mindset for software development. Learn to think
            like a developer, embrace challenges, and develop a growth-oriented
            perspective toward learning and problem-solving.
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
            Consistency & Discipline
          </h2>
          <p
            className="text-sm leading-6"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Build sustainable habits and discipline. Understand the importance
            of consistent practice, setting goals, and maintaining momentum in
            your development journey.
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
            Problem-Solving Skills
          </h2>
          <p
            className="text-sm leading-6"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Master the art of breaking down complex problems, debugging
            effectively, and finding creative solutions. Develop critical
            thinking and analytical skills essential for all developers.
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
            Continuous Learning
          </h2>
          <p
            className="text-sm leading-6"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Embrace lifelong learning. Understand the tech landscape evolves
            constantly and develop strategies for staying current with new
            technologies, frameworks, and best practices.
          </p>
        </div>
      </main>
    </div>
  );
}
