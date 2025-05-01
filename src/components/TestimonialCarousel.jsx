"use client";

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const testimonials = [
  {
    quote: "Luno has completely transformed how I manage my daily tasks. The clean interface makes organizing my priorities so much easier.",
    name: "Sarah Johnson",
    designation: "Product Designer",
    avatar: "https://avatar.iran.liara.run/public/45"
  },
  {
    quote: "As a team lead, Luno has been invaluable for coordinating tasks and keeping everyone on the same page. The collaboration features are fantastic.",
    name: "Michael Chen",
    designation: "Engineering Manager",
    avatar: "https://avatar.iran.liara.run/public/29"
  },
  {
    quote: "I've tried many planning tools, but Luno strikes the perfect balance between powerful features and simplicity. It's part of my daily workflow now.",
    name: "Alex Rivera",
    designation: "Marketing Consultant",
    avatar: "https://avatar.iran.liara.run/public/60"
  },
  {
    quote: "The intuitive design of Luno helped our small team stay aligned on priorities while reducing our meeting time. It's become essential to our workflow.",
    name: "Emma Rodriguez",
    designation: "Project Manager",
    avatar: "https://avatar.iran.liara.run/public/37"
  },
  {
    quote: "I appreciate how Luno focuses on what matters - simple planning without the bloat. Perfect for keeping my freelance projects on track.",
    name: "David Park",
    designation: "UX Designer",
    avatar: "https://avatar.iran.liara.run/public/42"
  }
];

const TestimonialCarousel = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          480: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="testimonial-swiper py-8 w-[300px] md:w-[600px] lg:w-[900px]"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="h-auto">
            <div className="h-full bg-white border border-primary/50 p-6 rounded-xl flex flex-col">
              <div className="mb-8 flex-grow">
                <p className="text-dark font-main font-extralight leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-dark/90">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-dark/40">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;