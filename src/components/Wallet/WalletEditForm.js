import React, { useContext, useState } from "react";
import Button from "../common/Button";
import Text from "../common/Text";
import FormInput from "../common/FormInput";
import { Controller, useForm } from "react-hook-form";
import Textarea from "../common/Textarea";
import ColorPicker from "../common/ColorPicker";
import IconPicker from "../common/IconPicker";
import * as axiosInstance from "../../services/wallet";
import { WalletContext } from "../../context/walletContext";
import Select from "../common/Select";
import { currencyList } from "../svgs/OptionList";
const WalletForm = ({
  id,
  name,
  amount,
  color,
  icon,
  description,
  currency,
  children,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { handleUpdateWallet } = useContext(WalletContext);

  // Fix this update wallet, not create new
  const onSubmit = async (d) => {
    await axiosInstance
      .createWallet(
        d.name,
        d.amount,
        d.color,
        d.icon,
        d.description,
        d.currency
      )
      .then((res) => {
        document.getElementById("my_modal_3").close();
        handleUpdateWallet();
        console.log(res);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* <Button
        onClick={() => document.getElementById("my_modal_3").showModal()}
        variant="card"
        className="h-80 w-full"
      >
        <Text variant="text-md" weight="bold">
          + Add New Wallet
        </Text>
      </Button> */}
      <div onClick={() => document.getElementById(`edit_${id}`).showModal()}>
        {children}
      </div>

      <dialog id={`edit_${id}`} className="modal">
        <div className="modal-box flex flex-col justify-center w-full overflow-visible">
          <Text variant="text-xl" weight="semibold" className="text-center">
            Edit {name} Wallet
          </Text>
          <div className="modal-action mx-0 block w-full overflow-visible">
            <form method="dialog" className="flex flex-col gap-4">
              <Button variant="close" className="text-black" size="fix">
                x
              </Button>

              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <FormInput
                      type="text"
                      label="Name"
                      name="name"
                      value={field.value}
                      placeholder={name}
                      onChange={(e) => field.onChange(e.target.value)}
                      labelType="side"
                    />
                    {errors.name && (
                      <Text className="text-red-500 px-32 mt-3">
                        {errors.name.message}
                      </Text>
                    )}
                  </div>
                )}
              />

              <Controller
                name="currency"
                control={control}
                render={({ field }) => (
                  <div>
                    <Select
                      label="Currency"
                      name="currency"
                      value={field.value}
                      placeholder={currency}
                      onChange={(e) => field.onChange(e.target.value)}
                      options={currencyList}
                      // placeholder="Please choose a currency"
                      none={false}
                    />
                    {errors.currency && (
                      <Text className="text-red-500 px-32 mt-3">
                        {errors.currency.message}
                      </Text>
                    )}
                  </div>
                )}
              />

              <Controller
                name="amount"
                control={control}
                // rules={{
                //   pattern: {
                //     value: /^([^.0-]\d+|\d)$/,
                //     message: "It must be a positive number",
                //   },
                // }}
                render={({ field }) => (
                  <div>
                    <FormInput
                      type="number"
                      label="Balance"
                      name="amount"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      labelType="side"
                      placeholder={amount}
                    />
                    {errors.amount && (
                      <Text className="text-red-500 px-32 mt-3">
                        {errors.amount.message}
                      </Text>
                    )}
                  </div>
                )}
              />
              <Controller
                name="color"
                control={control}
                defaultValue={color}
                render={({ field }) => (
                  <div>
                    <ColorPicker
                      label="Color"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    {errors.type && (
                      <Text className="text-red-500 px-32 mt-3">
                        {errors.type.message}
                      </Text>
                    )}
                  </div>
                )}
              />

              <Controller
                name="icon"
                control={control}
                defaultValue={icon}
                render={({ field }) => (
                  <div>
                    <IconPicker
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    {errors.type && (
                      <Text className="text-red-500 px-32 mt-3">
                        {errors.type.message}
                      </Text>
                    )}
                  </div>
                )}
              />
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <Textarea
                      label="Description"
                      onChange={(e) => field.onChange(e.target.value)}
                      value={field.value}
                      placeholder={description}
                    />
                  </div>
                )}
              />

              <div className="flex justify-around">
                <Button size="xl" onClick={handleSubmit(onSubmit)}>
                  Save
                </Button>
                {/* <Button variant="roundOutline" size="xl">
                  De
                </Button> */}
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default WalletForm;
