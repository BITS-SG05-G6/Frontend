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

const WalletEditForm = ({ wallet }) => {
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const { handleUpdateWallet } = useContext(WalletContext);
  const { setIsMessageVisible, setMessage, setNotiType } =
    useContext(NotificationContext);

  const onSubmit = async (d) => {
    console.log(d);
    // Axios Update Not Create
    await axiosInstance
      .updateWallet(
        wallet._id,
        d.name,
        d.amount,
        d.color,
        d.icon,
        d.description,
        d.exchangeAmount
      )
      .then((res) => {
        document.getElementById(`${wallet._id}edit`).close();
        handleUpdateWallet();
        console.log(res);
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

  const openModal = () => {
    document.getElementById(`${wallet._id}edit`).showModal();
    // console.log(`${wallet._id}edit`);
    setValue("name", wallet.name);
    setValue("amount", wallet.amount);
    setValue("color", wallet.color);
    setValue("icon", wallet.icon);
    setValue("description", wallet.description);
  };

  return (
    <>
      <Button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          openModal();
        }}
        variant="blueButton"
        size="lg"
      >
        Edit
      </Button>

      <dialog id={`${wallet._id}edit`} className="modal">
        <div className="modal-box flex flex-col justify-center w-full overflow-visible">
          <Text variant="text-xl" weight="semibold" className="text-center">
            Edit {wallet && wallet.name}
          </Text>
          <div className="modal-action mx-0 block w-full overflow-visible">
            <form method="dialog" className="flex flex-col gap-4">
              <Button variant="close" className="text-black" size="fix">
                x
              </Button>

              <Controller
                name="name"
                control={control}
                // defaultValue={wallet.name}
                render={({ field }) => (
                  <div>
                    <FormInput
                      type="text"
                      label="Name"
                      name="name"
                      //   placeholder={wallet.name}
                      value={field.value}
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
                name="amount"
                control={control}
                // defaultValue={wallet.amount}
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
                      //   placeholder={wallet.amount}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      labelType="side"
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
                defaultValue={""}
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
                // defaultValue={wallet.icon}
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
                // defaultValue={wallet.description ? wallet.description : "Write description"}
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

export default WalletEditForm;
