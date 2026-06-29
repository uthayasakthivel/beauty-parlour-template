import { motion } from "framer-motion";

export default function SectionTitle({ subtitle, title, description }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="text-center max-w-3xl mx-auto mb-20"
    >
      <p className="uppercase tracking-[8px] text-teal-600 font-semibold">
        {subtitle}
      </p>

      <h2 className="heading-font text-6xl mt-4">{title}</h2>

      <p className="text-gray-600 mt-6 leading-8">{description}</p>
    </motion.div>
  );
}
