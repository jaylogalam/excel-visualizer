import React from "react";
import { cn } from "@/utils/tailwindMerge";

interface FormProps extends React.HTMLAttributes<HTMLDivElement> {}

const Form = React.forwardRef<HTMLDivElement, FormProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-4xl border transition-all duration-200 overflow-hidden",
        "bg-card border-border shadow-xl backdrop-blur-sm",
        "max-w-md w-full py-4",
        className
      )}
      {...props}
    />
  )
);
Form.displayName = "Form";

const FormHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6 text-center", className)}
    {...props}
  />
));
FormHeader.displayName = "FormHeader";

const FormTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-card-foreground",
      className
    )}
    {...props}
  />
));
FormTitle.displayName = "FormTitle";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
FormDescription.displayName = "FormDescription";

const FormContent = React.forwardRef<
  HTMLFormElement,
  React.HTMLAttributes<HTMLFormElement>
>(({ className, ...props }, ref) => (
  <form ref={ref} className={cn("p-6 pt-0 space-y-6", className)} {...props} />
));
FormContent.displayName = "FormContent";

const FormFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-center p-6 pt-0", className)}
    {...props}
  />
));
FormFooter.displayName = "FormFooter";

export {
  Form,
  FormHeader,
  FormFooter,
  FormTitle,
  FormDescription,
  FormContent,
};
