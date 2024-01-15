import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/common/Alert";
import Button from "../../components/common/Button";
import FormInput from "../../components/common/FormInput";
import Text from "../../components/common/Text";
import { NotificationContext } from "../../context/notificationContext";
import * as axiosInstance from "../../services/auth";

const Signup = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();
  const {
    setIsMessageVisible,
    isMessageVisible,
    message,
    setMessage,
    setNotiType,
    notiType,
  } = useContext(NotificationContext);

  const onSubmit = async (d) => {
    await axiosInstance
      .signup(d.username, d.password)
      .then((res) => {
        console.log(res);
        navigate("/login");
        setMessage(res);
        setIsMessageVisible(true);
        setNotiType("success");

        setTimeout(() => {
          setMessage(null);
          setIsMessageVisible(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.error.message);
        setIsMessageVisible(true);
        setNotiType("error");
        // Hide the error after 3 seconds
        setTimeout(() => {
          setMessage(null);
          setIsMessageVisible(false);
        }, 3000);
        // setLoginError("Wrong password or username, please try again!");
      });
  };

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center xl:w-1/2 px-4">
        <div className="mb-12 flex flex-col gap-3">
          <Text variant="text-2xl" weight="bold">
            Create new account
          </Text>
          <Text>Welcome! Please enter your details</Text>
        </div>
        {isMessageVisible && <Alert message={message} type={notiType} />}
        <form className="flex w-full max-w-sm flex-col gap-6">
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
                  <Text className="mt-3 text-red-500">
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
                  <Text className="mt-3 text-red-500">
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

        <div className="mt-6 max-w-sm text-center">
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
