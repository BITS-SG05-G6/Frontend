import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";

const TextVariants = cva(
  "font-['Kumbh Sans']",
  {
    variants: {
      variant: {
        "text-xs": "text-xs leading-5",
        "text-sm": "text-sm",
        "text-base": "text-base",
        "text-md": "text-lg",
        "text-lg": "text-xl",
        "text-xl": "text-2xl",
        "text-2xl": "text-4xl",
        "text-3xl": "text-6xl"
      },
      weight: {
        regular: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      noLink: {
        true: "pointer-events-none"
      }
    },
    defaultVariants: {
      variant: "text-base",
      weight: "regular",
    },
  }
);

const Text = ({ children, variant, weight, className, href, style }) => {
  return (
    href ? 
    <Link to={href} className={cn(TextVariants({ variant, weight, className }))} style={style}>
      {children}
    </Link>
    : <span className={cn(TextVariants({ variant, weight, className }))} style={style}>
      {children}
    </span>
  );
};

export default Text;
