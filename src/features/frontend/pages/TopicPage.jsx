import { Link, useParams } from "react-router-dom";
import { cssTopics } from "../data/cssTopics";
import { gitHubTopics } from "../data/gitHubTopics";
import { htmlTopics } from "../data/htmlTopics";
import { javascriptTopics } from "../data/javascriptTopics";

const topicMap = {
  html: htmlTopics,
  css: cssTopics,
  javascript: javascriptTopics,
  "git-github": gitHubTopics,
};

export default function TopicPage() {
  const { topicSlug } = useParams();
  const topic = topicMap[topicSlug] ?? htmlTopics;

  return (
    <div className="mx-auto flex h-[calc(100vh-36px)] min-h-[700px] w-full max-w-[1200px] flex-col rounded-xl border border-slate-700/70 bg-[#09131d] p-8 shadow-[0_10px_25px_rgba(2,6,23,0.45)]">
      <header className="mb-8 border-b border-slate-700/50 pb-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="block h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="block h-2.5 w-2.5 rounded-full bg-[#ffbd2f]" />
          <span className="block h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Frontend
            </p>
            <h1 className="text-3xl font-bold text-slate-50">{topic.title}</h1>
          </div>
          <Link
            to="/frontend"
            className="rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:bg-slate-700"
          >
            Back to topics
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <p className="mb-6 max-w-3xl text-base leading-7 text-slate-300">
          {topic.description}
        </p>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {topic.topics.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-4"
            >
              <div className="mb-2 flex items-center gap-3">
                <span
                  className="block h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: topic.accent }}
                />
                <h2 className="m-0 text-base font-semibold text-slate-50">
                  {item.title}
                </h2>
              </div>
              <p className="m-0 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
