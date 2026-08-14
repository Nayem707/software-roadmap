import RoadmapViewer from "../../roadmap/components/RoadmapViewer";
import { htmlSlides } from "../data/htmlSlides";

export default function HtmlPage() {
  return <RoadmapViewer slides={htmlSlides} topicId="html" />;
}
