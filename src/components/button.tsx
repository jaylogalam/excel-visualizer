import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/tailwindMerge";
import { Loader2 } from "lucide-react";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white shadow-sm hover:brightness-110",
        secondary: "bg-secondary text-white shadow-sm hover:brightness-110",
        outline:
          "border-2 border-accent bg-transparent text-text hover:bg-accent/10",
        ghost: "hover:bg-accent/20 text-text",
        danger: "bg-error text-white shadow-sm hover:brightness-110",
      },
      size: {
        sm: "h-9 px-4 py-2",
        md: "h-12 px-6 py-3",
        lg: "h-14 px-10 py-4 text-base",
        icon: "h-11 w-11",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
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

export { Button, buttonVariants };
