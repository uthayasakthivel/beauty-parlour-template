// ── Update your Instagram URL in src/config/site.js → social.instagram ──
// ── Replace the 6 images in /public/instagram/ with your own photos ──

import { FaInstagram } from "react-icons/fa";
import site from "../../config/site";

// Place 6 photos named 1.jpg to 6.jpg in /public/instagram/
const images = [
  "/instagram/1.jpg",
  "/instagram/2.jpg",
  "/instagram/3.jpg",
  "/instagram/4.jpg",
  "/instagram/5.jpg",
  "/instagram/6.jpg",
];

export default function InstagramSection() {
  return (
    <section className="bg-[#FFF5F8] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[6px] text-teal-600 font-semibold">
            Instagram
          </p>

          <h2 className="heading-font mt-4 text-5xl md:text-6xl">
            Follow Our Journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Discover our latest work, behind-the-scenes moments and
            transformations on Instagram.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
          {images.map((image, index) => (
            <a
              key={index}
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl"
            >
              <img
                src={image}
                alt={`Instagram ${index + 1}`}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100">
                <FaInstagram className="text-5xl text-white" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-teal-600 px-8 py-4 text-white transition hover:bg-teal-700"
          >
            <FaInstagram />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
