export default function TopicCard({ topic, accent }) {
  return (
    <article className="min-h-[132px] rounded-xl border border-slate-700/50 bg-slate-900/40 p-4">
      <div className="mb-2.5 flex items-center gap-2.5">
        <span
          className="block h-2.5 w-2.5 shrink-0 rounded-full"
          style={{ backgroundColor: accent }}
        />
        <h3 className="m-0 text-[15px] font-bold text-slate-50">
          {topic.title}
        </h3>
      </div>
      <p className="m-0 text-sm leading-6 text-slate-400">
        {topic.description}
      </p>
    </article>
  );
}
