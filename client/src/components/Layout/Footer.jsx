import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import site from "../../config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="mb-5 text-3xl font-bold">
              <span className="text-teal-500">{site.brand.first}</span>
              <span className="text-white">{site.brand.second}</span>
            </h2>

            <p className="leading-7 text-gray-400">
              Luxury beauty services with experienced professionals, premium
              products, and a relaxing atmosphere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">Contact</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-teal-500" />
                <span>{site.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-teal-500" />
                <span>{site.email}</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-teal-500" />
                <span>{site.address}</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">Follow Us</h3>

            <div className="flex gap-4">
              <a
                href={site.social.facebook}
                className="rounded-full bg-teal-600 p-3 transition hover:scale-110"
              >
                <FaFacebookF />
              </a>

              <a
                href={site.social.instagram}
                className="rounded-full bg-teal-600 p-3 transition hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href={`https://wa.me/${site.whatsapp}`}
                className="rounded-full bg-teal-600 p-3 transition hover:scale-110"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © {year} {site.brand.first} {site.brand.second}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
