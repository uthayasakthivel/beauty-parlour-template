import { motion } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";

export default function GalleryCard({ item }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl shadow-xl cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-80 w-full object-cover duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/55 opacity-0 transition duration-500 group-hover:opacity-100">
          <FaSearchPlus className="text-4xl text-white mb-5" />

          <h3 className="heading-font text-3xl text-white">{item.title}</h3>

          <p className="mt-2 text-teal-300">{item.category}</p>
        </div>
      </div>
    </motion.div>
  );
}
