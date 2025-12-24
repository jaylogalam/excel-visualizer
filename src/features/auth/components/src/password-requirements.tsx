import { Check, Circle } from "lucide-react";
import React from "react";
import { cn } from "@/utils/tailwindMerge";

interface Requirement {
  label: string;
  test: (password: string) => boolean;
}

const requirements: Requirement[] = [
  { label: "At least 8 characters", test: (p) => p.length >= 8 },
  { label: "One uppercase letter", test: (p) => /[A-Z]/.test(p) },
  { label: "One lowercase letter", test: (p) => /[a-z]/.test(p) },
  { label: "One number", test: (p) => /[0-9]/.test(p) },
  { label: "One special character", test: (p) => /[^a-zA-Z0-9]/.test(p) },
];

interface PasswordRequirementsProps {
  password?: string;
}

const PasswordRequirements: React.FC<PasswordRequirementsProps> = ({
  password = "",
}) => {
  return (
    <div>
      <p className="text-xs font-medium text-muted-foreground">
        Password must include the following:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 p-3 bg-accent/5 rounded-xl border border-accent/20">
        {requirements.map((req, index) => {
          const isMet = req.test(password);
          return (
            <div
              key={index}
              className={cn(
                "flex items-center gap-2 text-xs transition-all duration-300",
                isMet ? "text-primary" : "text-muted-foreground"
              )}
            >
              {isMet ? (
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
              ) : (
                <Circle className="w-3.5 h-3.5 opacity-40" />
              )}
              <span>{req.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { PasswordRequirements };
