// ============================================================
//  WHY CHOOSE US SECTION
//  ── Features data: edit src/data/features.js
//  ── Image: replace /src/assets/images/why-choose-us.jpg
//  ── Inline stats (bottom of right column): edit the 3 items below
// ============================================================

import { motion } from "framer-motion";
import image from "../../assets/images/why-choose-us.jpg";
import features from "../../data/features";
import SectionTitle from "../Common/SectionTitle";
import { fadeUp } from "../../config/animations/variants";

export default function WhyChooseUs() {
  return (
    <section className="bg-teal-50 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Left Image — replace why-choose-us.jpg */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={image}
            alt="Why Choose Us"
            className="rounded-[40px] shadow-2xl"
          />

          <div className="absolute -bottom-8 -right-8 rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-5xl font-bold text-teal-600">10+</h2>
            <p className="mt-2 text-gray-600">Years Experience</p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle
            subtitle="Why Choose Us"
            title="Because Every Client Deserves The Best"
            description="We combine skilled professionals, premium products and exceptional customer care to deliver outstanding results."
          />

          <div className="grid gap-6 mt-10">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  whileHover={{ x: 10 }}
                  className="flex gap-5 rounded-2xl bg-white p-6 shadow-md"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-teal-100 text-3xl text-teal-600">
                    <Icon />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-gray-600 leading-7">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Inline mini-stats — edit the 3 values below ── */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-teal-600">1000+</h2>{" "}
              {/* ← edit */}
              <p className="text-gray-600 mt-2">Happy Clients</p> {/* ← edit */}
            </div>

            <div>
              <h2 className="text-4xl font-bold text-teal-600">20+</h2>{" "}
              {/* ← edit */}
              <p className="text-gray-600 mt-2">Services</p> {/* ← edit */}
            </div>

            <div>
              <h2 className="text-4xl font-bold text-teal-600">4.9★</h2>{" "}
              {/* ← edit */}
              <p className="text-gray-600 mt-2">Client Rating</p> {/* ← edit */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
