import Text from "../common/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faScaleBalanced,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { formatMoney } from "../../utils/formatMoney";

function OverviewCard({ isPrimary, type, amount }) {
  const { userInfo } = useContext(AuthContext);
  return (
    <div
      className={`inline-flex w-full items-center justify-between gap-4 rounded-[10px] px-5 py-6 xl:h-28 xl:w-56 xl:justify-start ${isPrimary ? "bg-neutral-700" : "bg-[#F8F8F8]"}`}
    >
      {/* Icon */}
      <div className="relative h-11 w-11">
        <div
          className={`absolute h-11 w-11 rounded-full ${isPrimary ? "bg-[#4E5257]" : "bg-[#EBE8E8]"}`}
        ></div>
        <FontAwesomeIcon
          icon={
            type === "balance"
              ? faScaleBalanced
              : type === "spending"
                ? faSackDollar
                : faWallet
          }
          className={`absolute left-3 top-3 h-5 w-5 ${isPrimary ? "text-pink-400" : ""}`}
        />
      </div>
      <div className="inline-flex flex-col items-start justify-start gap-2.5">
        {/* Title */}
        <Text
          className=" font-['Kumbh Sans'] font-normal text-gray-400"
          variant="text-sm"
        >
          {type === "balance"
            ? "Monthly balance"
            : type === "spending"
              ? "Monthly spending"
              : "Monthly savings"}
        </Text>

        {/* Number Of Money */}
        <Text
          className={`${isPrimary ? "text-white" : "text-black"} font-['Kumbh Sans]`}
          variant="text-xl"
          weight="bold"
        >
          {formatMoney(amount, userInfo.baseCurrency)}
        </Text>
      </div>
    </div>
  );
}

export default OverviewCard;
