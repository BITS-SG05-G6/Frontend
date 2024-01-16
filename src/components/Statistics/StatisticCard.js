import Text from "../common/Text";
import Financial from "../svgs/Financial";

function StatisticCard({ type, amount }) {
  return (
    <div class="w-80 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 p-5 text-white shadow-lg">
      <div class="flex items-center justify-between">
        <div className="flex flex-col">
          <Text children={type} weight="bold" variant="text-lg" />
          <Text children={amount} weight="bold" variant="text-lg" />
        </div>
        <div class="rounded-full bg-white p-1">
          <Financial />
        </div>
      </div>
    </div>
  );
}

export default StatisticCard;
