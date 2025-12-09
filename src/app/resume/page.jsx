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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description:
    "I’m a passionate developer who loves creating digital experiences and learning new things. I enjoy turning ideas into real, functional projects.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Imran Parvez",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+88) 019123-00964",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "parvez.64",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "imranparvez964@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English,Bangla",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I’ve gained hands-on experience by working on real projects, learning new technologies, and improving my problem-solving skills with every challenge.",
  items: [
    {
      company: "Bdcalling Academy",
      position: "MERN Stack Developer",
      duration: "2025 ",
    },
  ],
};

// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "My education has helped me build a strong foundation in technology and development. I continuously learn and explore new concepts to stay ahead.",
  items: [
    {
      institution: "Uttara University(UU)",
      degree: " B.Sc. in Computer Science and Engineering (CSE) ",
      duration: "2025 - Present",
    },
    {
      institution: "Barishal Polytechnic Institute",
      degree: "Computer Technology",
      duration: "2020 - 2025",
    },
    {
      institution: "Barishal Technical School & College",
      degree: "Information & Computer Technology",
      duration: "2018 - 2020",
    },
  ],
};

// skills data
const skill = {
  title: "My skills",
  description:
    "I work with a variety of tools and technologies, focusing on clean code, practical solutions, and creative thinking to build efficient and modern applications.",
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

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center  xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          className="flex flex-col md:flex-row gap-10 "
          defaultValue="experience"
        >
          <div className="flex  justify-center">
            <TabsList className=" flex mt-10  gap-5 flex-col  p-2 **:bg-[#27272c] **:rounded-md **:px-30 **:py-1 group-hover:bg-accent">
              <TabsTrigger
                value="experience"
                className="data-[state=active]:bg-accent data-[state=active]:text-black"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="data-[state=active]:bg-accent data-[state=active]:text-black"
              >
                Education
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="data-[state=active]:bg-accent data-[state=active]:text-black"
              >
                Skills
              </TabsTrigger>
              <TabsTrigger
                value="about"
                className="data-[state=active]:bg-accent data-[state=active]:text-black"
              >
                About me
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="mt-0 md:mt-10">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-start">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] text-red-100">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-md flex flex-col justify-center items-center  md:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h2 className="text-xl max-w-[260px] min-h-[60px] text-center md:text-start">
                            {item.position}
                          </h2>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-start">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] text-red-100">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-md flex flex-col justify-center items-center  md:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h2 className="text-xl max-w-[260px] min-h-[60px] text-center md:text-start">
                            {item.degree}
                          </h2>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-[30px] text-center lg:text-start">
                  <h3 className="text-4xl font-bold">{skill.title}</h3>
                  <h3 className="max-w-[600px] text-white/60 mx-auto md:mx-0">
                    {skill.description}
                  </h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-7 gap-4 ">
                  {skill.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider>
                          <Tooltip className="group">
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl  group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center lg:text-start"
            >
              <div className="flex flex-col gap-7">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <h3 className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                  {about.description}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 max-w-[620px] mx-auto md:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center md:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
