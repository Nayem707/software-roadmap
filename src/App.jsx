import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./features/landing/pages/LandingPage";
import MotivationPage from "./features/motivation/pages/MotivationPage";
import SdlcPage from "./features/sdlc/pages/SdlcPage";
import FrontendPage from "./features/frontend/pages/FrontendPage";
import HtmlPage from "./features/frontend/pages/HtmlPage";
import CssPage from "./features/frontend/pages/CssPage";
import JavaScriptPage from "./features/frontend/pages/JavaScriptPage";
import GitHubPage from "./features/frontend/pages/GitHubPage";
import BackendPage from "./features/backend/pages/BackendPage";
import RoadmapPresentation from "./features/roadmap/components/RoadmapPresentation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/motivation-mindset" element={<MotivationPage />} />
        <Route path="/sdlc" element={<SdlcPage />} />
        <Route path="/frontend" element={<FrontendPage />} />
        <Route path="/frontend/html" element={<HtmlPage />} />
        <Route path="/frontend/html/:subtopicSlug" element={<HtmlPage />} />
        <Route path="/frontend/css" element={<CssPage />} />
        <Route path="/frontend/css/:subtopicSlug" element={<CssPage />} />
        <Route path="/frontend/javascript" element={<JavaScriptPage />} />
        <Route
          path="/frontend/javascript/:subtopicSlug"
          element={<JavaScriptPage />}
        />
        <Route path="/frontend/git-github" element={<GitHubPage />} />
        <Route
          path="/frontend/git-github/:subtopicSlug"
          element={<GitHubPage />}
        />
        <Route path="/backend" element={<BackendPage />} />
        <Route path="/frontend-roadmap" element={<RoadmapPresentation />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
