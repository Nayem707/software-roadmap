import { useNavigate } from "react-router-dom";

export default function FrontendTopicCard({ item }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(item.route)}
      className="group flex  flex-col rounded-xl border p-5 text-left transition"
      style={{
        backgroundColor: "var(--color-bg-secondary)",
        borderColor: "var(--color-border-secondary)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border-primary)";
        e.currentTarget.style.backgroundColor = "var(--color-bg-tertiary)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--color-border-secondary)";
        e.currentTarget.style.backgroundColor = "var(--color-bg-secondary)";
      }}
    >
      <div className="mb-4 flex items-center gap-3">
        <span
          className="inline-block h-3 w-3 rounded-full"
          style={{ backgroundColor: item.accent }}
        />
        <span
          className="text-xs uppercase tracking-[0.18em]"
          style={{ color: "var(--color-text-tertiary)" }}
        >
          Topic
        </span>
      </div>

      <h3
        className="text-xl font-semibold"
        style={{ color: "var(--color-text-primary)" }}
      >
        {item.title}
      </h3>
      <p
        className="mt-3 text-base leading-6"
        style={{ color: "var(--color-text-tertiary)" }}
      >
        {item.description}
      </p>
    </button>
  );
}
