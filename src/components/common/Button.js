import React from "react";
import { cva } from 'class-variance-authority';
import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";

const ButtonVariants = cva(
  "btn bg-[#EF5DA8] hover:bg-transparent hover:border-[#EF5DA8] text-white hover:text-[#EF5DA8] text-sm",
  {
    variants: {
      variant: {
        roundOutline: 'btn hover:bg-[#EF5DA8] bg-transparent border-[#EF5DA8] hover:text-white text-[#EF5DA8]',
        cirFill: 'btn bg-[#EF5DA8] hover:bg-transparent hover:border-[#EF5DA8] text-white hover:text-[#EF5DA8] rounded-full',
        cirOutline: 'btn hover:bg-[#EF5DA8] bg-transparent border-[#EF5DA8] hover:text-white text-[#EF5DA8] rounded-full',
        cirTrans: 'btn bg-[#FCDDEC] hover:bg-transparent hover:border-[#EF5DA8] text-white hover:text-[#EF5DA8] rounded-full',
        redButton: 'btn bg-red-400 hover:bg-transparent hover:border-red-400 text-white hover:text-red-400 rounded-[10px]',
        blueButton: 'btn bg-[#7879F1] hover:bg-transparent hover:border-[#7879F1] text-white hover:text-[#7879F1] rounded-[10px]',
        close: 'btn btn-sm btn-circle bg-transparent border-transparent hover:bg-transparent hover:border-transparent'
      },
      size: {
        default: 'h-10 py-2 px-4 text-sm',
        sm: 'h-9 py-2 rounded-md text-xs',
        lg: 'h-11 px-11 text-sm',
        xl: 'h-12 px-12 text-sm',
        fix: 'absolute right-2 top-2'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    },
  } 
) 

const Button = ({children, variant, size, className, onClick}) => {
  return <button className={cn(ButtonVariants({variant, size, className}))} onClick={onClick}>{children}</button>
}

export default Button;