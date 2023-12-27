import Text from "../common/Text";
import { IconList } from '../svgs/IconList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function DashboardListRow({ obj, list }) {
    return (
        <tr className="w-full">
            {/* Render row for Wallet section */}
            {list === 'wallet' && (
                <>
                    <td className="flex justify-between">
                        <div className="flex gap-4">
                            <div
                                className="p-4 rounded"
                                style={{ backgroundColor: `${obj.color}30` }}
                            >
                                {obj.icon && IconList.map((i) =>
                                    i.value == obj.icon ? (
                                        <FontAwesomeIcon icon={i.icon} color={obj.color}></FontAwesomeIcon>
                                    ) : null
                                )}

                            </div>
                            <Text className='pt-1' variant='text-sm' weight='semibold'>{obj.name}</Text>
                        </div>
                        <Text variant='text-sm' className='pt-1' weight='semibold'>{obj.amount} {obj.currency}</Text>

                    </td>
                </>
            )}
            {list === 'transaction' && (
                <>
                    <td>
                        <Text variant='text-sm' weight='semibold'>{obj.title}</Text>
                    </td>
                    <td>
                        <Text variant='text-sm' weight='semibold' className={`${obj.transactionType === 'Expense' ? 'text-red-400' : 'text-green-400'}`}>{obj.transactionType}</Text>
                    </td>
                    <td>
                        <Text variant='text-sm' weight='semibold'>{obj.amount} {obj.currency}</Text>
                    </td>
                    <td>
                        <Text variant='text-sm' weight='semibold' className='text-gray-500'>{obj.date}</Text>
                    </td>
                </>
            )

            }
        </tr>
    )

}

export default DashboardListRow;