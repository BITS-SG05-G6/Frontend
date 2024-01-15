import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/cn";
import Text from "./Text";

const BadgeVariants = cva(
  "px-2 py-1 whitespace-nowrap rounded-full border-[1px]",
  {
    variants: {
      variant: {
        green: "text-[#07A104] bg-[#E1FFDC] border-[#07A104]",
        yellow: "text-[#E2B102] bg-[#FFF5DC] border-[#E2B102]",
        blue: "text-[#0077FF] bg-[#BDDCFF] border-[#0077FF]",
      },
    },
    defaultVariants: {
      variant: "green",
    },
  },
);

function Badge({ status, variant, className }) {
  return (
    <div className={cn(BadgeVariants({ variant, className }))}>
      <Text variant="text-sm" weight="bold">
        {status}
      </Text>
    </div>
  );
}

export default Badge;
