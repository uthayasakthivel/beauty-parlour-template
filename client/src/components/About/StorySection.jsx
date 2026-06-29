// ============================================================
//  STORY / ABOUT SECTION
//  ── Image: replace /public/about/story.jpg
//  ── Edit headline, paragraphs and bullet points below
//  ── Edit mini-stats at the bottom
// ============================================================

import { FaCheckCircle } from "react-icons/fa";

// ← Edit these bullet points
const features = [
  "Your Key Strength 1",
  "Your Key Strength 2",
  "Your Key Strength 3",
  "Your Key Strength 4",
];

export default function StorySection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        {/* Image — replace /public/about/story.jpg */}
        <div>
          <img
            src="/about/story.jpg"
            alt="Our Story"
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>

        {/* Content */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-pink-600">
            Our Story
          </p>

          {/* ← Edit headline */}
          <h2 className="mb-6 text-5xl font-bold text-gray-900">
            Your Story Headline Goes Here
          </h2>

          {/* ← Edit description paragraph */}
          <p className="mb-6 leading-8 text-gray-600">
            Write a short paragraph about your business story, values, and what
            makes your approach unique. Keep it personal and authentic — 2 to 3
            sentences works well here.
          </p>

          <div className="space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <FaCheckCircle className="text-xl text-pink-600" />
                <span className="text-lg text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* ── Mini-stats — edit values ── */}
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="rounded-2xl bg-pink-50 p-6 text-center">
              <h3 className="text-4xl font-bold text-pink-600">5+</h3>{" "}
              {/* ← edit */}
              <p className="mt-2 text-gray-600">Years Experience</p>{" "}
              {/* ← edit */}
            </div>

            <div className="rounded-2xl bg-pink-50 p-6 text-center">
              <h3 className="text-4xl font-bold text-pink-600">500+</h3>{" "}
              {/* ← edit */}
              <p className="mt-2 text-gray-600">Happy Clients</p> {/* ← edit */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
