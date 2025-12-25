import { LogOut } from "lucide-react";
import useLogout from "../hooks/useLogout";
import { Button } from "@/components";

interface LogoutButtonProps {
  showIcon?: boolean;
  showText?: boolean;
  className?: string;
}

export default function LogoutButton({
  showIcon = true,
  showText = true,
  className,
}: LogoutButtonProps) {
  const logout = useLogout();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => logout()}
      className={className}
    >
      {showIcon && <LogOut size={18} className={showText ? "mr-2" : ""} />}
      {showText && "Logout"}
    </Button>
  );
}
