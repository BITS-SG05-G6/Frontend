import Text from "./Text";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#EF5DA8] p-10 gap-10">
      <div className="flex justify-around">
        <div>
          <Text
            variant="text-lg"
            className="text-white flex items-center"
            weight="bold"
          >
            Wise{""}
            <Text
              variant="text-lg"
              className="text-black flex items-center"
              weight="bold"
            >
              Wallet
            </Text>
          </Text>
        </div>

        <div className="flex flex-col text-[#FCDDEC]">
          <Text variant="text-md" weight="semibold" className="text-white">
            Products
          </Text>
          <Text variant="text-xs">Invoicing</Text>
          <Text variant="text-xs">Recepies</Text>
          <Text variant="text-xs">Reports</Text>
          <Text variant="text-xs">Accountants</Text>
        </div>

        <div className="flex flex-col text-[#FCDDEC]">
          <Text variant="text-md" weight="semibold" className="text-white">
            Tools
          </Text>
          <Text variant="text-xs">Revenue Simlator</Text>
          <Text variant="text-xs">Tax Calculator</Text>
          <Text variant="text-xs">Quote Tempalte</Text>
        </div>

        <div className="flex flex-col text-[#FCDDEC]">
          <Text variant="text-md" weight="semibold" className="text-white">
            Help
          </Text>
          <Text variant="text-xs">FAQ</Text>
          <Text variant="text-xs">Contact Us</Text>
          <Text variant="text-xs">Legal Document</Text>
          <Text variant="text-xs">Help Center</Text>
        </div>

        <div className="flex flex-col text-[#FCDDEC]">
          <Text variant="text-md" weight="semibold" className="text-white">
            Company
          </Text>
          <Text variant="text-xs">About us</Text>
          <Text variant="text-xs">Press</Text>
          <Text variant="text-xs">Security</Text>
          <Text variant="text-xs">Research</Text>
        </div>
      </div>

      <div className="flex justify-between px-20 text-[#FCDDEC]">
        <div className="gap-6 flex ">
          <Text variant="text-sm">Terms of Service</Text>
          <Text variant="text-sm">Privacy Policy</Text>
        </div>

        <Text variant="text-sm">© 2023,WiseWallet, Inc. All Rights Reserved.</Text>
      </div>
    </div>
  );
};

export default Footer;
