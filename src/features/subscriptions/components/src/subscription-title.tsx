import React from "react";
import { cn } from "@/utils/tailwindMerge";

interface SubscriptionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  description?: string;
}

const SubscriptionTitle = ({
  name,
  description,
  className,
  ...props
}: SubscriptionTitleProps) => (
  <div className={cn("", className)} {...props}>
    <h2 className="text-2xl font-bold text-foreground">{name}</h2>
    <p className="text-muted-foreground text-sm mb-4 mt-1 min-h-[2.5rem]">
      {description}
    </p>
  </div>
);
SubscriptionTitle.displayName = "SubscriptionTitle";

export { SubscriptionTitle };
