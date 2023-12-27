import Text from "../common/Text";
import { IconList } from '../svgs/IconList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function WalletRow({name, amount, currency, color, icon }) {
    return (
        <tr className="w-full">
            <td className="flex justify-between">
                <div className="flex gap-4">
                    <div
                        className="p-4 rounded"
                        style={{ backgroundColor: `${color}30` }}
                    >
                        {icon && IconList.map((i) =>
                            i.value == icon ? (
                                <FontAwesomeIcon icon={i.icon} color={color}></FontAwesomeIcon>
                            ) : null
                        )}

                    </div>
                    <Text className='pt-1' variant='text-sm' weight='semibold'>{name}</Text>
                </div>
                <Text variant='text-sm' className='pt-1' weight='semibold'>{amount} {currency}</Text>
            </td>
        </tr>
    )

}

export default WalletRow;