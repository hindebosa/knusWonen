import React from "react";
import { twMerge } from "tailwind-merge";

interface StyledTextProps {
  children: React.ReactNode;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  bold?: boolean;
  className?: string;
}

export const StyledText: React.FC<StyledTextProps> = ({
  children,
  size = "base",
  bold = false,
  className,
  ...props
}) => {
  const baseClasses = "font-poppins";
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
  };
  const weightClass = bold ? "font-bold" : "font-normal";

  const classes = twMerge(
    baseClasses,
    sizeClasses[size],
    weightClass,
    className
  );

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};
