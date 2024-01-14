import Badge from "../common/Badge";
import { format } from "date-fns";
import TransactionForm from "../Transaction/TransactionForm";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { formatMoney } from "../../utils/formatMoney";
import ConfirmationModal from "../common/ConfirmationModal";

function GoalRow({ goal, onDelete, href }) {
  const { userInfo } = useContext(AuthContext);
  let result = Math.floor((goal.total / goal.target) * 100);
  const progress = result <= 100 ? result : 100;
  const styles = {
    borderColor: goal.color,
  };

  return (
    <div className="flex flex-col gap-6 rounded-xl border-2 border-solid px-6 py-6">
      {/* Title */}
      <span className="text-left text-lg font-medium">{goal.name}</span>

      {/* Progress */}
      <div className="flex flex-col">
        <progress
          className={`progress progress-success w-full`}
          value={progress}
          max="100"
          color={styles}
        ></progress>
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
          <span className="text-sm font-normal text-[#666666]">
            End Date:
          </span>
          <span className="text-sm font-medium text-[#181818]">
            {goal.endDate ? format(new Date(goal.startDate), "dd-MM-yyyy") : "None"}
          </span>
        </div>
        {/* <div className="flex flex-row justify-between">
          <span className="text-sm font-normal text-[#666666]"></span>
          <span className="text-sm font-medium text-[#181818]"></span>
        </div> */}

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

    // <div className="flex w-full flex-col items-center justify-center gap-3 rounded-lg border border-gray-400 bg-white px-5 py-3 transition duration-75 ease-linear hover:border-[3px] hover:border-[#A5A6F6] lg:flex lg:flex-row">
    //   {/*Progress */}
    //   <div
    //     className={`radial-progress w-28`}
    //     style={{
    //       "--value": progress,
    //       "--size": "7rem",
    //       background: `${goal.color}20`,
    //       color: `${goal.color}`,
    //     }}
    //     role="progressbar"
    //   >
    //     <Text>{progress}%</Text>
    //   </div>
    //   {/*Content */}
    //   <div className="flex w-full flex-col items-start justify-start gap-1 lg:col-span-2 lg:justify-center">
    //     <Text weight="semibold" variant="text-lg" href={href}>
    //       {goal.name}
    //     </Text>
    //     <Text weight="semibold" className="text-primary">
    //       {formatMoney(goal.target, userInfo.baseCurrency)}
    //     </Text>
    //     <Text weight="semibold" className="text-info">
    //       Progress: {formatMoney(goal.total, userInfo.baseCurrency)}
    //     </Text>
    //   </div>
    //   <div className="flex w-full flex-col items-start justify-start gap-1 lg:col-span-3 lg:justify-center lg:px-5">
    //     {goal.startDate && (
    //       <Text className="text-gray-500">
    //         <span className="text-black">Start: </span>
    //         {format(new Date(goal.startDate), "dd-MM-yyyy")}{" "}
    //       </Text>
    //     )}
    //     {goal.endDate && (
    //       <Text className="text-gray-500">
    //         <span className="text-black">End: </span>
    //         {format(new Date(goal.endDate), "dd-MM-yyyy")}{" "}
    //       </Text>
    //     )}
    //   </div>
    //   {/*Status and action buttons */}
    //   <div className="col-span-5 flex flex-col lg:justify-between lg:gap-20">
    //     <div className="flex items-center py-3">
    //       <Badge
    //         status={goal.status}
    //         variant={
    //           goal.status.toLowerCase() === "pending"
    //             ? "yellow"
    //             : goal.status.toLowerCase() === "on-going"
    //               ? "blue"
    //               : "green"
    //         }
    //       ></Badge>
    //     </div>
    //     {/*Buttons */}
    //     <div className="flex flex-wrap items-center justify-center gap-1 px-5 py-3">
    //       <TransactionForm
    //         buttonName="Add"
    //         variant="blueButton"
    //         goal={{ id: goal._id, name: goal.name, type: "Saving" }}
    //       />
    //       <Button variant="lightPrimary">Edit</Button>
    //       <ConfirmationModal
    //         idModal={`eleteConfirmation-${goal._id}}`}
    //         btnName="Delete"
    //         btnSize="small"
    //         btnType="button"
    //         message={`Do you want to delete goal "${goal.name}" ?`}
    //         onSubmit={() => onDelete(goal._id)}
    //         variant="redButton"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default GoalRow;
