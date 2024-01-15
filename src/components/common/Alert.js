import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cva } from "class-variance-authority";
import React, { useContext } from "react";
import { NotificationContext } from "../../context/notificationContext";
import { cn } from "../../utils/cn";
import {
  faCircleXmark,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";

const AlertVariants = cva(
  "alert absolute z-50 top-20 right-2 xl:top-8 xl:right-8 text-white w-80 xl:w-[500px] xl:h-16 h-10 flex",
  {
    variants: {
      type: {
        error: "alert-error",
        success: "alert-success",
      },
    },
    defaultVariants: {
      type: "error",
    },
  },
);

function Alert({ message, type, className }) {
  const { setIsMessageVisible } = useContext(NotificationContext);
  return (
    <div role="alert" className={cn(AlertVariants({ type, className }))}>
      <button onClick={() => setIsMessageVisible(false)}>
        {type === "error" ? (
          <FontAwesomeIcon icon={faCircleXmark} />
        ) : type === "success" ? (
          <FontAwesomeIcon icon={faCircleCheck} />
        ) : null}
      </button>
      <span>{message}</span>
    </div>
  );
}

export default Alert;
