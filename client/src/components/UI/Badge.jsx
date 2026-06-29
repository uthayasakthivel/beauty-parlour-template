export default function Badge({ children }) {
  return (
    <span className="inline-block rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-600">
      {children}
    </span>
  );
}
