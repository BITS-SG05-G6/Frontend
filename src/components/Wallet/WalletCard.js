import React from 'react';
import Text from '../common/Text';
import Icon from '../common/Icon';
import walletIcon from '../svgs/walletIcon';
import { WalletIcon } from '../svgs/sidebarIcons';
import { Progress } from "@material-tailwind/react";

const WalletCard = ({ title, amount, used }) => {
 return (
    <div className='w-full max-w-sm p-4 bg-gray-100 border border-gray-200 rounded-lg shadow sm:p-8 space-y-10'>
        <div>
            <Text className="text-center ml-10 mr-10 " weight="semibold" variant="text-base" >{title}</Text>
        </div>
        <div>
            <Icon svg={<WalletIcon/>} className="flex item-center" isHovered={"isHovered"} hoverColor={"#EF5DA8"} fillColor={"#FFFFFF"}/>
        </div>
        <div>
            <Text weight={"bold"} variant={"text-base"}>{used}$ /</Text>
            <Text weight={"bold"} variant={"text-base"}>{amount}$ </Text>
        </div>
        <div>
            <Progress value={(used/amount)*100}/>
        </div>
    </div>
 );
};

export default WalletCard;