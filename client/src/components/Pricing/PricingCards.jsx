import { motion } from "framer-motion";
import pricing from "../../data/pricing";
import SectionTitle from "../Common/SectionTitle";

export default function PricingCards() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="Packages"
          title="Beauty Packages Designed For You"
          description="Choose the perfect beauty experience that suits your occasion and budget."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {pricing.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              className={`relative overflow-hidden rounded-[30px] border p-10 shadow-lg transition ${
                plan.popular
                  ? "border-pink-600 bg-gradient-to-b from-pink-600 to-pink-500 text-white"
                  : "border-pink-100 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-[-45px] top-8 rotate-45 bg-yellow-400 px-12 py-2 text-sm font-bold text-black">
                  MOST POPULAR
                </div>
              )}

              <h3 className="mb-5 text-3xl font-bold">{plan.title}</h3>

              <div className="mb-8">
                <span className="text-5xl font-bold">₹{plan.price}</span>

                <span className="ml-2 opacity-80">/ Package</span>
              </div>

              <div className="space-y-4">
                {plan.features.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <plan.icon
                      className={`${
                        plan.popular ? "text-white" : "text-pink-600"
                      }`}
                    />

                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-10 w-full rounded-full py-4 text-lg font-semibold transition ${
                  plan.popular
                    ? "bg-white text-pink-600 hover:bg-pink-100"
                    : "bg-pink-600 text-white hover:bg-pink-700"
                }`}
              >
                Book Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
