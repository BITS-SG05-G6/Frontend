import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "../../components/common/Button";
import FormInput from "../../components/common/FormInput";
import Text from "../../components/common/Text";
import Alert from "../../components/common/Alert";
import Cookies from "js-cookie";
import * as axiosInstance from "../../services/auth";
import { AuthContext } from "../../context/authContext";
import { NotificationContext } from "../../context/notificationContext";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { fetchData } = useContext(AuthContext);

  const {
    setIsMessageVisible,
    isMessageVisible,
    message,
    setMessage,
    setNotiType,
    notiType,
  } = useContext(NotificationContext);

  const onSubmit = async (d) => {
    // navigate("/");
    await axiosInstance
      .signin(d.username, d.password)
      .then(async (res) => {
        fetchData();
        Cookies.set("token", res.token);
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
      });
  };

  return (
    //
    <>
      <div className="flex w-full flex-col items-center justify-center xl:w-1/2">
        <div className="mb-12 flex flex-col gap-3">
          <Text variant="text-2xl" weight="bold">
            Welcome back
          </Text>
          <Text>Welcome back! Please enter your details</Text>
        </div>
        {/* Alert */}
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
                  <Text className="mt-3 text-red-500">
                    {errors.password.message}
                  </Text>
                )}
              </div>
            )}
          />
          {/* {loginError && <div className="text-red-500">{loginError}</div>} */}

          <Button className="max-w-sm" onClick={handleSubmit(onSubmit)}>
            Sign In
          </Button>
        </form>

        <div className="mt-6 max-w-sm text-center">
          <Text variant="text-sm" className="text-gray-300">
            Don’t have an account?
          </Text>
          <Text
            variant="text-sm"
            className="text-[#EF5DA8]"
            noLink={false}
            href="/signup"
          >
            {" "}
            Sign up for free
          </Text>
        </div>
      </div>
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

export default Login;
