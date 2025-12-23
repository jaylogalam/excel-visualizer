import { cn } from "@/utils/tailwindMerge";
import React from "react";

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

const Page: React.FC<PageProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "min-h-screen w-full bg-background text-text p-6 md:p-10 flex flex-col justify-center items-center relative overflow-hidden",
        className
      )}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full z-0" />
      <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-primary/5 blur-[80px] rounded-full z-0" />

      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export { Page };
