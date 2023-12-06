import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "../components/common/Button";
import FormInput from "../components/common/FormInput";
import Text from "../components/common/Text";

const Signup = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const onSubmit = (d) => {
    console.log(d);
  };

  return (
    <div className="flex justify-between h-screen">
      <div className="w-1/2 flex justify-center items-center">
        <Text
          className="absolute top-20 left-20 text-[#EF5DA8]"
          variant="text-xl"
          weight="bold"
        >
          Wise
          <Text className="text-black" variant="text-xl" weight="bold">
            Wallet
          </Text>
        </Text>
        <div className="flex flex-col w-1/2">
          <div className="flex flex-col gap-3 mb-12">
            <Text variant="text-2xl" weight="bold">
              Create new account
            </Text>
            <Text>Welcome! Please enter your details</Text>
          </div>

          <form className="flex flex-col gap-6 max-w-sm">
            <Controller
              name="fullname"
              control={control}
              defaultValue=""
              rules={{ required: "Full Name is required!" }}
              render={({ field }) => (
                <div>
                  <FormInput
                    type="text"
                    label="Full Name"
                    name="fullname"
                    size="small"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {errors.fullname && (
                    <Text className="text-red-500 mt-3">
                      {errors.fullname.message}
                    </Text>
                  )}
                </div>
              )}
            />

            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: "Email is required!" }}
              render={({ field }) => (
                <div>
                  <FormInput
                    type="text"
                    label="Email"
                    name="email"
                    size="small"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  {errors.email && (
                    <Text className="text-red-500 mt-3">
                      {errors.email.message}
                    </Text>
                  )}
                </div>
              )}
            />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: "Password is required!" }}
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
              Sign In
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
      </div>

      <div className="w-1/2 object-cover">
        <img
          className="w-full h-full object-cover"
          src={require("../assets/loginside.png")}
          alt="image"
        ></img>
      </div>
    </div>
  );
};

export default Signup;
