export const roadmapData = [
  {
    id: "overview",
    phase: 1,
    filename: "overview.md",
    category: "Overview",
    title: "Roadmap Overview",
    description:
      "A clear path to become a confident frontend developer through practical milestones.",
    accent: "#f97316",
    topics: [
      {
        title: "Core foundations",
        description:
          "Learn HTML, CSS, and JavaScript before building production interfaces.",
      },
      {
        title: "Tooling",
        description:
          "Use Git, package managers, and modern frontend workflows effectively.",
      },
      {
        title: "React ecosystem",
        description:
          "Build reusable components and manage state with confidence.",
      },
      {
        title: "Delivery",
        description:
          "Ship optimized, accessible, and secure products for real users.",
      },
    ],
  },
  {
    id: "html-fundamentals",
    phase: 2,
    filename: "html-fundamentals.html",
    category: "HTML",
    title: "HTML Fundamentals",
    description:
      "Structure content the way browsers, assistive technology, and search engines all expect.",
    accent: "#f97316",
    topics: [
      {
        title: "Semantic HTML",
        description:
          "Use header, nav, main, article, and section to describe meaning, not just layout.",
      },
      {
        title: "Forms",
        description:
          "Build accessible inputs, labels, and fieldsets that validate and submit cleanly.",
      },
      {
        title: "SEO Basics",
        description:
          "Structure titles, headings, and meta tags so pages preview and rank correctly.",
      },
      {
        title: "Modern HTML Structure",
        description:
          "Organize documents with landmarks and the latest structural elements.",
      },
    ],
  },
  {
    id: "css-responsive",
    phase: 3,
    filename: "css-responsive.css",
    category: "CSS",
    title: "CSS & Responsive Design",
    description:
      "Design layouts that adapt cleanly across viewport sizes while keeping interfaces readable and polished.",
    accent: "#8b5cf6",
    topics: [
      {
        title: "Layout systems",
        description:
          "Use flexbox and grid to compose responsive, maintainable page structures.",
      },
      {
        title: "Theming",
        description:
          "Define tokens and design systems that keep styling consistent and scalable.",
      },
      {
        title: "Responsive patterns",
        description:
          "Write media queries and fluid layout rules for phone, tablet, and desktop users.",
      },
      {
        title: "Visual polish",
        description:
          "Control spacing, color, shadows, and typography to create intentional interfaces.",
      },
    ],
  },
  {
    id: "js-fundamentals",
    phase: 4,
    filename: "js-fundamentals.js",
    category: "JavaScript",
    title: "JavaScript Fundamentals",
    description:
      "Build interactive experiences with the language primitives modern web apps depend on every day.",
    accent: "#fbbf24",
    topics: [
      {
        title: "Variables & types",
        description:
          "Understand primitives, objects, arrays, and the rules that shape data in JavaScript.",
      },
      {
        title: "Functions",
        description:
          "Create reusable logic and understand scope, parameters, and closures.",
      },
      {
        title: "DOM APIs",
        description:
          "Select, modify, and respond to page elements without overcomplicating your code.",
      },
      {
        title: "Events",
        description:
          "Handle user input and browser interactions with predictable event-driven logic.",
      },
    ],
  },
  {
    id: "js-deep-dive",
    phase: 5,
    filename: "js-deep-dive.js",
    category: "JavaScript",
    title: "JavaScript Deep Dive",
    description:
      "Go beyond the basics and understand how JavaScript works under the hood in real applications.",
    accent: "#fbbf24",
    topics: [
      {
        title: "Closures",
        description:
          "Use lexical scope to create encapsulated, stateful behavior in functions.",
      },
      {
        title: "Prototypes",
        description:
          "Understand object inheritance and how JavaScript models behavior internally.",
      },
      {
        title: "Async patterns",
        description:
          "Handle promises, async/await, and event loops without blocking the UI.",
      },
      {
        title: "Performance",
        description:
          "Avoid unnecessary work and write faster code for user-facing interactions.",
      },
    ],
  },
  {
    id: "git-github",
    phase: 6,
    filename: "git-github.sh",
    category: "Git",
    title: "Git & GitHub",
    description:
      "Collaborate with teams effectively by using version control and code review workflows.",
    accent: "#ef4444",
    topics: [
      {
        title: "Version control",
        description:
          "Track file changes, branch features, and merge work without losing momentum.",
      },
      {
        title: "Commits",
        description:
          "Write clear commit history that documents purpose and impact for future contributors.",
      },
      {
        title: "Pull requests",
        description:
          "Review code, discuss implementation choices, and keep a healthy team process.",
      },
      {
        title: "Workflows",
        description:
          "Use GitHub for issue tracking, deployment hooks, and team collaboration.",
      },
    ],
  },
  {
    id: "react-fundamentals",
    phase: 7,
    filename: "react-fundamentals.jsx",
    category: "React",
    title: "React Fundamentals",
    description:
      "Compose component-based interfaces and turn data into interactive UI with modern patterns.",
    accent: "#60a5fa",
    topics: [
      {
        title: "Components",
        description:
          "Break interfaces into reusable building blocks with clear responsibilities.",
      },
      {
        title: "Props",
        description:
          "Pass data and behavior through component boundaries with predictable contracts.",
      },
      {
        title: "State",
        description:
          "React to user input and application events while keeping renders efficient.",
      },
      {
        title: "Hooks",
        description:
          "Use state and side effects in a way that keeps logic readable and maintainable.",
      },
    ],
  },
  {
    id: "react-advanced",
    phase: 8,
    filename: "react-advanced.jsx",
    category: "React",
    title: "React Advanced",
    description:
      "Master the patterns that support larger apps, complex state, and maintainable design systems.",
    accent: "#60a5fa",
    topics: [
      {
        title: "Hooks deep dive",
        description:
          "Understand effect timing, custom hooks, and context-driven composition.",
      },
      {
        title: "Performance",
        description:
          "Optimize rerenders with memoization and careful data flow design.",
      },
      {
        title: "Forms",
        description:
          "Build controlled inputs, validation, and accessible form behavior.",
      },
      {
        title: "Patterns",
        description:
          "Use composition, render props, and reusable abstractions to keep code clean.",
      },
    ],
  },
  {
    id: "api-integration",
    phase: 9,
    filename: "api-integration.http",
    category: "API",
    title: "API Integration",
    description:
      "Connect the frontend to services, fetch data safely, and handle state transitions gracefully.",
    accent: "#f97316",
    topics: [
      {
        title: "HTTP basics",
        description:
          "Understand requests, responses, status codes, and payload shape.",
      },
      {
        title: "REST APIs",
        description:
          "Define resource-oriented endpoints and consume them in UI workflows.",
      },
      {
        title: "Data fetching",
        description:
          "Handle loading, errors, and retries without confusing the user experience.",
      },
      {
        title: "Security",
        description:
          "Protect data access and avoid leaking sensitive information from the browser.",
      },
    ],
  },
  {
    id: "state-management",
    phase: 10,
    filename: "state-management.tsx",
    category: "State",
    title: "State Management",
    description:
      "Model app data and updates in a way that scales as features become more complex.",
    accent: "#22c55e",
    topics: [
      {
        title: "Local state",
        description:
          "Use React state for component-level UI logic and interactive behavior.",
      },
      {
        title: "Server state",
        description:
          "Keep fetched data and UI status in sync across screens and requests.",
      },
      {
        title: "Global state",
        description:
          "Choose the right tool when multiple parts of the app need shared data.",
      },
      {
        title: "Derived state",
        description:
          "Avoid duplication by computing values from existing state when possible.",
      },
    ],
  },
  {
    id: "forms-validation",
    phase: 11,
    filename: "forms-validation.tsx",
    category: "Forms",
    title: "Forms & Validation",
    description:
      "Build reliable user input flows that are accessible, clear, and easy to correct.",
    accent: "#f59e0b",
    topics: [
      {
        title: "Accessible inputs",
        description:
          "Pair labels, descriptions, and focus states to support all users.",
      },
      {
        title: "Validation",
        description:
          "Check required fields, format, and edge cases before submit.",
      },
      {
        title: "Error handling",
        description:
          "Provide timely feedback without blocking the user unnecessarily.",
      },
      {
        title: "UX patterns",
        description:
          "Guide users through entry flows with progressive validation and clear hints.",
      },
    ],
  },
  {
    id: "typescript",
    phase: 12,
    filename: "typescript.ts",
    category: "TypeScript",
    title: "TypeScript",
    description:
      "Add safer contracts to frontend code so refactors and team collaboration are easier.",
    accent: "#3b82f6",
    topics: [
      {
        title: "Types",
        description:
          "Model data shapes and minimize silent runtime errors in application logic.",
      },
      {
        title: "Generics",
        description:
          "Write reusable abstractions that remain type-safe and clear.",
      },
      {
        title: "Utility types",
        description:
          "Compose common transforms for flexible, maintainable data models.",
      },
      {
        title: "Migration",
        description:
          "Introduce TypeScript gradually without breaking the existing codebase.",
      },
    ],
  },
  {
    id: "testing",
    phase: 13,
    filename: "testing.spec.ts",
    category: "Testing",
    title: "Testing",
    description:
      "Verify behavior with confidence and prevent regressions as applications grow.",
    accent: "#10b981",
    topics: [
      {
        title: "Unit tests",
        description:
          "Validate isolated logic and edge cases with focused, repeatable checks.",
      },
      {
        title: "Integration tests",
        description:
          "Exercise the combined behavior of components, data flow, and UI updates.",
      },
      {
        title: "E2E tests",
        description:
          "Cover user journeys from route change to interaction and success states.",
      },
      {
        title: "Test strategy",
        description:
          "Balance coverage and speed so the suite remains useful and maintainable.",
      },
    ],
  },
  {
    id: "performance",
    phase: 14,
    filename: "performance.ts",
    category: "Performance",
    title: "Performance",
    description:
      "Keep interfaces responsive by reducing unnecessary work and optimizing the critical path.",
    accent: "#f97316",
    topics: [
      {
        title: "Bundle size",
        description:
          "Reduce payloads and remove unused code to improve startup speed.",
      },
      {
        title: "Rendering",
        description:
          "Use careful state changes and memoization to avoid expensive rerenders.",
      },
      {
        title: "Assets",
        description:
          "Compress images and choose efficient formats for a faster user experience.",
      },
      {
        title: "Monitoring",
        description:
          "Measure real-world performance to guide improvements with evidence.",
      },
    ],
  },
  {
    id: "security",
    phase: 15,
    filename: "security.ts",
    category: "Security",
    title: "Frontend Security",
    description:
      "Protect user data and preserve trust by avoiding common client-side vulnerabilities.",
    accent: "#ef4444",
    topics: [
      {
        title: "XSS prevention",
        description:
          "Treat user-provided values carefully and avoid unsafe rendering patterns.",
      },
      {
        title: "Authentication",
        description:
          "Understand token and session flows and how to keep access checks secure.",
      },
      {
        title: "CSP",
        description:
          "Use browser policies to limit what scripts and resources are allowed to run.",
      },
      {
        title: "Data handling",
        description:
          "Protect sensitive data and avoid exposing credentials or tokens in the client.",
      },
    ],
  },
  {
    id: "architecture",
    phase: 16,
    filename: "architecture.md",
    category: "Architecture",
    title: "Frontend Architecture",
    description:
      "Design systems and code structure that remain maintainable as projects and teams expand.",
    accent: "#8b5cf6",
    topics: [
      {
        title: "Code organization",
        description:
          "Keep feature boundaries clear so teams can work without unnecessary coupling.",
      },
      {
        title: "Patterns",
        description:
          "Choose modular patterns that scale without turning the app into a monolith.",
      },
      {
        title: "Design systems",
        description:
          "Standardize components and accessibility decisions across the interface.",
      },
      {
        title: "Scaling",
        description:
          "Prepare for growth by making decisions that keep complexity under control.",
      },
    ],
  },
  {
    id: "deployment",
    phase: 17,
    filename: "deployment.yml",
    category: "Deploy",
    title: "Deployment",
    description:
      "Ship your app with repeatable pipelines and confidence that production works as expected.",
    accent: "#22c55e",
    topics: [
      {
        title: "Build pipeline",
        description:
          "Prepare production builds and validate quality before deployment.",
      },
      {
        title: "Hosting",
        description:
          "Choose the right provider and process for static or server-driven applications.",
      },
      {
        title: "Environment config",
        description:
          "Manage variables and secrets safely across local, staging, and production.",
      },
      {
        title: "Monitoring",
        description:
          "Track output, uptime, and regressions so releases stay stable.",
      },
    ],
  },
  {
    id: "projects",
    phase: 18,
    filename: "projects.md",
    category: "Projects",
    title: "Real-World Projects",
    description:
      "Turn your roadmap into practical experience by shipping complete, user-focused features.",
    accent: "#f59e0b",
    topics: [
      {
        title: "Portfolio work",
        description:
          "Build polished projects that show taste, decision-making, and technical depth.",
      },
      {
        title: "Business logic",
        description:
          "Solve real problems with clean flows, understandable architecture, and tests.",
      },
      {
        title: "UX decisions",
        description:
          "Improve product value by focusing on clarity, performance, and accessibility.",
      },
      {
        title: "Showcase",
        description:
          "Document decisions and tradeoffs so others can understand the thinking behind your work.",
      },
    ],
  },
  {
    id: "final-roadmap",
    phase: 19,
    filename: "final-roadmap.md",
    category: "Final",
    title: "Final Roadmap",
    description:
      "Bring together everything you’ve learned into a consistent, dependable frontend workflow.",
    accent: "#f97316",
    topics: [
      {
        title: "Practice consistently",
        description:
          "Build often and improve with feedback from real product work and code reviews.",
      },
      {
        title: "Keep learning",
        description:
          "Frontend evolves quickly, so stay curious and revisit fundamentals often.",
      },
      {
        title: "Ship with intent",
        description:
          "Prioritize clarity, usability, and maintainability in every feature you build.",
      },
      {
        title: "Grow your craft",
        description:
          "Turn technical skill into thoughtful product decisions and sustainable work habits.",
      },
    ],
  },
];
