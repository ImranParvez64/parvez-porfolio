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
  SelectItem
} from "@/components/ui/select";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
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
    description: "Shewrapara,Dhaka",
  },
];
const Contact = () => {
  const [service, setService] = useState("");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-7 ">
          <div className="md:h-[60%] order-2 md:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl  ">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
                iusto.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              <Select
                value={service}
                onValueChange={(value) => setService(value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/Ux Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className={"h-50"}
                placeholder="Type your massege here"
              ></Textarea>
              <Button size="sm" className={"max-w-40"} >
                Send message
              </Button>
            </form>
          </div>
          <div className="flex flex-1 items-center md:justify-center order-1 md:order-none mb-8 md:mb-0">
            <ul className="flex flex-col gap-7">
                {info.map((item,index) => {
                    return(
                        <li key={index} className="flex items-center gap-6">
                            <div className="w-13 h-13 md:w-18 md:h-18 bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                <div className="text-[28px]">{item.icon}</div>
                            </div>
                            <div className="flex-1">
                                <p className="text-white/60">{item.title}</p>
                                <h3 className="text-xl">{item.description}</h3>
                            </div>
                        </li>
                    )
                })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
