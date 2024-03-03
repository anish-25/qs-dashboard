import { AlertCircle, CheckCircle, XCircle } from "lucide-react";
import Typography from "../typography";

const Note = ({
  type,
  description,
}: {
  type: "success" | "error" | "warn";
  description: string;
}) => {
  return (
    <Typography
      className="max-w-3xl font-bold flex md:flex-row flex-col justify-start items-center space-x-3 bg-secondary p-4 rounded-md"
      variant={"body2"}>
      <span>
        {type === "success" ? (
          <CheckCircle stroke="green" />
        ) : type === "warn" ? (
          <AlertCircle stroke="orange" />
        ) : (
          <XCircle stroke="red" />
        )}
      </span>
      <span>{description}</span>
    </Typography>
  );
};

export default Note;
