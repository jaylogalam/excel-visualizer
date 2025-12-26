import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/utils/tailwindMerge";

interface SubscriptionFeaturesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  features: string[];
  mostPopular?: boolean;
}

const SubscriptionFeatures = ({
  features,
  mostPopular,
  ...props
}: SubscriptionFeaturesProps) => (
  <div {...props} className={cn("", props.className)}>
    <ul className="space-y-4 my-8 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3">
          <div
            className={cn(
              "mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
              mostPopular
                ? "bg-gradient-to-br from-violet-500 to-purple-500"
                : "bg-primary/10"
            )}
          >
            <Check
              size={14}
              className={mostPopular ? "text-white" : "text-primary"}
            />
          </div>
          <span className="text-sm text-foreground leading-relaxed">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  </div>
);
SubscriptionFeatures.displayName = "SubscriptionFeatures";

export { SubscriptionFeatures };
