/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import Stats from "@/components/ui/Stats";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import Resume from "./resume/page";
import Services from "./services/page";
import Work from "./work/page";
import MyWork from "@/components/Work";
import TopSkills from "@/components/TopSkills";
import Contact from "./resume/hireme/page";
import ContactMe from "@/components/ContactMe";

const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
          {/* text */}
          <div className=" text-center lg:text-left order-2 lg:order-0">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Imran Parvez</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I specialize in creating polished digital experiences and have
              strong expertise in various programming languages and
              technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <a href="/cv.pdf" download>
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 lg:mb-0 ">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                ></Social>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 lg:order-0 mb-8 lg:mb-0">
            <Photo></Photo>
          </div>
        </div>

      </div>
      <Stats />
      <TopSkills></TopSkills>
      <MyWork></MyWork>
      <ContactMe></ContactMe>
    </section>
  );
};

export default page;
