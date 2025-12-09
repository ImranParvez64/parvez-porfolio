"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowRight, BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Daily Hut",
    description:
      "A modern grocery shop website where users can browse products, see pricing, and easily add items to their cart. Built with a clean UI and smooth user experience.",
    stck: [{ name: "React.js" }, { name: "Next.js" }, { name: "Javascript" }],
    image: "/assets/work/2.png",
    live: "https://daily-hut.vercel.app/",
    github: "https://github.com/ImranParvez64/daily-hut.git",
  },
  {
    num: "02",
    category: "frontend",
    title: "Edunexi",
    description:
      "A modern Learning Management System where users can enroll in courses, track progress, and learn through an intuitive and user-friendly interface.",
    stck: [{ name: "React.js" }, { name: "Next.js" }, { name: "Javascript" }],
    image: "/assets/work/6.png",
    live: "https://edu-nexi.vercel.app/",
    github: "https://github.com/ImranParvez64/edu-nexi.git",
  },
  {
    num: "03",
    category: "frontend",
    title: "Deshi Cart",
    description:
      "A modern multi-category shopping platform where users can explore clothing, baby products, home essentials, and various lifestyle items through a clean, intuitive.",
    stck: [{ name: "React.js" }, { name: "Next.js" }, { name: "Javascript" }],
    image: "/assets/work/3.png",
    live: "https://deshi-cart-black.vercel.app/",
    github: "https://github.com/ImranParvez64/deshiCart.git",
  },
  {
    num: "04",
    category: "frontend",
    title: "G3-Architecs",
    description:
      "A modern real estate platform where users can explore properties, compare options, and make informed decisions through a clean and intuitive interface.",
    stck: [{ name: "Html 5" }, { name: "Css 3" }, { name: "TailwindCSS" }],
    image: "/assets/work/4.png",
    live: "https://g3architecs.vercel.app/",
    github: "https://github.com/ImranParvez64/G3-Architecs.git",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 ,transition:{delay:2.4,duration:0.4, ease:'easeIn'}}}
      className="min-h-[80vh] flex-col flex justify-center py-12 md:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:gap-[30px]">
          <div className="w-full md:w-[50%] md:h-[460px] flex flex-col md:justify-between order-2 md:order-0">
            <div className="group flex flex-col gap-7 h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p>{project.description}</p>
              <ul className="flex gap-4">
                {project.stck.map((item, index) => {
                  return (
                    <li key={index} className="text-accent">
                      {item.name}
                      {index !== project.stck.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl"></BsArrowUpRight>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl"></BsGithub>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="md:h-[520px] mb-12 "
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill alt="" className="object-cover"/>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] md:bottom-0 z-20 w-full justify-between md:w-max  md:justify-none" btnStyles={"bg-accent hover:bg-accent-hover text-primary text-[22px] w-11 h-11 flex justify-center items-center transition-all "}/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
  return <div>Work</div>;
};

export default Work;
