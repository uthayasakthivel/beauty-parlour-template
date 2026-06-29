export default function Badge({ children }) {
  return (
    <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
      {children}
    </span>
  );
}
