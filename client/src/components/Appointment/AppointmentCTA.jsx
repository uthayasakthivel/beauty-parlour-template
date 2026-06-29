import { FaPhoneAlt, FaWhatsapp, FaCalendarCheck } from "react-icons/fa";

import site from "../../config/site";
import Button from "../UI/Button";

export default function AppointmentCTA() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-32"
      style={{
        backgroundImage: "url('/images/appointment-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <p className="mb-4 uppercase tracking-[6px] text-pink-300">
          Book Appointment
        </p>

        <h2 className="heading-font mb-8 text-5xl md:text-6xl">
          Ready for Your Beauty Transformation?
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-200">
          Whether it's a bridal makeover, haircut, facial, or spa treatment, our
          professionals are here to help you look and feel your absolute best.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <a href={`tel:${site.phone}`}>
            <Button className="flex items-center gap-3">
              <FaPhoneAlt />
              Call Now
            </Button>
          </a>

          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-3">
              <FaWhatsapp />
              WhatsApp
            </Button>
          </a>

          <Button className="flex items-center gap-3">
            <FaCalendarCheck />
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
