import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cva } from "class-variance-authority";
import React, { useContext } from "react";
import { NotificationContext } from "../../context/notificationContext";
import { cn } from "../../utils/cn";
import Text from "./Text";
import {
  faCircleXmark,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";

const AlertVariants = cva(
  "alert absolute z-50 w-[500px] top-8 right-8",
  {
    variants: {
      type: {
        error: "alert-error",
        success: "alert-success"
      },
    },
    defaultVariants: {
      type: "error",
    },
  }
);

function Alert({ message, type, className }) {
  const { setIsMessageVisible } = useContext(NotificationContext);
  return (
    <div
      role="alert"
      className={cn(AlertVariants({type, className}))}
    >
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
