import { motion } from "framer-motion";

export default function Card({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`rounded-[28px] bg-white shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}
