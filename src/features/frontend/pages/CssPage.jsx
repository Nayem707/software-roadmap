import RoadmapViewer from "../../roadmap/components/RoadmapViewer";
import { cssSlides } from "../data/cssSlides";

export default function CssPage() {
  return <RoadmapViewer slides={cssSlides} topicId="css" />;
}
