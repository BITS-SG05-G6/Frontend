import Text from "../common/Text";
import { IconList } from "../svgs/IconList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryEditForm from "./CategoryEditForm";
import Button from "../common/Button";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { formatMoney } from "../../utils/formatMoney";

function CategoryDetails({ category }) {
  const { userInfo } = useContext(AuthContext);
  return (
    <div className="mb-10 w-full lg:col-span-1 lg:w-96">
      <div className=" flex w-full flex-col gap-5 rounded-[10px] border border-gray-300 bg-white p-6">
        <div className="flex w-full flex-col gap-2 px-2 py-3 text-center">
          <Text weight="bold" variant="text-xl">
            {category.name}
          </Text>
          <Text variant="text-md" weight="semibold" className="text-primary">
            {/* {category.amount} */}
          </Text>
          {/* Icon */}
          <div className="flex justify-center">
            <div
              className="flex h-40 w-40 items-center justify-center rounded-xl p-4"
              style={{
                backgroundColor: `${category.color}30`,
              }}
            >
              {IconList.map((i) =>
                i.value === category.icon ? (
                  <FontAwesomeIcon
                    icon={i.icon}
                    size="4x"
                    color={category.color}
                  />
                ) : null,
              )}
            </div>
          </div>
        </div>

        {/*Description section */}
        <div className="flex justify-between">
          <Text className="text-gray-400">Type</Text>
          <Text weight="semibold">{category.type}</Text>
        </div>
        <div className="flex justify-between">
          <Text className="text-gray-400">Budget</Text>
          <Text weight="semibold">{formatMoney(category.budget, userInfo.baseCurrency) || "None"}</Text>
        </div>

        <div className="flex flex-col justify-start gap-2">

          <Text className="text-gray-400" weight="semibold">
            Description
          </Text>
          <textarea
            className="textarea textarea-md min-h-fit rounded border border-gray-400 text-sm"
            value={category.description}
            placeholder="Description"
            disabled
          />
        </div>
        <div>
          <CategoryEditForm category={category} />
        </div>
      </div>
    </div>
  );
}

export default CategoryDetails;
