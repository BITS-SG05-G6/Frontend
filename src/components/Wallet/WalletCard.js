import React from 'react';
import Text from '../common/Text';
import Icon from '../common/Icon';
import Box from '../common/Box'
import { WalletIcon } from '../svgs/sidebarIcons';
import { Progress } from "@material-tailwind/react";

const WalletCard = ({ title, amount, used, color }) => {
 return (
<<<<<<< Updated upstream
    <Box className="flex justify-center items-center flex-col gap-10 h-60 w-30" color={"gray"} >
        <>
            <Text  weight="semibold" variant="text-base" className="pt-10" >
                {title}
            </Text>
                <div className="rounded-xl p-4" style={{ backgroundColor: `${color}30` }}>
                <Icon svg={<WalletIcon/>} className="flex item-center" isHovered={"isHovered"} fillColor={color}/>
                </div>
            <div>
                <Text weight={"bold"} variant={"text-base"}>{used}$ /</Text>
                <Text weight={"bold"} variant={"text-base"}>{amount}$ </Text>
            </div>
            <div>
                <Progress value={(used/amount)*100} color='black'/>
            </div>
        </>
        
    </Box>
        
=======
    <div className='w-full max-w-sm p-4 bg-gray-100 border border-gray-200 rounded-lg shadow sm:p-8 space-y-10 hover:'>
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
>>>>>>> Stashed changes
 );
};

export default WalletCard;

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// const Card = ({ icon, , add }) => {
//   return (
//     <Box
//       className="flex justify-center items-center gap-20 flex-col h-80"
//       color="gray">
//       {add ? (
//         <CategoryForm/>
//       ) : (
//         <>
//           <Text variant="text-lg" weight="semibold">
//             Transportation
//           </Text>
//           <div
//             className="p-4 rounded-xl"
//             style={{ backgroundColor: `${color}30` }}
//           >
//             {IconList.map((i) => {
//               if (i.value === icon) {
//                 return (
//                   <FontAwesomeIcon icon={i.icon} size="2xl" color={color} />
//                 );
//               }
//             })}
//           </div>
//           <Text weight="bold">300$</Text>
//         </>
//       )}
//     </Box>
//   );
// };

// export default Card;
