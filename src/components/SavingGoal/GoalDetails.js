import Text from "../common/Text";
import Badge from "../common/Badge";
import { format } from "date-fns";
import GoalEditForm from "./GoalEditForm";

function GoalDetails({ goal }) {
  const progress = Math.floor((goal.total / goal.target) * 100);
  return (
    <div className="w-96">
      <div className=" bg-white rounded-[10px] border border-gray-300 flex flex-col gap-5 p-6">
        <div className="px-2 py-3 flex flex-col gap-2 text-center">
          <Text weight="bold" variant="text-xl">
            {goal.name}
          </Text>
          <Text variant="text-md" weight="semibold" className="text-primary">
            {goal.target}
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
              {goal.total}
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

          {goal.endDate && (
            <div className="flex justify-between">
              <Text className="text-gray-400" weight="semibold">
                End Date
              </Text>
              <Text weight="semibold">
                {format(new Date(goal.endDate), "dd-MM-yyyy")}
              </Text>
            </div>
          )}
          {/*Status*/}
          <div className="flex justify-between">
            <Text className="text-gray-400" weight="semibold">
              Status
            </Text>
            <Badge
              status={goal.status}
              variant={goal.status === "On-going" ? "blue" : "green"}
            ></Badge>
          </div>
          {/*Description section */}
          <div className="flex flex-col gap-2 justify-start">
            <Text className="text-gray-400" weight="semibold">
              Description
            </Text>
            <textarea
              className="textarea min-h-fit textarea-md rounded border border-gray-400 text-sm"
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
