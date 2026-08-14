import { roadmapCategories } from "../data/roadmapCategories";
import CategoryCard from "../components/CategoryCard";
import ThemeToggle from "../../../components/ui/ThemeToggle";

export default function LandingPage() {
  return (
    <div
      className="mx-auto flex h-[calc(100vh-36px)] min-h-[700px] w-full max-w-[1200px] flex-col rounded-xl border p-8 shadow-2xl"
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
          Roadmap Hub
        </h1>
      </header>

      <main className="flex flex-1 items-center justify-center">
        <div className="grid w-full max-w-4xl gap-6 md:grid-cols-2">
          {roadmapCategories.map((item) => (
            <CategoryCard key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
}
