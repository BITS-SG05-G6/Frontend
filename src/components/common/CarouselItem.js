import Box from "./Box";
import Text from "./Text";

const CarourselItem = ({ item, index }) => {
  return (
    <Box
      color={item.color}
      id={`item${index}`}
      className="carousel-item inline-flex items-center justify-center w-[600px] m-0 flex-col gap-10 py-16 text-[#24365E]"
    >
      {/* <div> */}

      <Text className="w-3/4 text-center" variant="text-md" weight="semibold">{item.description}</Text>
      <div className="flex gap-6">
        <div className="rounded-full w-12">
          <img src={item.img} alt={item.author}></img>
        </div>
        <div className="flex flex-col justify-center ">
          <Text variant="text-sm" weight="semibold">{item.author}</Text>
          <Text variant="text-xs" className="text-gray-500">{item.jobTitle}</Text>
        </div>
      </div>
      {/* </div> */}
    </Box>
  );
};

export default CarourselItem;
