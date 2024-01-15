import React, { useContext } from "react";
import Button from "../common/Button";
import Text from "../common/Text";
import FormInput from "../common/FormInput";
import { Controller, useForm } from "react-hook-form";
import Textarea from "../common/Textarea";
import ColorPicker from "../common/ColorPicker";
import IconPicker from "../common/IconPicker";
import * as axiosInstance from "../../services/wallet";
import { WalletContext } from "../../context/walletContext";
import { NotificationContext } from "../../context/notificationContext";

const WalletForm = ({ children }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { handleUpdateWallet } = useContext(WalletContext);
  const { setIsMessageVisible, setMessage, setNotiType } =
    useContext(NotificationContext);

  const onSubmit = async (d) => {
    await axiosInstance
      .createWallet(
        d.name,
        d.amount,
        d.color,
        d.icon,
        d.description,
        d.exchangeAmount,
      )
      .then((res) => {
        document.getElementById("my_modal_3").close();
        handleUpdateWallet();
        setMessage(res);
        setIsMessageVisible(true);
        setNotiType("success");

        setTimeout(() => {
          setMessage(null);
          setIsMessageVisible(false);
        }, 3000);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Button
        onClick={() => document.getElementById("my_modal_3").showModal()}
        variant="card"
        className="h-80 w-72 xl:w-64"
      >
        <Text variant="text-md" weight="bold">
          + Add New Wallet
        </Text>
      </Button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box flex w-full flex-col justify-center overflow-visible">
          <Text variant="text-xl" weight="semibold" className="text-center">
            Add New Wallet
          </Text>
          <div className="modal-action mx-0 block w-full overflow-visible">
            <form
              method="dialog"
              className="flex flex-col justify-start gap-4 text-end"
            >
              <Button variant="close" className="text-black" size="fix">
                x
              </Button>

              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{
                  required: "Name is required!",
                }}
                render={({ field }) => (
                  <div>
                    <FormInput
                      type="text"
                      label="Name"
                      name="name"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      labelType="side"
                    />
                    {errors.name && (
                      <Text className="mt-3 text-red-500">
                        {errors.name.message}
                      </Text>
                    )}
                  </div>
                )}
              />

              <Controller
                name="amount"
                control={control}
                rules={{
                  pattern: {
                    value: /^([^.0-]\d+|\d)$/,
                    message: "It must be a positive number",
                  },
                }}
                render={({ field }) => (
                  <div>
                    <FormInput
                      type="number"
                      label="Balance"
                      name="amount"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      labelType="side"
                      placeholder="e.g: 0"
                    />
                    {errors.amount && (
                      <Text className="mt-3 px-32 text-red-500">
                        {errors.amount.message}
                      </Text>
                    )}
                  </div>
                )}
              />
              <Controller
                name="color"
                control={control}
                defaultValue="#f5d1e4"
                render={({ field }) => (
                  <div>
                    <ColorPicker
                      label="Color"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    {errors.type && (
                      <Text className="mt-3 px-32 text-red-500">
                        {errors.type.message}
                      </Text>
                    )}
                  </div>
                )}
              />

              <Controller
                name="icon"
                control={control}
                defaultValue="file-invoice-dollar"
                render={({ field }) => (
                  <div>
                    <IconPicker
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    {errors.type && (
                      <Text className="mt-3 px-32 text-red-500">
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
                    />
                  </div>
                )}
              />

              <div className="flex justify-around">
                <Button size="xl" onClick={handleSubmit(onSubmit)}>
                  Save
                </Button>
                <Button variant="roundOutline" size="xl">
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default WalletForm;
