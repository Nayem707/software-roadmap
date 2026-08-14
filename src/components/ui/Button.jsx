export default function Button({
  children,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <button
      className={`ui-button ${className}`.trim()}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
