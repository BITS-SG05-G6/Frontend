import React from "react";
import { cva } from 'class-variance-authority';
import { cn } from "../../utils/cn";

const InputVariants = cva(
        "input input-bordered hover:border-[#7879F1] focus:border-[#7879F1]",
  {
    variants: {
      size: {
        default: 'w-full max-w-xs text-sm',
        small: 'w-sm text-sm',
      }
    },
    defaultVariants: {
      size: 'default'
    },
  } 
) 

function FormInput({type, placeholder, size, className}) {
    return (<input 
    type={type}
    placeholder={placeholder}
    className={cn(InputVariants({size, className}))}    
    />
    )
}


export default FormInput;