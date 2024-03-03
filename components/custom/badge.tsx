import { cn } from "@/lib/utils";
import Typography from "../typography";

const Badge = ({ text, className }: { text: string; className?: string }) => {
  return (
    <Typography
      className={cn(
        "w-full !px-4 font-bold flex justify-center items-center space-x-3 bg-secondary p-1 rounded-md",
        className
      )}
      variant={"body2"}>
      {text}
    </Typography>
  );
};

export default Badge;
