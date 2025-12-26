import React from "react";
import { cn } from "@/utils/tailwindMerge";

interface SubscriptionPriceProps extends React.HTMLAttributes<HTMLDivElement> {
  price: string | number;
  period: string;
}

const SubscriptionPrice = ({
  price,
  period,
  className,
  ...props
}: SubscriptionPriceProps) => (
  <div className={cn("flex items-baseline gap-2", className)} {...props}>
    <p className="text-4xl font-bold text-foreground">{price}</p>
    <p className="text-muted-foreground text-sm">{period}</p>
  </div>
);
SubscriptionPrice.displayName = "SubscriptionPrice";

export { SubscriptionPrice };
