import Badge from "../common/Badge";
import { format } from "date-fns";
import TransactionForm from "../Transaction/TransactionForm";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { formatMoney } from "../../utils/formatMoney";
import ConfirmationModal from "../common/ConfirmationModal";
import Text from "../common/Text";
import { Link } from "react-router-dom";

function GoalRow({ goal, onDelete, href }) {
  const { userInfo } = useContext(AuthContext);
  let result = Math.floor((goal.total / goal.target) * 100);
  const progress = result <= 100 ? result : 100;
  const styles = {
    borderColor: goal.color,
  };

  console.log(progress);
  return (
    <div className="flex flex-col gap-6 rounded-xl border-2 border-solid px-6 py-6">
      {/* Title */}
      <Text className="text-left text-lg font-medium" href={href}>{goal.name}</Text>


      {/* Progress */}
      <div className="flex flex-col">
        <div
          className="w-full rounded-lg"
          style={{ background: `${goal.color}30` }}
        >
          <div
            className={`h-3 rounded-lg bg-purple-200`}
            style={{
              width: `${progress}%`,
              background: `${goal.color}`,
            }}
          ></div>
        </div>
        {/* <progress
          className={`progress progress-success w-full`}
          value={progress}
          max="100"
          // color={styles}
          style={{
            "--value": progress,
            "--size": "7rem",
            background: `${goal.color}20`,
            color: `${goal.color}`,
          }}
        ></progress> */}

        <span className="text-xs font-normal text-[#666666] opacity-80">
          {progress}/100
        </span>
      </div>

      {/* Information */}
      <div className="flex flex-col gap-2">
        {/* Target */}
        <div className="flex flex-row justify-between">
          <span className="text-sm font-normal text-[#666666]">Target:</span>
          <span className="text-sm font-medium text-[#181818]">
            {formatMoney(goal.target, userInfo.baseCurrency)}
          </span>
        </div>

        {/* Progress */}
        <div className="flex flex-row justify-between">
          <span className="text-sm font-normal text-[#666666]">Progress:</span>
          <span className="text-sm font-medium text-[#181818]">
            {formatMoney(goal.total, userInfo.baseCurrency)}
          </span>
        </div>

        {/* Started Date */}
        <div className="flex flex-row justify-between">
          <span className="text-sm font-normal text-[#666666]">
            Start Date:
          </span>
          <span className="text-sm font-medium text-[#181818]">
            {format(new Date(goal.startDate), "dd-MM-yyyy")}
          </span>
        </div>

        {/* Ended Date */}
        <div className="flex flex-row justify-between">
          <span className="text-sm font-normal text-[#666666]">End Date:</span>
          <span className="text-sm font-medium text-[#181818]">
            {goal.endDate
              ? format(new Date(goal.startDate), "dd-MM-yyyy")
              : "None"}
          </span>
        </div>

        {/* Status */}
        <div className="flex flex-row justify-between">
          <span className="text-sm font-normal text-[#666666]">Status:</span>
          <span>
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
          </span>
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
