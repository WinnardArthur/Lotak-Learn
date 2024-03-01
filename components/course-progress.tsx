import React from "react";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface CourseProgressProps {
  value: number;
  variant?: "default" | "success";
  size?: "default" | "sm";
}

const sizeByVariant = {
  default: "text-sky-700",
  sm: "text-emerald-700",
};

const colorByVariant = {
  default: "text-sm",
  success: "text-xs",
};

const CourseProgress = ({ value, variant, size }: CourseProgressProps) => {
  return (
    <div>
      <Progress value={value} variant={variant} className="h-2" />
      <p
        className={cn(
          "font-medium mt-2 text-sky-700",
          colorByVariant[variant || "default"],
          sizeByVariant[size || "default"]
        )}
      >
        {Math.round(value)}% Complete
      </p>
    </div>
  );
};

export default CourseProgress;
