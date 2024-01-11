import Text from "../common/Text";
import { IconList } from "../svgs/IconList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WalletEditForm from "./WalletEditForm";
import Button from "../common/Button";

function WalletDetails({ wallet }) {
  console.log(wallet);
  return (
    <div className="w-96">
      <div className=" bg-white rounded-[10px] border border-gray-300 flex flex-col gap-5 p-6">
        <div className="px-2 py-3 flex flex-col gap-2 text-center">
          <Text weight="bold" variant="text-xl">
            {wallet.name}
          </Text>
          <Text variant="text-md" weight="semibold" className="text-primary">
            {wallet.amount}
          </Text>
          {/* Icon */}
          <div className="flex justify-center">
            <div
              className="p-4 rounded-xl w-40 h-40 flex justify-center items-center"
              style={{
                backgroundColor: `${wallet.color}30`,
              }}
            >
              {IconList.map((i) =>
                i.value === wallet.icon ? (
                  <FontAwesomeIcon
                    icon={i.icon}
                    size="4x"
                    color={wallet.color}
                  />
                ) : null
              )}
            </div>
          </div>
        </div>
        {/*Description section */}
        <div className="flex flex-col gap-2 justify-start">
          <Text className="text-gray-400" weight="semibold">
            Description
          </Text>
          <textarea
            className="textarea min-h-fit textarea-md rounded border border-gray-400 text-sm"
            value={wallet.description}
            placeholder="Description"
            disabled
          />
        </div>
        <div>
          <WalletEditForm wallet={wallet} />
        </div>
      </div>
    </div>
  );
}

export default WalletDetails;
