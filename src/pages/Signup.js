import React from "react";
import Button from "../components/common/Button";
import Text from "../components/common/Text";
import FormInput from "../components/common/FormInput";

export function SignUp() {
  return (
    //Login container
    <div class="w-full h-screen bg-white flex items-start justify-center">
      <div className="w-1/2 h-full flex flex-col p-20 ml-10 justify-self-center">
        <div className="mb-10">
          <a href="/" className="text-xl font-bold"><span className="text-[#EF5DA8] ">Wise</span>Wallet</a>
        </div>
        {/* Login Form */}
        <div className="w-full flex flex-col items-center m-10 pl-10">
          <div className="w-full flex flex-col mb-5">
            <h2 class="font-bold text-3xl text-black">Create new account</h2>
            <p class="text-md mt-4 text-gray">
              Welcome back! Please enter your details
            </p>
          </div>
          <div className="w-full flex flex-col">
            <form>
              <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
              <FormInput
                className=" bg-white"
                placeholder={"Enter your fullname"}
                type={"text"}
                value="name"
              ></FormInput>
            </form>

            <form className="mt-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <FormInput
                className="bg-white"
                placeholder={"Enter your email"}
                type={"text"}
                value="email"
              ></FormInput>
            </form>

            <form className="mt-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <FormInput
                className="bg-white"
                placeholder={"Password"}
                type={"password"}
                value="password"
              ></FormInput>
            </form>

            <Button
              className="mt-4 w-80"
              variant="filled"
              size="lg"
              type="login"
            >
              Create Account
            </Button>
            <Button
              size="lg"
              variant="roundOutline"
              color="blue-gray"
              className="flex items-center gap-3 mt-4 w-80"
              type="login-google"
            >
              <img
                src="https://docs.material-tailwind.com/icons/google.svg"
                alt="metamask"
                className="h-4"
              />
              Sign Up with Google
            </Button>
            <div class="w-full flex items-center">
            <p class="mt-4 text-base font-light text-gray-500 dark:text-gray-400">
                  Already have an account yet? 
                  <a href="/login" class="font-medium text-[#EF5DA8] hover:underline dark:text-primary-500 ml-1">
                     Sign in
                    </a>
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div class="w-1/2 h-screen bg-[#dfe0e3] sm:block hidden">
        <img
          className="w-full h-full object-contain"
          src={require("../assets/loginside.png")}
          alt="image"
        ></img>
      </div>
    </div>
  );
}
