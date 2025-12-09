"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

const skill = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odio accusantium ad.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
  ],
};

const TopSkills = () => {
  return (
    <div className="container mx-auto my-30 md:mb-15">
      <h1 className="text-3xl font-semibold md:text-5xl text-accent mb-6 md:mb-8 text-center md:text-start">
        Professional Skills
      </h1>
      
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-7 gap-4 ">
        {skill.skillList.map((item, index) => {
          return (
            <li key={index}>
              <div>
                <div className="group">
                  <div className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                    <div className="text-6xl  group-hover:text-accent transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <p className="capitalize text-center">{item.name}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopSkills;
