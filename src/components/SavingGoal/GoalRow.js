import Text from "../common/Text";
import Button from "../common/Button";
import Badge from "../common/Badge";
import { format } from "date-fns";
import TransactionForm from "../Transaction/TransactionForm";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { formatMoney } from "../../utils/formatMoney";
import ConfirmationModal from "../common/ConfirmationModal";

function GoalRow({ goal, onDelete, href }) {
  const { userInfo } = useContext(AuthContext);
  const progress = Math.floor((goal.total / goal.target) * 100);
  return (
    <div className="w-full px-5 py-3 h-1/3 rounded-lg bg-white border border-gray-400 grid grid-cols-12 hover:border-[3px] hover:border-[#A5A6F6] transition ease-linear duration-75">
      {/*Progress */}
      <div
        className={`radial-progress col-span-2`}
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
      {/*Content */}
      <div className="flex flex-col justify-center gap-1 items-start col-span-2">
        <Text weight="semibold" variant="text-lg" href={href}>
          {goal.name}
        </Text>
        <Text weight="semibold" className="text-primary">
          {formatMoney(goal.target, userInfo.baseCurrency)}
        </Text>
        <Text weight="semibold" className="text-info">
          Progress: {formatMoney(goal.total, userInfo.baseCurrency)}
        </Text>
      </div>
      <div className="px-5 flex flex-col gap-1 items-start justify-center col-span-3">
        {goal.startDate && (
          <Text className="text-gray-500">
            <span className="text-black">Start: </span>
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
      <div className="flex justify-between gap-20 col-span-5">
        <div className="py-3 flex items-center">
          <Badge
            status={goal.status}
            variant={
              goal.status.toLowerCase() === "pending"
                ? "yellow"
                : goal.status.toLowerCase() === "on-going"
                ? "blue"
                : "green"
            }
          ></Badge>
        </div>
        {/*Buttons */}
        <div className="py-3 px-5 flex flex-wrap justify-center items-center gap-1">
          <TransactionForm
            buttonName="Add"
            variant="blueButton"
            goal={{ id: goal._id, name: goal.name, type: "Saving" }}
          />
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
    </div>
  );
}

export default GoalRow;
