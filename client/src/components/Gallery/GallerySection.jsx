// ============================================================
//  GALLERY SECTION
//  ── To add/rename filter categories:
//     1. Update the `categories` array below
//     2. Make sure gallery.js uses matching category strings
// ============================================================

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import gallery from "../../data/gallery";
import SectionTitle from "../Common/SectionTitle";
import GalleryCard from "./GalleryCard";

// ← Update these to match categories used in data/gallery.js
const categories = ["All", "Category1", "Category2", "Category3"];

export default function GallerySection() {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All"
      ? gallery
      : gallery.filter((item) => item.category === selected);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          subtitle="Portfolio"
          title="Our Recent Work"
          description="Take a look at some of our best work and transformations."
        />

        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelected(category)}
              className={`px-6 py-3 rounded-full font-medium transition ${
                selected === category
                  ? "bg-teal-600 text-white"
                  : "bg-teal-100 hover:bg-teal-600 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
