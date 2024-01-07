import Text from "../common/Text";
import Financial from "../svgs/Financial";

function StatisticCard({ isPrimary, type, amount }) {
  return (

    
    <div class="bg-gradient-to-r from-purple-600 to-pink-500 p-5 rounded-lg shadow-lg text-white w-80">
        <div class="flex items-center justify-between">
            <div className="flex flex-col">
                <Text children={type} weight="bold" variant="text-lg"/>
                <Text children={amount} weight="bold" variant="text-lg"/>

            </div>
            <div class="bg-white p-1 rounded-full">
                <Financial/>

            </div>
        </div>
        <div class="mt-4">
            {/* <span class="text-sm">Great progress! Keep up the good work.</span> */}
        </div>
    </div>

  );
}

export default StatisticCard;
