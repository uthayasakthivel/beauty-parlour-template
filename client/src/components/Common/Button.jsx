import { motion } from "framer-motion";

export default function Button({ children, className = "", ...props }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={`

rounded-full
bg-teal-600
text-white
px-8
py-4
font-semibold
shadow-lg
hover:bg-teal-700
transition-all
duration-300

${className}

`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
