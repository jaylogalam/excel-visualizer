import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/utils/tailwindMerge";
import { FormError } from "./form-error";

type InputPasswordProps = {
  className?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ className, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div>
        <div
          className={cn(
            "flex justify-between items-center w-full px-4 py-3 border-2 border-accent rounded-[120px] focus-within:border-primary transition-colors bg-white/5",
            className
          )}
        >
          <input
            ref={ref}
            type={showPassword ? "text" : "password"}
            className="flex-1 bg-transparent outline-none text-text"
            {...props}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-text-dim hover:text-text transition-colors ml-2"
          >
            {showPassword ? <Eye size={22} /> : <EyeOff size={22} />}
          </button>
        </div>
        <FormError error={error} />
      </div>
    );
  }
);

InputPassword.displayName = "InputPassword";

export { InputPassword };
