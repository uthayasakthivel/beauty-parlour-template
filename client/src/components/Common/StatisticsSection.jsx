import statistics from "../../data/statistics";
import StatsCounter from "./StatsCounter";
import { motion } from "framer-motion";

export default function StatisticsSection() {
  return (
    <section className="bg-linear-to-r from-pink-600 to-rose-500 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-4">
        {statistics.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-md"
            >
              <Icon className="mx-auto mb-6 text-5xl text-white" />

              <h2 className="text-5xl font-bold text-white">
                <StatsCounter end={item.value} suffix={item.suffix} />
              </h2>

              <p className="mt-4 text-lg text-pink-100">{item.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
