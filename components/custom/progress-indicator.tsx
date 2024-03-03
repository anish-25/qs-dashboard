"use client"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const ProgressIndicator = ({ value }: { value: 0 | 1 | 2 | 3 | 4 }) => {
  let percentage = (value / 4) * 100;
  return (
    <CircularProgressbar
      styles={buildStyles({
        pathColor: "#F7A60E",
        textColor: "#F7A60E",
        trailColor: "#e0ded7",
        pathTransitionDuration: 0.5,
        textSize: "18px",
      })}
      className="!w-[auto] md:!h-[80px] cursor-pointer hover:scale-105 transition-all duration-300 !h-70px !justify-center !text-center !items-center flex"
      value={percentage}
      text={`${value}`}
    />
  );
};

export default ProgressIndicator;
