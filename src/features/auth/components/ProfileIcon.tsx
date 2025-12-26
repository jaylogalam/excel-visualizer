import React, { useState, useRef, useEffect } from "react";
import { User, LogOut, ChevronDown } from "lucide-react";
import { useSession } from "../services";
import { cn } from "@/utils/tailwindMerge";
import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";

interface ProfileIconProps {
  className?: string;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ className }) => {
  const session = useSession();
  const logout = useLogout();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // If not logged in, show sign in button
  if (!session.data?.user) {
    return (
      <button
        onClick={() => navigate("/login")}
        className={cn(
          "inline-flex items-center gap-2 px-4 py-2 rounded-lg",
          "bg-primary text-primary-foreground font-semibold",
          "hover:brightness-110 transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
          className
        )}
      >
        <User className="h-5 w-5" />
        <span>Sign In</span>
      </button>
    );
  }

  const user = session.data.user;
  const initials = user.name
    ? user.name
        .split(" ")
        .map((n: string) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : user.email[0].toUpperCase();

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "inline-flex items-center gap-2 px-3 py-2 rounded-lg",
          "bg-card border border-border",
          "hover:bg-accent/20 transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        )}
      >
        {/* Avatar Circle */}
        <div
          className={cn(
            "flex items-center justify-center",
            "h-9 w-9 rounded-full",
            "bg-primary text-primary-foreground",
            "font-semibold text-sm"
          )}
        >
          {initials}
        </div>

        {/* User Info */}
        <div className="hidden md:flex flex-col items-start">
          <span className="text-sm font-semibold text-card-foreground leading-tight">
            {user.name || "User"}
          </span>
          <span className="text-xs text-muted-foreground leading-tight">
            {user.email}
          </span>
        </div>

        {/* Chevron */}
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={cn(
            "absolute right-0 mt-2 w-64 z-50",
            "bg-popover border border-border rounded-lg shadow-xl",
            "overflow-hidden animate-in fade-in-0 zoom-in-95",
            "origin-top-right"
          )}
        >
          {/* User Info Section (Mobile) */}
          <div className="md:hidden px-4 py-3 border-b border-border">
            <p className="font-semibold text-sm text-popover-foreground">
              {user.name || "User"}
            </p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <button
              onClick={() => {
                setIsOpen(false);
                logout();
              }}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2",
                "text-sm text-popover-foreground",
                "hover:bg-accent/20 transition-colors duration-150",
                "focus-visible:outline-none focus-visible:bg-accent/20"
              )}
            >
              <LogOut className="h-4 w-4" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

ProfileIcon.displayName = "ProfileIcon";

export default ProfileIcon;
