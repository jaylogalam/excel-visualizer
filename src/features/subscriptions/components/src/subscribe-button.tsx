import { Link } from "react-router-dom";
import { cn } from "@/utils/tailwindMerge";

interface SubscribeButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  planName: string;
  mostPopular?: boolean;
  isLoggedIn: boolean;
}

const SubscribeButton = ({
  planName,
  mostPopular,
  isLoggedIn,
  ...props
}: SubscribeButtonProps) => {
  return (
    <Link
      {...props}
      to={isLoggedIn ? "/payment" : "/signup"}
      className={cn(
        "w-full px-6 py-4 rounded-xl font-semibold text-center flex items-center justify-center gap-2",
        "transition-all duration-300 group-hover:scale-105 mt-auto",
        mostPopular
          ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-600 hover:to-purple-600 shadow-lg shadow-violet-500/30"
          : "bg-primary text-primary-foreground hover:bg-primary/90"
      )}
    >
      Get {planName}
    </Link>
  );
};

export { SubscribeButton };
