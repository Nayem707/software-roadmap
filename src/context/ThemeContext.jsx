import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const THEME_MODES = {
  DARK: "dark",
  LIGHT: "light",
};

export const THEMES = {
  dark: {
    mode: THEME_MODES.DARK,
    name: "Dark",
    colors: {
      // Backgrounds
      bg: {
        primary: "#09131d",
        secondary: "#0f172a",
        tertiary: "#1e293b",
        quaternary: "#0a0f17",
      },
      // Text
      text: {
        primary: "#f1f5f9",
        secondary: "#cbd5e1",
        tertiary: "#94a3b8",
        muted: "#64748b",
      },
      // Borders
      border: {
        primary: "#334155",
        secondary: "#475569",
        muted: "#1e293b",
      },
      // Accents
      accent: {
        primary: "#f97316",
        secondary: "#8b5cf6",
        tertiary: "#fbbf24",
        success: "#10b981",
        danger: "#ef4444",
        info: "#60a5fa",
        cyan: "#2dd4bf",
      },
      // UI Elements
      ui: {
        hover: "rgba(100, 116, 139, 0.05)",
        active: "rgba(148, 163, 184, 0.1)",
        disabled: "rgba(100, 116, 139, 0.2)",
      },
    },
  },
  light: {
    mode: THEME_MODES.LIGHT,
    name: "Light",
    colors: {
      // Backgrounds
      bg: {
        primary: "#ffffff",
        secondary: "#f8fafc",
        tertiary: "#f1f5f9",
        quaternary: "#e2e8f0",
      },
      // Text
      text: {
        primary: "#0f172a",
        secondary: "#334155",
        tertiary: "#64748b",
        muted: "#94a3b8",
      },
      // Borders
      border: {
        primary: "#cbd5e1",
        secondary: "#e2e8f0",
        muted: "#f1f5f9",
      },
      // Accents
      accent: {
        primary: "#ea580c",
        secondary: "#7c3aed",
        tertiary: "#ca8a04",
        success: "#059669",
        danger: "#dc2626",
        info: "#2563eb",
        cyan: "#0891b2",
      },
      // UI Elements
      ui: {
        hover: "rgba(15, 23, 42, 0.05)",
        active: "rgba(15, 23, 42, 0.1)",
        disabled: "rgba(15, 23, 42, 0.2)",
      },
    },
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme-mode");
    return saved || THEME_MODES.DARK;
  });

  const currentTheme = THEMES[theme];

  useEffect(() => {
    localStorage.setItem("theme-mode", theme);
    updateCSSVariables(currentTheme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme, currentTheme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === THEME_MODES.DARK ? THEME_MODES.LIGHT : THEME_MODES.DARK,
    );
  };

  const setThemeMode = (mode) => {
    if (Object.values(THEME_MODES).includes(mode)) {
      setTheme(mode);
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme, currentTheme, toggleTheme, setThemeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

function updateCSSVariables(themeConfig) {
  const root = document.documentElement;
  const { colors } = themeConfig;

  Object.entries(colors).forEach(([category, values]) => {
    if (typeof values === "object") {
      Object.entries(values).forEach(([key, value]) => {
        const varName = `--color-${category}-${key}`;
        root.style.setProperty(varName, value);
      });
    }
  });
}
