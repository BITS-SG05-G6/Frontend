import React from "react";
import Button from "../components/common/Button";
import Text from "../components/common/Text";
import FormInput from "../components/common/FormInput";
import { Checkbox } from "@material-tailwind/react";

export function Login() {
  return (
    //Login container
    <div class="w-full h-screen bg-white flex items-start justify-center">
      <div className="w-1/2 h-full flex flex-col p-20 ml-10 justify-self-center">
      <div className="mb-5">
          <a href="/" className="text-xl font-bold"><span className="text-[#EF5DA8] ">Wise</span>Wallet</a>
        </div>
        {/* Login Form */}
        <div className="w-full flex flex-col items-center p-10 m-10">
          <div className="w-full flex flex-col mb-5">
            <h2 class="font-bold text-3xl text-black">Welcome Back</h2>
            <p class="text-md mt-4 text-gray">
              Welcome back! Please enter your details
            </p>
          </div>
          <div className="w-full flex flex-col">  
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
                className="bg-white input-md"
                placeholder={"Password"}
                type={"password"}
                value="password"
              ></FormInput>
            </form>
            <div className="flex flex-row justify-between w-80">
              <Checkbox label="Remember me" defaultChecked color="black"/>
              <Text
                noLink={false}
                variant="text-sm"
                href="/forgetpassword"
                className="text-black mt-3"
              >   
                Forget password
              </Text>
            </div>
            <Button
              className="mt-4 w-80"
              variant="filled"
              size="lg"
              type="login"
            >
              Login
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
            <div class="w-full flex jusitfy-around">
                <p class="mt-4 text-base font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? 
                  <a href="/signup" class="font-medium text-[#EF5DA8] hover:underline dark:text-primary-500 ml-1">
                     Sign up
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
