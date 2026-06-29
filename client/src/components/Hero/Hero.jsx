// ============================================================
//  HERO SECTION
//  ── Background image: replace /src/assets/images/hero.jpg
//  ── Edit headline, subtext and button labels below
//  ── Overlay darkness: change bg-black/55 (10–80 range)
// ============================================================

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero.jpg";
import site from "../../config/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* ── Background Image — replace hero.jpg in /src/assets/images/ ── */}
      <img
        src={heroImage}
        alt={`${site.brand.first}${site.brand.second}`}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* ── Overlay — change opacity: bg-black/55 → bg-black/40 (lighter) or bg-black/70 (darker) ── */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* ── Hero Content ── */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="max-w-2xl text-white">
          {/* ── Eyebrow label — edit text below ── */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-lg uppercase tracking-[8px] text-teal-300"
          >
            {site.tagline} {/* ← Edit tagline in config/site.js */}
          </motion.p>

          {/* ── Main Headline — edit below ── */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-5xl font-bold leading-tight md:text-7xl"
          >
            Your Powerful Headline Goes Here
          </motion.h1>

          {/* ── Subtext ── */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-10 text-lg leading-8 text-gray-200"
          >
            A short, compelling description of your services and what makes you
            special. 1–2 sentences is ideal.
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-5"
          >
            {/* Primary CTA — change path and label */}
            <Link
              to="/appointment"
              className="rounded-full bg-teal-600 px-8 py-4 text-lg font-semibold transition hover:bg-teal-700"
            >
              Book Appointment
            </Link>

            {/* Secondary CTA — change path and label */}
            <Link
              to="/services"
              className="rounded-full border border-white px-8 py-4 text-lg font-semibold transition hover:bg-white hover:text-black"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white"
      >
        <div className="mx-auto mb-2 h-12 w-6 rounded-full border-2 border-white">
          <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-white"></div>
        </div>
        <p className="text-sm tracking-widest uppercase">Scroll</p>
      </motion.div>
    </section>
  );
}
