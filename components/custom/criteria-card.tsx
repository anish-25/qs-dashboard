import { AlertCircle, CheckCircle } from "lucide-react";
import Typography from "../typography";
import { cn } from "@/lib/utils";

const CriteriaCard = ({
  criteria,
  hasMet = true,
  description,
  className,
}: {
  criteria: string;
  hasMet?: boolean;
  description?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "p-2 w-full border font-semibold flex justify-around items-center flex-col",
        description ? "h-24" : "h-40",
        className
      )}>
      <Typography variant={"body2"} className="opacity-70">
        {criteria}
      </Typography>
      {description ? (
        <>
          <Typography className="text-primary" variant={"body1"}>
            {description}
          </Typography>
        </>
      ) : (
        <>
          <Typography
            className={cn(hasMet ? "text-primary" : "opacity-40")}
            variant={"body3"}>
            {hasMet ? "MET" : "NOT MET"}
          </Typography>
          {hasMet ? (
            <CheckCircle stroke="green" />
          ) : (
            <AlertCircle stroke="red" />
          )}
        </>
      )}
    </div>
  );
};

export default CriteriaCard;
