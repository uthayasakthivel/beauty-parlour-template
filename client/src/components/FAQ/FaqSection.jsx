import { useState } from "react";
import faqs from "../../data/faqs";
import SectionTitle from "../Common/SectionTitle";
import FaqItem from "./FaqItem";

export default function FaqSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before your appointment."
        />

        <div className="space-y-5">
          {faqs.map((faq) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              isOpen={active === faq.id}
              onClick={() => setActive(active === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
