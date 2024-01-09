import React, { useContext, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Button from "../../components/common/Button";
import FormInput from "../../components/common/FormInput";
import Text from "../../components/common/Text";
import Cookies from "js-cookie";
import * as axiosInstance from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { fetchData } = useContext(AuthContext);

  const navigate = useNavigate();
  const [loginError, setLoginError] = React.useState("");
  const [isErrorVisible, setIsErrorVisible] = React.useState(false);

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

  const onSubmit = async (d) => {
    await axiosInstance
      .signin(d.username, d.password)
      .then((res) => {
        // console.log(res);
        Cookies.set("token", res.token);
        navigate("/dashboard");
        fetchData();
      })
      .catch((err) => {
        console.log(err.response.data.error);

        setLoginError(err.response.data.error.message);
        setIsErrorVisible(true);

        // Hide the error after 3 seconds
        setTimeout(() => {
          setIsErrorVisible(false);
        }, 3000);
      });
  };

  return (
    // 
    <>
      <div className="flex flex-col w-1/2">
        <div className="flex flex-col gap-3 mb-12">
          <Text variant="text-2xl" weight="bold">
            Welcome back
          </Text>
          <Text>Welcome back! Please enter your details</Text>
        </div>
        {/* Alert */}
        {isErrorVisible && (
          <div
            role="alert"
            className="alert alert-error absolute z-50 w-[500px] top-8 right-8"
          >
            <button onClick={() => setIsErrorVisible(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <span>{loginError}</span>
          </div>
        )}
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
          {/* {loginError && <div className="text-red-500">{loginError}</div>} */}

          <Button className="max-w-sm" onClick={handleSubmit(onSubmit)}>
            Sign In
          </Button>
          <div id="signUpDiv" className="object-cover"></div>
        </form>

        <div className="mt-6 text-center max-w-sm">
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
    </ >

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
