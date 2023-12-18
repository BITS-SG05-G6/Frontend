import { format } from "date-fns";
import Text from "../common/Text";

function TransactionDetails({ transaction }) {
  return (
    <div className="w-96">
      {transaction ? (
        <div className=" bg-white rounded-[10px] border border-gray-300 flex flex-col p-6">
          <div className="px-2 py-3 flex flex-col gap-2">
            <div className="text-gray-800 text-xl font-semibold text-center">
              {transaction.title}
            </div>
            <div className="text-red-400 text-lg font-bold text-center">
              {transaction.amount} VND
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <Text className="text-gray-400">Type</Text>
              <Text weight="semibold">{transaction.type}</Text>
            </div>

            <div className="flex justify-between">
              <Text className="text-gray-400">Category</Text>
              <Text weight="semibold" className="rounded-xl px-2 " style={{
                backgroundColor: `${transaction.categoryColor}40`,
                color: transaction.categoryColor,
              }}>{transaction.category}</Text>
            </div>

            <div className="flex justify-between">
              <Text className="text-gray-400">Wallet</Text>
              <Text weight="semibold">{transaction.wallet}</Text>
            </div>

            <div className="flex justify-between">
              <Text className="text-gray-400">Date</Text>
              <Text weight="semibold">
                {format(new Date(transaction.date), "dd/MM/yyyy")}
              </Text>
            </div>

            <div className="flex flex-col gap-2 justify-start">
            <Text className="text-gray-400">Description</Text>
              <textarea
                className="textarea min-h-fit textarea-md border-slate-400 rounded border text-sm"
                value={transaction.description}
                placeholder={transaction.description}
                disabled
              />
            </div>
          </div>
          {/* <div className="px-5 py-3">
            <table className="table">
              <tr>
                <th className="text-gray-400">Type</th>
                <td className="font-semibold text-end">{transaction.type}</td>
              </tr>
              <tr>
                <th className="text-gray-400">Category</th>
                <td className="text-end font-semibold">
                  <span
                    className="rounded-[10px] px-4 py-1"
                    style={{ backgroundColor: transaction.color }}
                  >
                    {transaction.category}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="text-gray-400">Wallet</th>
                <td className="text-end font-semibold">
                  <span className="bg-[#A5A6F6] rounded-[10px] px-4 py-1">
                    {transaction.wallet}
                  </span>
                </td>
              </tr>
              <tr>
                <th className="text-gray-400">Date</th>
                <td className="text-end font-semibold">
                  <span className="bg-slate-200 rounded-[10px] px-3 py-1">
                    {format(new Date(transaction.date), "dd/MM/yyyy")}
                  </span>
                </td>
              </tr>
            </table>
          </div>
          <div className="px-4 py-3 flex flex-col gap-2">
            <div className="text-gray-400 font-semibold text-sm ms-5">
              Description
            </div>
            <textarea
              className="texarea textarea-md border-slate-400 rounded border text-sm mx-4 my-2 p-2"
              placeholder={transaction.description}
              disabled
            ></textarea>
          </div> */}
        </div>
      ) : (
        <div className="relative top-1/3 flex flex-col justify-start items-center">
          <img
            src={require("../../assets/transactionplaceholder.png")}
            width="30%"
            height="30%"
            className=""
            alt="no transaction"
          ></img>
          <div>
            <Text className="text-slate-400" variant="text-md">
              Choose a transaction
            </Text>
          </div>
        </div>
      )}
    </div>
  );
}

export default TransactionDetails;
