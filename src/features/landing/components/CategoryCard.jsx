import { useNavigate } from "react-router-dom";

export default function CategoryCard({ item }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(item.route)}
      className="group flex h-full min-h-[180px] w-full flex-col rounded-xl border p-6 text-left transition"
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
          className="text-xs font-semibold uppercase tracking-[0.18em]"
          style={{ color: "var(--color-text-tertiary)" }}
        >
          Category
        </span>
      </div>

      <h2
        className="mb-3 text-2xl font-bold"
        style={{ color: "var(--color-text-primary)" }}
      >
        {item.title}
      </h2>
      <p
        className="text-base leading-6"
        style={{ color: "var(--color-text-tertiary)" }}
      >
        {item.description}
      </p>
    </button>
  );
}
