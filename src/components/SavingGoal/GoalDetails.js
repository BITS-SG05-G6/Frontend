import Text from "../common/Text";
import Badge from "../common/Badge";
import { format } from "date-fns";
import GoalEditForm from "./GoalEditForm";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { formatMoney } from "../../utils/formatMoney";

function GoalDetails({ goal }) {
  const { userInfo } = useContext(AuthContext);
  let result = Math.floor((goal.total / goal.target) * 100);
  const progress = result <= 100 ? result : 100;
  return (
    <div className="w-96">
      <div className=" flex flex-col gap-5 rounded-[10px] border border-gray-300 bg-white p-6">
        <div className="flex flex-col gap-2 px-2 py-3 text-center">
          <Text weight="bold" variant="text-xl">
            {goal.name}
          </Text>
          <Text variant="text-md" weight="semibold" className="text-primary">
            {formatMoney(goal.target, userInfo.baseCurrency)}
          </Text>
          {/*Progress */}
          <div className="text-center">
            <div
              className={`radial-progress col-span-2`}
              style={{
                "--value": progress,
                "--size": "10rem",
                background: `${goal.color}20`,
                color: `${goal.color}`,
              }}
              role="progressbar"
            >
              <Text>{progress}%</Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {/*Progress section */}
          <div className="flex justify-between">
            <Text className="text-gray-400" weight="semibold">
              Current progress
            </Text>
            <Text weight="semibold" className="text-pink-300">
              {formatMoney(goal.total, userInfo.baseCurrency)}
            </Text>
          </div>
          {/*Start date and end date section */}
          {goal.startDate && (
            <div className="flex justify-between">
              <Text className="text-gray-400" weight="semibold">
                Start Date
              </Text>
              <Text weight="semibold">
                {format(new Date(goal.startDate), "dd-MM-yyyy")}
              </Text>
            </div>
          )}

          <div className="flex justify-between">
            <Text className="text-gray-400" weight="semibold">
              End Date
            </Text>
            <Text weight="semibold">
              {goal.endDate
                ? format(new Date(goal.endDate), "dd-MM-yyyy")
                : "None"}
            </Text>
          </div>

          {/*Status*/}
          <div className="flex justify-between">
            <Text className="text-gray-400" weight="semibold">
              Status
            </Text>
            <Badge
              status={goal.status}
              variant={goal.status === "On-going" ? "blue" : "green"}
            />
          </div>
          {/*Description section */}
          <div className="flex flex-col justify-start gap-2">
            <Text className="text-start text-gray-400" weight="semibold">
              Description
            </Text>
            <textarea
              className="textarea textarea-md min-h-fit rounded border border-gray-400 text-sm"
              value={goal.description}
              placeholder="Description"
              disabled
            />
          </div>
          {/* Edit Button Form */}
          <div>
            <GoalEditForm goal={goal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoalDetails;
