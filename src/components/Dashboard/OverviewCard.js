import Text from "../common/Text";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faScaleBalanced, faSackDollar } from "@fortawesome/free-solid-svg-icons";

function OverviewCard({ isPrimary, type, amount }) {
    return (
        <div className={`w-56 h-28 px-5 py-6 rounded-[10px] justify-start items-center gap-4 inline-flex ${isPrimary ? 'bg-neutral-700' : 'bg-[#F8F8F8]'}`}>
            <div className="w-11 h-11 relative">
                <div className={`w-11 h-11 absolute rounded-full ${isPrimary ? 'bg-[#4E5257]' : 'bg-[#EBE8E8]'}`} ></div>
                <FontAwesomeIcon icon={type === 'balance' ? faScaleBalanced : type === 'spending' ? faSackDollar : faWallet} className={`w-5 h-5 left-3 top-3 absolute ${isPrimary ? 'text-pink-400' : ''}`} />
            </div>
            <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                <Text className=" text-gray-400 font-normal font-['Kumbh Sans']" variant='text-sm'>
                    {type === 'balance' ? 'Monthly balance' : (type === 'spending' ? 'Monthly spending' : 'Monthly savings')}
                </Text>
                <Text className={`${isPrimary ? 'text-white' : 'text-black'} font-['Kumbh Sans]`} variant='text-xl' weight='bold'>{amount}</Text>
            </div>
        </div>
    );
}

export default OverviewCard;