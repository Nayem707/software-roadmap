import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../../../components/ui/ThemeToggle";

export default function SdlcPage() {
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
          Software Development Life Cycle
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
            Requirements & Planning
          </h2>
          <p
            className="text-sm leading-6"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Understand how to gather requirements, define project scope, plan
            resources, and establish timelines. Learn stakeholder management and
            project planning methodologies.
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
            Design & Architecture
          </h2>
          <p
            className="text-sm leading-6"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Master system design, architecture patterns, database design, and
            technology selection. Create scalable solutions that meet
            requirements and support future growth.
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
            Development & Implementation
          </h2>
          <p
            className="text-sm leading-6"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Learn coding best practices, version control, code reviews, and team
            collaboration. Implement features following design specifications
            and coding standards.
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
            Testing & QA
          </h2>
          <p
            className="text-sm leading-6"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Understand testing strategies, unit testing, integration testing,
            and QA processes. Ensure software quality, reliability, and
            performance before release.
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
            Deployment & Release
          </h2>
          <p
            className="text-sm leading-6"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Learn deployment strategies, CI/CD pipelines, release management,
            and production rollouts. Master tools and practices for reliable,
            efficient deployments.
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
            Maintenance & Support
          </h2>
          <p
            className="text-sm leading-6"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Manage production systems, monitor performance, handle incidents,
            and provide user support. Implement patches, upgrades, and
            continuous improvements.
          </p>
        </div>
      </main>
    </div>
  );
}
