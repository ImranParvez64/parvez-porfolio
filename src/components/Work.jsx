import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

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

const MyWork = () => {
  return (
    <div className="container mx-auto my-20 md:mb-15">
      <h1 className="text-3xl font-semibold md:text-5xl text-accent mb-6 md:mb-8 text-center md:text-start">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 place-items-center ">
        {projects.map((items, index) => (
          <div key={index} className="border rounded-md border-gray-700">
            <div className="w-full h-full ">
              <Image
                src={items.image}
                alt={items.title}
                height={100}
                width={400}
                className="object-cover  w-full  rounded-t-md"
              ></Image>
            </div>
            <div className="p-3">
              <p className="mt-3">{items.category}</p>
              <h2 className="text-3xl font-semibold text-accent mt-3">
                {items.title}
              </h2>
              <p className="text-sm mt-3 mb-2 text-justify">
                {items.description}
              </p>
              <ul className="flex gap-4">
                {items.stck.map((item, index) => {
                  return (
                    <li key={index} className="text-accent">
                      {item.name}
                      {index !== items.stck.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="flex gap-4 mt-5 justify-between">
                <Link href={items.live}>
                  <button
                    className={
                      "bg-accent text-black px-4 rounded-md cursor-pointer"
                    }
                  >
                    Live Demo
                  </button>
                </Link>
                <Link href={items.github}>
                  <button
                    className={
                      "bg-accent text-black px-4 rounded-md cursor-pointer"
                    }
                  >
                    Github Repo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
