import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import FormInput from "../components/common/FormInput";
import Text from "../components/common/Text";
import * as axiosInstance from "../services/auth";

const Signup = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();

  function handleCallbackResponse(res) {
    console.log("Encoded KWT ID token: " + res.credential);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "635121721005",
      callback: handleCallbackResponse,
    });

    // google.accounts.id.render()
    google.accounts.id.renderButton(document.getElementById("signUpDiv"), {
      theme: "outline",
      size: "large",
      shape: "square",
      text: "Sign in with Google",
      logo_alignment: "center",
    });
  }, []);
  const [loginError, setLoginError] = React.useState("");

  const onSubmit = async (d) => {
    await axiosInstance
      .signup(d.username, d.password)
      .then((res) => {
        console.log(res);
        navigate('/login')
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
        setLoginError("Wrong password or username, please try again!");
      });

  };

  return (
    // <div className="flex justify-between h-screen relative">
    //   <div className="w-1/2 flex justify-center items-center">
    //     <Text
    //       className="absolute top-6 left-6 text-[#EF5DA8]"
    //       variant="text-xl"
    //       weight="bold"
    //       noLink={false}
    //       href="/"
    //     >
    //       Wise
    //       <Text className="text-black" variant="text-xl" weight="bold">
    //         Wallet
    //       </Text>
    //     </Text>
    <>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col gap-3 mb-12">
            <Text variant="text-2xl" weight="bold">
              Create new account
            </Text>
            <Text>Welcome! Please enter your details</Text>
          </div>
          {loginError && <div className="text-red-500">{loginError}</div>}

          <form className="flex flex-col gap-6 max-w-sm">
            <Controller
              name="username"
              control={control}
              defaultValue=""
              rules={{
                required: "Username is required!",
                minLength: {
                  value: 2,
                  message: "Username should be at least 2 characters long.",
                },
              }}
              render={({ field }) => (
                <div>
                  <FormInput
                    type="text"
                    label="Username"
                    name="username"
                    size="small"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {errors.username && (
                    <Text className="text-red-500 mt-3">
                      {errors.username.message}
                    </Text>
                  )}
                </div>
              )}
            />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: "Password is required!",
                pattern: {
                  value: /^(?=.*[A-Z]).{8,}$/,
                  message:
                    "At least one uppercase letter and be at least 8 characters long",
                },
              }}
              render={({ field }) => (
                <div>
                  <FormInput
                    type="password"
                    label="Password"
                    name="password"
                    size="small"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {errors.password && (
                    <Text className="text-red-500 mt-3">
                      {errors.password.message}
                    </Text>
                  )}
                </div>
              )}
            />
            <Button className="max-w-sm" onClick={handleSubmit(onSubmit)}>
              Sign Up
            </Button>
            <div id="signUpDiv" className="object-cover"></div>
          </form>

          <div className="mt-6 text-center max-w-sm">
            <Text variant="text-sm" className="text-gray-300">
              Already have an account?
            </Text>
            <Text
              variant="text-sm"
              className="text-[#EF5DA8]"
              noLink={false}
              href="/login"
            >
              {" "}
              Sign in
            </Text>
          </div>
        </div>
      {/* </div> */}
      </>

      // <div className="w-1/2 object-cover">
      //   <img
      //     className="w-full h-full object-cover"
      //     src={require("../assets/loginside.png")}
      //     alt="login"
      //   />
      // </div>
    // </div>
  );
};

export default Signup;
