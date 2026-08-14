import RoadmapViewer from "../../roadmap/components/RoadmapViewer";
import { gitHubSlides } from "../data/gitHubSlides";

export default function GitHubPage() {
  return <RoadmapViewer slides={gitHubSlides} topicId="git-github" />;
}
