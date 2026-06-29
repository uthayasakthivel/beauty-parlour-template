import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import site from "../../config/site";
const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        <NavLink to="/">
          <h1 className="text-3xl font-bold tracking-wide">
            <span className="text-pink-600">{site.brand.first}</span>
            <span className="text-gray-900">{site.brand.second}</span>
          </h1>
        </NavLink>

        <nav className="hidden lg:flex gap-8 items-center">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-pink-600"
                    : "text-gray-700 hover:text-pink-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <NavLink
            to="/appointment"
            className="bg-pink-600 text-white px-5 py-3 rounded-full hover:bg-pink-700 transition"
          >
            Book Now
          </NavLink>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden bg-white lg:hidden"
          >
            <div className="flex flex-col px-6 pb-5">
              {links.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 border-b"
                >
                  {item.name}
                </NavLink>
              ))}

              <NavLink
                to="/appointment"
                onClick={() => setMenuOpen(false)}
                className="mt-4 bg-pink-600 text-white rounded-lg py-3 text-center"
              >
                Book Appointment
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
