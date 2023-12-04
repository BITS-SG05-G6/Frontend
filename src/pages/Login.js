import React from "react";
import Button from "../components/common/Button";
import Text from "../components/common/Text";
import FormInput from "../components/common/FormInput";
import { useState } from "react";
import { Checkbox } from "@material-tailwind/react";
import NavBar from "../components/common/NavBar";

export function Login() {
  return (
    //Login container
    <div class="w-full h-screen bg-white flex items-start justify-center">
      <div className="w-1/2 h-full flex flex-col p-40 ml-10 justify-self-center">
        <img
          className="w-32 h-5 mb-32"
          src={require("../assets/logo.png")}
        ></img>
        {/* Login Form */}
        <div className="w-80 flex flex-col">
          <div className="w-full flex flex-col mb-5">
            <h2 class="font-bold text-4xl text-black">Welcome Back</h2>
            <p class="text-md mt-4 text-gray">
              Welcome back! Please enter your details
            </p>
          </div>
          <div className="w-full flex flex-col">
            <p className="text-black">Email</p>
            <FormInput
              className="mt-2 bg-white"
              placeholder={"Enter your email"}
              type={"email"}
            ></FormInput>
            <p className="text-black mt-4">Password</p>
            <FormInput
              className={"mt-2 bg-white"}
              placeholder={"Password"}
              type={"password"}
            ></FormInput>
            <div className="flex flex-row justify-between w-80">
              <Checkbox label="Remember me" />
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
                className="h-4 w-60"
              />
              Sign Up with Google
            </Button>
            <div class="w-full flex items-center">
              <Text className="mt-4" weight="font-normal" variant="text-base">
                Don’t have an account?
              </Text>
              <Text
                noLink={false}
                variant="text-sm"
                href="/signup"
                className="text-black mt-3 underline underline-offset-1"
              >
                Sign In
              </Text>
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
