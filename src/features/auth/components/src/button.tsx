import { cn } from "@/utils/tailwindMerge";
import { Loader2 } from "lucide-react";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex bg-primary w-full px-4 py-3 border-2 border-accent items-center justify-center rounded-[120px] text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer",
          className
        )}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
        <span className={cn(isLoading && "opacity-0")}>{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
