export default function Badge({ children, className = "", style }) {
  return (
    <span className={`ui-badge ${className}`.trim()} style={style}>
      {children}
    </span>
  );
}
