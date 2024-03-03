"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Loader from "../custom/loader";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowLoader(false), 1000);
  }, []);
  return showLoader ? (
    <Loader />
  ) : (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
