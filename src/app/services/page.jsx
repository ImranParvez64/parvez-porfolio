"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

export const services = [
  {
    num: "01",
    title: "Website Design",
    description:
      "Professional and modern website design focused on clean UI and great user experience.",
    slug: "website-design",
  },
  {
    num: "02",
    title: "Frontend Develop",
    description:
      "Building fast, responsive, and modern websites using Next.js, React, and Tailwind CSS.",
    slug: "frontend-development",
  },
  {
    num: "03",
    title: "Backend Development",
    description:
      "Developing secure and scalable backend systems using Node.js, Express, and MongoDB.",
    slug: "backend-development",
  },
  {
    num: "04",
    title: "UI Design",
    description:
      "Simple, modern, and user-friendly interface designs that enhance clarity and usability.",
    slug: "ui-design",
  },
];


export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col justify-center gap-6 group space-y-4"
            >
              {/* Top */}
              <div className="w-full flex justify-between items-center">
                <div
                  className="text-5xl font-extrabold text-outline text-transparent 
                  group-hover:text-[#00f5d4] transition-all duration-500"
                >
                  {service.num}
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="w-[70px] h-[70px] rounded-full bg-white 
                  group-hover:bg-accent transition-all duration-500 
                  flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              {/* Title */}
              <h2 className="text-[30px] md:text-[42px] font-bold leading-0 text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-white/70">{service.description}</p>

              {/* Bottom Border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
