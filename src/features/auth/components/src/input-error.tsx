import * as React from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/utils/tailwindMerge";

interface InputErrorProps {
  className?: string;
  error?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

const InputError = React.forwardRef<HTMLDivElement, InputErrorProps>(
  ({ className, error, children, showIcon = true, ...props }, ref) => {
    // Don't render anything if there's no error
    if (!error && !children) return null;

    const errorMessage = error || children;

    return (
      <div
        ref={ref}
        role="alert"
        aria-live="polite"
        data-testid="form-error"
        className={cn(
          "flex items-start gap-1.5 text-sm text-destructive animate-in transition-all ease-in-out duration-200",
          "mt-1.5 pl-4 pt-1",
          className
        )}
        {...props}
      >
        {showIcon && (
          <AlertCircle
            className="h-4 w-4 mt-0.5 flex-shrink-0"
            aria-hidden="true"
          />
        )}
        <span className="text-xs sm:text-sm leading-tight">{errorMessage}</span>
      </div>
    );
  }
);

InputError.displayName = "InputError";

export { InputError };
