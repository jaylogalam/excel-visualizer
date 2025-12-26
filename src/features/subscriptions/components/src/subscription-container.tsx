import React from "react";
import { cn } from "@/utils/tailwindMerge";

interface SubscriptionContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  mostPopular?: boolean;
}

const SubscriptionContainer = ({
  mostPopular,
  className,
  children,
  ...props
}: SubscriptionContainerProps) => (
  <section
    className={cn(
      "relative flex flex-col rounded-3xl",
      "p-8 flex flex-col h-full",
      "transition-all duration-500 group hover:-translate-y-2",
      mostPopular
        ? "bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-pink-500/10 border-2 border-violet-500/30 shadow-2xl shadow-violet-500/20 hover:shadow-violet-500/40"
        : "bg-card border border-border hover:border-primary/50 shadow-xl",
      className
    )}
    {...props}
  >
    {mostPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-bold rounded-full shadow-lg">
        Most Popular
      </div>
    )}
    {children}
  </section>
);
SubscriptionContainer.displayName = "SubscriptionContainer";

export { SubscriptionContainer };
