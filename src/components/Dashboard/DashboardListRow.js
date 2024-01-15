import Text from "../common/Text";
import { IconList } from "../svgs/IconList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../context/authContext";
import { formatMoney } from "../../utils/formatMoney";

function DashboardListRow({ obj, list }) {
  const { userInfo } = useContext(AuthContext);
  return (
    <tr className="w-full text-start">
      {/* Render row for Wallet section */}
      {list === "wallet" && (
        <>
          <td className="flex items-center justify-between text-right">
            <div className="flex items-center gap-4">
              <div
                className="rounded p-4"
                style={{ backgroundColor: `${obj.color}30` }}
              >
                {obj.icon &&
                  IconList.map((i) =>
                    i.value === obj.icon ? (
                      <FontAwesomeIcon
                        icon={i.icon}
                        color={obj.color}
                      ></FontAwesomeIcon>
                    ) : null,
                  )}
              </div>
              <Text className="pt-1" variant="text-sm" weight="semibold">
                {obj.name}
              </Text>
            </div>
            <Text variant="text-sm" weight="semibold">
              {formatMoney(obj.amount, obj.baseCurrency)}
            </Text>
          </td>
        </>
      )}
      {/*Render row for Transaction section */}
      {list === "transaction" && (
        <>
          <td>
            <Text
              variant="text-sm"
              weight="semibold"
              className="hover:text-purple-300"
              href={`/transaction/${obj.id}`}
            >
              {obj.title}
            </Text>
          </td>
          <td>
            <Text
              variant="text-sm"
              weight="semibold"
              className={`badge badge-outline ${obj.type.toLowerCase() === "expense" ? "text-red-200" : "text-green-200"}`}
            >
              {obj.type}
            </Text>
          </td>
          <td>
            <Text variant="text-sm" weight="semibold">
              {formatMoney(obj.amount, obj.currency)}
            </Text>
          </td>
          <td>
            <Text variant="text-sm" weight="semibold" className="text-gray-500">
              {format(new Date(obj.date), "dd-MM-yyyy")}
            </Text>
          </td>
        </>
      )}
      {/*Render row for Bill section */}
      {list === "bill" && (
        <>
          <td>
            <Text className="pt-1" variant="text-sm" weight="semibold">
              {obj.title}
            </Text>
          </td>
          <td>
            <Text variant="text-sm">
              {formatMoney(obj.amount, obj.currency)}
            </Text>
          </td>
          <td>
            <Text
              variant="text-sm"
              weight="semibold"
              className={`badge badge-outline ${obj.status.toLowerCase() === "paid" ? "text-green-500" : "text-yellow-800"}`}
            >
              {obj.status}
            </Text>
          </td>
        </>
      )}
    </tr>
  );
}

export default DashboardListRow;
