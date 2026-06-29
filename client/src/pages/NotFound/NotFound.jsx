import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 text-center">
      <h1 className="text-8xl font-bold text-teal-600">404</h1>

      <p className="mt-4 text-xl text-gray-600">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-full bg-teal-600 px-6 py-3 text-white transition hover:bg-teal-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
