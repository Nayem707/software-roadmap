import RoadmapViewer from "../../roadmap/components/RoadmapViewer";
import { javascriptSlides } from "../data/javascriptSlides";

export default function JavaScriptPage() {
  return <RoadmapViewer slides={javascriptSlides} topicId="javascript" />;
}
