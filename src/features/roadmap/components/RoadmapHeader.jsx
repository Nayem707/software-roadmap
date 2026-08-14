import { useNavigate } from "react-router-dom";
import ThemeToggle from "../../../components/ui/ThemeToggle";

export default function RoadmapHeader({ currentSlide, onBack }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <header
      className="grid h-12 grid-cols-[auto_1fr_auto_1fr_auto] items-center gap-3 border-b px-[14px]"
      style={{
        backgroundColor: "var(--color-bg-secondary)",
        borderColor: "var(--color-border-secondary)",
      }}
    >
      <button
        type="button"
        onClick={handleBack}
        className="inline-flex items-center gap-1.5 rounded px-2 py-1 text-[11px] transition-colors"
        aria-label="Go back"
        style={{
          fontFamily:
            "SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace",
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
        <span className="text-sm leading-none">←</span>
      </button>

      <div
        className="flex items-center justify-self-start gap-2.5"
        aria-label="Window controls"
      >
        <span
          className="block h-2.5 w-2.5 rounded-full bg-[#ff5f57] cursor-pointer"
          onClick={handleHome}
        />
        <span className="block h-2.5 w-2.5 rounded-full bg-[#ffbd2f]" />
        <span className="block h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>

      <div
        className="justify-self-start overflow-hidden text-ellipsis whitespace-nowrap text-[11px] tracking-[0.02em]"
        style={{
          fontFamily:
            "SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace",
          color: "var(--color-text-secondary)",
        }}
      >
        roadmap / {currentSlide.filename}
      </div>

      <div
        className="inline-flex items-center justify-self-end gap-2 text-[10px]"
        style={{
          fontFamily:
            "SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace",
          color: "var(--color-text-tertiary)",
        }}
      >
        <span className="inline-block h-2 w-2 rounded-full bg-[#2dd4bf] shadow-[0_0_8px_rgba(45,212,191,0.7)]" />
        <span>building path...</span>
      </div>

      <ThemeToggle />
    </header>
  );
}
