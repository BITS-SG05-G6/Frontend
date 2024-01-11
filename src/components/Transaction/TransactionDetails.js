import { format } from "date-fns";
import Text from "../common/Text";
import { cn } from "../../utils/cn"
import { formatMoney } from "../../utils/formatMoney";

function TransactionDetails({ transaction }) {
  return (
    <div className="w-96">
      {transaction ? (
        <div className=" bg-white rounded-[10px] border border-gray-300 flex flex-col p-6">
          <div className="px-2 py-3 flex flex-col gap-2">
    
            <div className="text-gray-800 text-xl font-semibold text-center">
              {transaction.title}
            </div>
            <Text variant="text-lg" weight="bold" className={cn(transaction.type === "Expense" ? "text-red-400" : "text-green-400" ,"text-center")}>{formatMoney(transaction.amount, transaction.currency)}</Text>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <Text className="text-gray-400">Type</Text>
              <Text weight="semibold">{transaction.type}</Text>
            </div>

            <div className="flex justify-between">
              <Text className="text-gray-400">Category</Text>
              {transaction.category ? (

                  <Text
                    variant="text-sm"
                    className="rounded-2xl px-3 py-1"
                    style={{
                      backgroundColor: `${transaction.categoryColor}40`,
                      color: transaction.categoryColor,
                    }}
                  >
                    {transaction.category}
                  </Text>
        
              ) : (
          
                  <Text
                    variant="text-sm"
                    className="bg-[#FCDDEC] rounded-2xl px-3 py-1 text-[#EF5CA8]"
                  >
                    None
                  </Text>
              
              )}
            </div>

            <div className="flex justify-between">
              <Text className="text-gray-400">Wallet</Text>
              {transaction.wallet ? (

                  <Text
                    variant="text-sm"
                    className="rounded-2xl px-3 py-1"
                    style={{
                      backgroundColor: `${transaction.walletColor}40`,
                      color: transaction.walletColor,
                    }}
                  >
                    {transaction.wallet}
                  </Text>
        
              ) : (
          
                  <Text
                    variant="text-sm"
                    className="bg-[#FCDDEC] rounded-2xl px-3 py-1 text-[#EF5CA8]"
                  >
                    None
                  </Text>
              
              )}
            </div>

            <div className="flex justify-between">
              <Text className="text-gray-400">Goal</Text>
              {transaction.saving ? (

                  <Text
                    variant="text-sm"
                    className="rounded-2xl px-3 py-1"
                    style={{
                      backgroundColor: `${transaction.savingColor}40`,
                      color: transaction.savingColor,
                    }}
                  >
                    {transaction.saving}
                  </Text>
        
              ) : (
          
                  <Text
                    variant="text-sm"
                    className="bg-[#FCDDEC] rounded-2xl px-3 py-1 text-[#EF5CA8]"
                  >
                    None
                  </Text>
              
              )}
            </div>

            <div className="flex justify-between">
              <Text className="text-gray-400">Date</Text>
              <Text weight="semibold">
                {format(new Date(transaction.date), "dd/MM/yyyy")}
              </Text>
            </div>

            <div className="flex flex-col gap-2 justify- text-start">
              <Text className="text-gray-400">Description</Text>
             
              <textarea
                className="textarea min-h-fit textarea-md border-slate-400 rounded border text-sm"
                value={transaction.description}
                placeholder={transaction.description}
                disabled
              />
            </div>
          </div>
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
