import Text from "../common/Text";

function AuthLayout({ children }) {
  return (
    <div className="relative flex h-screen justify-between">
      <div className="flex w-full items-center justify-center xl:w-1/2 ">
        <Text
          className="absolute left-6 top-6 text-[#EF5DA8]"
          variant="text-xl"
          weight="bold"
          noLink={false}
          href="/"
        >
          Wise
          <Text className="text-black" variant="text-xl" weight="bold">
            Wallet
          </Text>
        </Text>
        {children}
      </div>
      {/*Image section */}
      <div className="hidden object-cover xl:block xl:w-1/2">
        <img
          className="h-full w-full object-cover"
          src={require("../../assets/loginside.webp")}
          alt="login"
        />
      </div>
    </div>
  );
}

export default AuthLayout;
