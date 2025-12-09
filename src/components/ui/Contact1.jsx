"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import Social from "./Social";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+88) 019 123 00 964",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "imranparvez964@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Shewrapara, Dhaka",
  },
];

const Contact1 = () => {
  const [service, setService] = useState("");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-10"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-10 w-full">
          {/* FORM FULL WIDTH */}
          <div className="w-full">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl w-full">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">I'm available for freelance work. Send me a message!</p>

              {/* INPUT GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="text" placeholder="Phone Number" />
              </div>

              <Select value={service} onValueChange={(value) => setService(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea className="h-40" placeholder="Type your message here" />

              <Button size="sm" className="max-w-40">Send message</Button>
            </form>
          </div>

          {/* CONTACT INFO + SOCIAL BELOW IN MOBILE */}
          <div className="flex flex-col w-full lg:w-1/2 gap-8">
<ul className="flex flex-col gap-7 bg-[#27272c] p-8 rounded-xl">
  {info.map((item, index) => (
    <li key={index} className="flex items-center gap-6">
      <div className="w-14 h-14 bg-[#323238] text-accent rounded-md flex items-center justify-center">
        <div className="text-[26px]">{item.icon}</div>
      </div>
      <div className="flex-1">
        <p className="text-white/60 text-sm">{item.title}</p>
        <h3 className="text-xs text-white">{item.description}</h3>
      </div>
    </li>
  ))}
</ul>


            {/* SOCIAL BOTTOM */}
            <div className="mt-2 flex justify-center ">
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-14 h-14 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact1;