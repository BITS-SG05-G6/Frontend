import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
// import Select from "react-select";
import Text from "../../components/common/Text";
import { AuthContext } from "../../context/authContext";
import { ExchangeContext } from "../../context/exchangeContext";
import FormInput from "../../components/common/FormInput";
import ConfirmationModal from "../../components/common/ConfirmationModal";
import * as axiosInstance from "../../services/auth";
import { currencyList } from "../../components/svgs/OptionList";
import Select from "../../components/common/Select";

function UserProfile() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    mode: "onChange",
  });
  const { userInfo, fetchData } = useContext(AuthContext);
  const password = watch("password");
  const { rate } = useContext(ExchangeContext);
  // console.log(rate);
  const onSubmit = async (data, e) => {
    const { username, password, baseCurrency } = data;
    setValue("rate", rate);
    // Compare each field in data with the corresponding field in userInfo
    const updatedData = Object.keys({
      username,
      password,
      baseCurrency,
    }).reduce((acc, key) => {
      // console.log(data[key] !== userInfo[key]);
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
    // console.log(data);

    // Handle the form submission logic with updatedData
    await axiosInstance
      .updateProfile(updatedData.username, updatedData.baseCurrency, updatedData.password, rate)
      .then((res) => {
        console.log(res);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="ml-10 w-4/6 px-10 py-10">
      {/* Title */}
      <div className="mb-10 flex flex-col">
        <span className="text-xl font-semibold">Account Information</span>
        <span className="text-sm font-normal text-[#929EAE]">
          Update your account information
        </span>
      </div>

      {/* Form */}
      <div>
        <form>
          {/* Title & Edit Button */}
          <div className="mb-9 flex flex-row justify-between">
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
                defaultValue={userInfo.username}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    label={"Username"}
                    size={"noMaxWidth"}
                    disabled
                  />
                )}
              />

              <Controller
                name="baseCurrency"
                control={control}
                defaultValue={userInfo.baseCurrency}
                render={({ field }) => (
                  <div>
                    <Select
                      label="Currency"
                      name="currency"
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                      }}
                      options={currencyList}
                      placeholder="Please choose a currency"
                      none={false}
                      labelType="up"
                    />
                    {errors.currency && (
                      <Text className="mt-3 text-red-500">
                        {errors.currency.message}
                      </Text>
                    )}
                  </div>
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <FormInput
                    {...field}
                    type="password"
                    label={"New Password"}
                    size={"noMaxWidth"}
                  />
                )}
              />

              {password && (
                <Controller
                  name="confirmPassword"
                  control={control}
                  defaultValue={""}
                  rules={{
                    required: "Confirm password is required",
                    validate: (value) =>
                      value === password || "Password does not match",
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
                        <Text className="mt-3 text-red-500">
                          {errors.confirmPassword.message}
                        </Text>
                      )}
                    </div>
                  )}
                />
              )}
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
