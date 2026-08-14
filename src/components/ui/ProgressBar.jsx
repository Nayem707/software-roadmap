export default function ProgressBar({ value = 0, className = "" }) {
  return (
    <div className={`ui-progress ${className}`.trim()} aria-label="Progress">
      <div className="ui-progress-fill" style={{ width: `${value}%` }} />
    </div>
  );
}
