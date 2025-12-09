"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

// ROOT
export function Tabs({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      defaultValue="experience"
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  );
}

// LIST
export function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List
      className={cn("flex flex-col gap-3", className)}
      {...props}
    />
  );
}

// TRIGGER
export function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.TabsTrigger
      className={cn(
        "inline-flex items-center justify-center w-full rounded-md px-4 py-3 font-medium transition-all",
        "bg-[#27272c] text-white", // default
        "data-[state=active]:bg-[#19fa91] data-[state=active]:text-black data-[state=active]:font-semibold", // active state
        className
      )}
      {...props}
    />
  );
}

// CONTENT
export function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      className={cn("mt-4 text-white", className)}
      {...props}
    />
  );
}
