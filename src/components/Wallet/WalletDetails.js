import Text from "../common/Text";
import { IconList } from "../svgs/IconList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WalletEditForm from "./WalletEditForm";
import { formatMoney } from "../../utils/formatMoney";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function WalletDetails({ wallet }) {
  const { userInfo } = useContext(AuthContext);
  return (
    <div className="w-96">
      <div className=" flex flex-col gap-5 rounded-[10px] border border-gray-300 bg-white p-6">
        <div className="flex flex-col gap-2 px-2 py-3 text-center">
          <Text weight="bold" variant="text-xl">
            {wallet.name}
          </Text>
          <Text variant="text-md" weight="semibold" className="text-primary">
            {formatMoney(wallet.amount, userInfo.baseCurrency)}
          </Text>
          {/* Icon */}
          <div className="flex justify-center">
            <div
              className="flex h-40 w-40 items-center justify-center rounded-xl p-4"
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
                ) : null,
              )}
            </div>
          </div>
        </div>
        {/*Description section */}
        <div className="flex flex-col justify-start gap-2">
          <Text className="text-start text-gray-400" weight="semibold">
            Description
          </Text>
          <textarea
            className="textarea textarea-md min-h-fit rounded border border-gray-400 text-sm"
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
