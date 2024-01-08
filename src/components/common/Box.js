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
        gray: "bg-[#F4F6FA]",
        blue: "bg-[#EDFCFC]",
        purple: "bg-[#EDEEFC]",
        pink: "bg-[#FCDDEC]",
        yellow: "bg-[#FFFBEB]"
      },
      noBorder: {
        true: 'border-transparent'
      },
      size: {
        xs: "max-w-xs"
      }
    },
    defaultVariants: {
      spacing: 'md',
      color: 'blue'
    },
  } 
) 

const Box = ({children, spacing, className, color, noBorder = true, size, onMouseEnter, onMouseLeave, style}) => {
  return (
    <div 
    className={cn(BoxVariants({spacing, className, noBorder, color, size}))}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={style}
    >{children}</div>
  )
}

export default Box;