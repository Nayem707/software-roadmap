import { useTheme, THEME_MODES } from "../../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[11px] transition-colors"
      aria-label={`Switch to ${theme === THEME_MODES.DARK ? "light" : "dark"} theme`}
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
      {theme === THEME_MODES.DARK ? (
        <>
          <SunIcon className="h-4 w-4" />
        </>
      ) : (
        <>
          <MoonIcon className="h-4 w-4" />
        </>
      )}
    </button>
  );
}
