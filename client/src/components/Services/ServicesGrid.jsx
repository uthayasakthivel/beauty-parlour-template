import { motion } from "framer-motion";
import services from "../../data/services";
import SectionTitle from "../Common/SectionTitle";

export default function ServicesGrid() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="Our Services"
          title="Luxury Beauty Treatments"
          description="From bridal makeup to skincare and spa therapy, we provide premium beauty services using modern techniques and trusted products."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="group rounded-3xl border border-pink-100 bg-white p-8 shadow-sm transition hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 text-3xl text-pink-600 transition group-hover:bg-pink-600 group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="leading-8 text-gray-600">{service.description}</p>

                <button className="mt-8 font-semibold text-pink-600 transition hover:translate-x-2">
                  Learn More →
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
