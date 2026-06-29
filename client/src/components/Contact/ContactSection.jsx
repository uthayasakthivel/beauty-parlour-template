// ── Contact info pulls from src/config/site.js ──
// ── To change working hours, edit site.workingHours in site.js ──

import contactInfo from "../../data/contactInfo";
import SectionTitle from "../Common/SectionTitle";
import Button from "../UI/Button";
import site from "../../config/site";

export default function ContactSection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="Contact"
          title="Let's Get In Touch"
          description="Have a question or want to book a service? We'd love to hear from you."
        />

        {/* Contact Cards */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-3xl border border-pink-100 bg-pink-50 p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <Icon className="mx-auto mb-4 text-4xl text-pink-600" />

                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>

                <p className="text-gray-600">{item.value}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form + Working Hours */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-3xl border border-pink-100 p-8 shadow-lg">
            <h3 className="mb-6 text-2xl font-semibold">Send Us a Message</h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-gray-300 p-4 focus:border-pink-500 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-gray-300 p-4 focus:border-pink-500 focus:outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-300 p-4 focus:border-pink-500 focus:outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full rounded-xl border border-gray-300 p-4 focus:border-pink-500 focus:outline-none"
              />

              <Button type="submit">Send Message</Button>
            </form>
          </div>

          {/* Working Hours — edit in site.js → workingHours */}
          <div className="rounded-3xl bg-pink-600 p-8 text-white shadow-lg">
            <h3 className="mb-6 text-3xl heading-font">Opening Hours</h3>

            <div className="space-y-4 text-lg">
              <div className="flex justify-between border-b border-pink-400 pb-3">
                <span>Monday - Saturday</span>
                <span>{site.workingHours.weekdays}</span>
              </div>

              <div className="flex justify-between border-b border-pink-400 pb-3">
                <span>Sunday</span>
                <span>{site.workingHours.sunday}</span>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-white/10 p-6">
              <h4 className="mb-2 text-xl font-semibold">
                Need Immediate Assistance?
              </h4>

              <p className="text-pink-100">
                Call us or send a WhatsApp message to book your appointment
                instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
