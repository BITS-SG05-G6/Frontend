import Text from "./Text";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col gap-10 bg-[#EF5DA8] p-10">
      <div className="flex justify-around">
        <div className="flex items-center justify-center">
          <Text
            variant="text-2xl"
            className="flex items-center text-white"
            weight="bold"
          >
            Wise{""}
            <Text
              variant="text-2xl"
              className="flex items-center text-black"
              weight="bold"
            >
              Wallet
            </Text>
          </Text>
        </div>

        <div className="flex flex-col items-start text-[#FCDDEC]">
          <Text variant="text-md" weight="semibold" className="text-white">
            More Information
          </Text>
          <Link to={"/aboutus"}>
            <Text variant="text-xs">About Us</Text>
          </Link>
          <Link to={"/faq"}>
            <Text variant="text-xs">FAQ</Text>
          </Link>
          <Link to={"/policy"}>
            <Text variant="text-xs">Privacy Policy</Text>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center px-20 text-[#FCDDEC]">
        <Text variant="text-sm">
          © 2023,WiseWallet, Inc. All Rights Reserved.
        </Text>
      </div>
    </div>
  );
};

export default Footer;
