import React from "react";
import { cn } from "@/utils/tailwindMerge";
import { FormError } from "./form-error";

type InputTextProps = {
  className?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ className, error, ...props }, ref) => (
    <div>
      <input
        ref={ref}
        type="text"
        className={cn(
          "w-full px-4 py-3 border-2",
          "border-input rounded-[120px] bg-transparent",
          "focus:outline-none focus:border-primary transition-colors",
          className
        )}
        {...props}
      />
      <FormError error={error} />
    </div>
  )
);

InputText.displayName = "InputText";

export { InputText };
