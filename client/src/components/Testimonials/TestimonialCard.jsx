import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="rounded-3xl bg-white/90 p-8 shadow-xl backdrop-blur-md">
      <FaQuoteLeft className="mb-6 text-4xl text-teal-500" />

      <p className="mb-8 leading-8 text-gray-600">"{testimonial.review}"</p>

      <div className="mb-6 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <FaStar key={index} className="text-yellow-400" />
        ))}
      </div>

      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-lg">{testimonial.name}</h4>

          <p className="text-sm text-teal-600">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
