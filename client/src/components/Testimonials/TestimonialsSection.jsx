import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import testimonials from "../../data/testimonials";
import SectionTitle from "../Common/SectionTitle";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className="bg-[#FFF5F8] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="We are proud to make every client feel beautiful and confident."
        />

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
          }}
          navigation
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
