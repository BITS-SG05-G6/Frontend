import Text from "../common/Text";

function AuthLayout({ children }) {
    return (
        <div className="flex justify-between h-screen relative">
            <div className="w-1/2 flex justify-center items-center ">
                <Text
                    className="absolute top-6 left-6 text-[#EF5DA8]"
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
            <div className="w-1/2 object-cover">
                <img
                    className="w-full h-full object-cover"
                    src={require("../../assets/loginside.png")}
                    alt="login"
                />
            </div>
        </div>
    )


}

export default AuthLayout;