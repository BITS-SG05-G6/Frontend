import React from "react";
import { cva } from 'class-variance-authority';
import { cn } from "../../utils/cn";

const BoxVariants = cva(
  "border border-[#EF5DA8] rounded-lg",
  {
    variants: {
      spacing: {
        none: '',
        xs: 'p-3',
        sm: 'p-4',
        md: 'p-6'
      },
      color: {
        blue: 'bg-[#EDFCFC]',
        purple: 'bg-[#EDEEFC]',
        pink: 'bg-[#FCDDEC]',
        gray: "bg-[#F4F6FA]",
        yellow: "bg-[#FFFBEB]"
      },
      noBorder: {
        true: 'border-transparent'
      },
    },
    defaultVariants: {
      spacing: 'md',
      color: 'blue'
    },
  } 
) 

const Box = ({children, spacing, className, color, noBorder = true}) => {
  return (
    <div className={cn(BoxVariants({spacing, className, noBorder, color}))}>{children}</div>
  )
}

export default Box;