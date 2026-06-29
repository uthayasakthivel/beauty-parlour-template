import { motion } from "framer-motion";

export default function Button({
  children,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-pink-600
        px-8
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:bg-pink-700
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}
