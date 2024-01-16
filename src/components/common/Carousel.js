import React from "react";
import CarourselItem from "./CarouselItem";

const Caroursel = () => {
  const items = [
    {
      description:
        "\"I can't say enough about it. Thanks for the great service. It's the perfect solution for our business. You've saved our business!\"",
      author: "Heiden Brown",
      jobTitle: "Upwork CEO",
      img: require("../../assets/reviewer.png"),
      color: "gray",
    },
    {
      description:
        "\"It's is both attractive and highly adaptable. It's exactly what I've been looking for. Definitely worth the investment.\"",
      author: "Heiden Brown",
      jobTitle: "Upwork CEO",
      img: require("../../assets/reviewer.png"),
      color: "blue",
    },
    {
      description:
        "\"I'd be lost without it. It's incredible. It's is the real deal! Since I invested in it I made over 100,000 dollars profits.\"",
      author: "Heiden Brown",
      jobTitle: "Upwork CEO",
      img: require("../../assets/reviewer.png"),
      color: "yellow",
    },
    {
      description:
        "\"I can't say enough about it. Thanks for the great service. It's the perfect solution for our business. You've saved our business!\"",
      author: "Heiden Brown",
      jobTitle: "Upwork CEO",
      img: require("../../assets/reviewer.png"),
      color: "purple",
    },
    {
      description:
        "\"I can't say enough about it. Thanks for the great service. It's the perfect solution for our business. You've saved our business!\"",
      author: "Heiden Brown",
      jobTitle: "Upwork CEO",
      img: require("../../assets/reviewer.png"),
      color: "pink",
    },
    {
      description:
        "\"I can't say enough about it. Thanks for the great service. It's the perfect solution for our business. You've saved our business!\"",
      author: "Heiden Brown",
      jobTitle: "Upwork CEO",
      img: require("../../assets/reviewer.png"),
      color: "gray",
    },
    {
      description:
        "\"I can't say enough about it. Thanks for the great service. It's the perfect solution for our business. You've saved our business!\"",
      author: "Heiden Brown",
      jobTitle: "Upwork CEO",
      img: require("../../assets/reviewer.png"),
      color: "blue",
    },
    {
      description:
        "\"I can't say enough about it. Thanks for the great service. It's the perfect solution for our business. You've saved our business!\"",
      author: "Heiden Brown",
      jobTitle: "Upwork CEO",
      img: require("../../assets/reviewer.png"),
      color: "gray",
    },
    {
      description:
        "\"I can't say enough about it. Thanks for the great service. It's the perfect solution for our business. You've saved our business!\"",
      author: "Heiden Brown",
      jobTitle: "Upwork CEO",
      img: require("../../assets/reviewer.png"),
      color: "purple",
    },
  ];

  // const scrollContainerRef = useRef(null);

  // useEffect(() => {
  //   const container = scrollContainerRef.current;

  //   const handleScroll = () => {
  //     if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
  //       // If scrolled to the end, smoothly scroll back to the beginning
  //       container.scrollTo({
  //         left: 0,
  //         behavior: 'smooth',
  //       });
  //     }
  //   };

  //   container.addEventListener('scroll', handleScroll);

  //   return () => {
  //     container.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <>
      <div className=" no-scrollbar flex gap-10 space-x-4 overflow-x-auto p-4">
        {items.map((item, index) => {
          return <CarourselItem item={item} index={index} />;
        })}
      </div>

      {/* <div className="flex justify-center w-full py-2 gap-2">
        
        {items.map((item, index) => {
          return <a href={`#item${index}`} className="btn btn-xs">
          {index }
        </a>
        })}
      </div> */}
    </>
  );
};

export default Caroursel;
