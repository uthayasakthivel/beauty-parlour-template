import team from "../../data/team";
import SectionTitle from "../Common/SectionTitle";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <section className="py-28 bg-[#FFF5F8]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          subtitle="Experts"
          title="Meet Our Beauty Specialists"
          description="Our talented professionals are passionate about making every client look and feel confident."
        />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[30px] bg-white shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  className="h-[420px] w-full object-cover duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-teal-600/70 opacity-0 transition duration-500 group-hover:opacity-100">
                  <button className="rounded-full bg-white p-4 text-teal-600">
                    <FaInstagram />
                  </button>

                  <button className="rounded-full bg-white p-4 text-teal-600">
                    <FaFacebookF />
                  </button>
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="heading-font text-3xl">{member.name}</h3>

                <p className="mt-2 text-teal-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
