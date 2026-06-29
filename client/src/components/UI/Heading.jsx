export default function Heading({ children, className = "" }) {
  return (
    <h2
      className={`heading-font text-5xl font-semibold text-gray-900 ${className}`}
    >
      {children}
    </h2>
  );
}
