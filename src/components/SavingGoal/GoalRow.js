import Badge from "../common/Badge";
import { format } from "date-fns";
import TransactionForm from "../Transaction/TransactionForm";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { formatMoney } from "../../utils/formatMoney";
import ConfirmationModal from "../common/ConfirmationModal";
import Text from "../common/Text";
import Button from "../common/Button";
import { Link } from "react-router-dom";

function GoalRow({ goal, onDelete, href }) {
  const { userInfo } = useContext(AuthContext);
  let result = Math.floor((goal.total / goal.target) * 100);
  const progress = result <= 100 ? result : 100;

  return (

    <div className="flex w-full flex-col items-center justify-center gap-3 rounded-lg border border-gray-400 bg-white px-5 py-3 transition duration-75 ease-linear hover:border-[3px] hover:border-[#A5A6F6] lg:flex-row">
      {/*Progress */}
      <div className="h-28 w-28">
        <div
          className={`radial-progress`}
          style={{
            "--value": progress,
            "--size": "7rem",
            background: `${goal.color}20`,
            color: `${goal.color}`,
          }}
          role="progressbar"
        >
          <Text>{progress}%</Text>
        </div>
      </div>
      {/*Content */}
      <div className="flex w-full flex-col items-start justify-start gap-1">
        <Text weight="semibold" variant="text-lg" href={href}>
          {goal.name}
        </Text>
        <Text weight="semibold" className="truncate text-primary">
          Target: {formatMoney(goal.target, userInfo.baseCurrency)}
        </Text>
        <Text weight="semibold" className="truncate text-info">
          Progress: {formatMoney(goal.total, userInfo.baseCurrency)}
        </Text>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-1 xl:px-5">
        {goal.startDate && (
          <Text className="text-gray-500">
            <span className="text-black">Start Date: </span>
            {format(new Date(goal.startDate), "dd-MM-yyyy")}{" "}
          </Text>
        )}
        {goal.endDate && (
          <Text className="text-gray-500">
            <span className="text-black">End: </span>
            {format(new Date(goal.endDate), "dd-MM-yyyy")}{" "}
          </Text>
        )}
      </div>
      {/*Status and action buttons */}
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="py-3">
          <Badge
            status={goal.status}
            variant={
              goal.status.toLowerCase() === "pending"
                ? "yellow"
                : goal.status.toLowerCase() === "on-going"
                  ? "blue"
                  : "green"
            }
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-2 px-5 py-3">
        <TransactionForm
          buttonName="Add"
          variant="blueButton"
          goal={{ id: goal._id, name: goal.name, type: "Saving" }}
        />
        {/* <Button variant="lightPrimary">Edit</Button> */}
        <ConfirmationModal
          idModal={`eleteConfirmation-${goal._id}}`}
          btnName="Delete"
          btnSize="small"
          btnType="button"
          message={`Do you want to delete goal "${goal.name}" ?`}
          onSubmit={() => onDelete(goal._id)}
          variant="redButton"
        />
      </div>
    </div>
  );
}

export default GoalRow;
