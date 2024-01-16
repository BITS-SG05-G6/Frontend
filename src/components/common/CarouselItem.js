import Box from "./Box";
import Text from "./Text";

const CarourselItem = ({ item, index }) => {
  return (
    <Box
      color={item.color}
      id={`item${index}`}
      className="carousel-item m-0 inline-flex w-[600px] flex-col items-center justify-center gap-10 py-16 text-[#24365E]"
    >
      {/* <div> */}

      <Text className="w-3/4 text-center" variant="text-md" weight="semibold">
        {item.description}
      </Text>
      <div className="flex gap-6">
        <div className="w-12 rounded-full">
          <img src={item.img} alt={item.author}></img>
        </div>
        <div className="flex flex-col justify-center ">
          <Text variant="text-sm" weight="semibold">
            {item.author}
          </Text>
          <Text variant="text-xs" className="text-gray-500">
            {item.jobTitle}
          </Text>
        </div>
      </div>
      {/* </div> */}
    </Box>
  );
};

export default CarourselItem;
