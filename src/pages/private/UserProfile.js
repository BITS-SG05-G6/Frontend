import React, { useContext } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import Select from "react-select";
import Text from "../../components/common/Text";
import { AuthContext } from "../../context/authContext";
import FormInput from "../../components/common/FormInput";
import ConfirmationModal from "../../components/common/ConfirmationModal";

function UserProfile() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const password = useWatch({ control, name: "password" });
  const currency = [
    { value: "VND", label: "VND" },
    { value: "USD", label: "USD" },
  ];
  const { userInfo } = useContext(AuthContext);

  const onSubmit = async (data, e) => {
    const { username, password, baseCurrency } = data;

    // Compare each field in data with the corresponding field in userInfo
    const updatedData = Object.keys({
      username,
      password,
      baseCurrency,
    }).reduce((acc, key) => {
      console.log(data[key] !== userInfo[key]);
      // Check if the field value has changed or is not empty
      if (
        data[key] !== userInfo[key] &&
        data[key] !== "" &&
        data[key] !== undefined
      ) {
        acc[key] = data[key];
      } else {
        acc[key] = userInfo[key];
      }
      return acc;
    }, {});

    if (password !== "") {
      updatedData["password"] = password;
    }

    console.log(updatedData);

    // Handle the form submission logic with updatedData
    // await axiosInstance
    //   .updateProfile(updatedData)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <div className="ml-10 px-10 py-10 w-4/6">
      {/* Title */}
      <div className="flex flex-col mb-10">
        <span className="text-xl font-semibold">Account Information</span>
        <span className="text-sm font-normal text-[#929EAE]">
          Update your account information
        </span>
      </div>

      {/* Form */}
      <div>
        <form>
          {/* Title & Edit Button */}
          <div className="flex flex-row justify-between mb-9">
            <span className="text-lg font-semibold">Personal Information</span>
            {/* <button className="text-lg font-semibold text-[#EF5DA8]">
              Edit
            </button> */}
          </div>
          {/* Form Details */}
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-7">
              <Controller
                name="username"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label={"User Name"}
                    size={"noMaxWidth"}
                    placeholder={userInfo.username}
                  />
                )}
              />
              <Controller
                name="baseCurrency"
                control={control}
                defaultValue={userInfo.baseCurrency}
                render={({ field }) => (
                  <div className="flex flex-col justify-start items-start">
                    <label
                      htmlFor="currency"
                      className="text-sm font-semibold label-text px-1 py-2"
                    >
                      Currency
                    </label>
                    <select
                      {...field}
                      id="currency"
                      className="input input-bordered hover:border-[#7879F1] focus:border-[#7879F1] focus:outline-none px-3 w-full"
                    >
                      <option value="VND">VND</option>
                      <option value="USD">USD</option>
                      {/* Add more currency options as needed */}
                    </select>
                  </div>
                )}
              />
            </div>

            {/* <div className="grid grid-cols-2 gap-7">
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label={"First Name"}
                    size={"noMaxWidth"}
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label={"Last Name"}
                    size={"noMaxWidth"}
                  />
                )}
              />
              <Controller
                name="dob"
                control={control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label={"Date of Birth"}
                    size={"noMaxWidth"}
                  />
                )}
              />
              <Controller
                name="mobileNumber"
                control={control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label={"Mobile Number"}
                    size={"noMaxWidth"}
                  />
                )}
              />
            </div> */}
            {/* <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <FormInput {...field} label={"Email"} size={"noMaxWidth"} />
              )}
            /> */}
            <div className="grid grid-cols-2 gap-7">
              <Controller
                name="password"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    type="password"
                    label={"New Password"}
                    size={"noMaxWidth"}
                  />
                )}
              />
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue={""}
                rules={{
                  validate: (value) =>
                    value === password || "Passwords do not match",
                }}
                render={({ field }) => (
                  <div>
                    <FormInput
                      {...field}
                      type="password"
                      label={"Confirm Password"}
                      size={"noMaxWidth"}
                    />
                    {errors.confirmPassword && (
                      <Text className="text-red-500 mt-3">
                        {errors.confirmPassword.message}
                      </Text>
                    )}
                  </div>
                )}
              />
            </div>
          </div>
          <div className="mt-10">
            <ConfirmationModal
              idModal="test"
              btnName={"Update"}
              btnSize={"xl"}
              btnType={"submit"}
              onSubmit={handleSubmit(onSubmit)}
              message={"Are you sure to update your personal information ?"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
