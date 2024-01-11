import React, { useContext, useState } from "react";
import Button from "../common/Button";
import Text from "../common/Text";
import FormInput from "../common/FormInput";
import { Controller, useForm } from "react-hook-form";
import Textarea from "../common/Textarea";
import ColorPicker from "../common/ColorPicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconList } from "../svgs/IconList";
import * as axiosInstance from "../../services/savingGoal";
import { SavingContext } from "../../context/savingContext";
import { NotificationContext } from "../../context/notificationContext";

function GoalForm({ buttonName, icon }) {
  const { handleUpdateGoal } = useContext(SavingContext);
  const { setIsMessageVisible, setMessage, setNotiType } =
    useContext(NotificationContext);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (d) => {
    console.log(d);
    await axiosInstance
      .createSavingGoal(
        d.name,
        d.target,
        d.color,
        d.startDate,
        d.endDate,
        d.description
      )
      .then((res) => {
        document.getElementById("my_modal_4").close();
        handleUpdateGoal();
        // console.log(res);
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
    document
      .getElementById(
         "my_modal_4"
      )
      .showModal();
  };

  const closeModal = () => {
    document
      .getElementById(
        "my_modal_4"
      )
      .close();
    reset();
  };

  return (
    <>
      <Button
        onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            openModal();
        }
        }
        variant="primary"
      >
        {icon
          ? IconList.map((i) =>
              i.value === icon ? <FontAwesomeIcon icon={i.icon} /> : null
            )
          : null}
        <Text variant="text-sm" weight="bold">
          {buttonName}
        </Text>
      </Button>

      <dialog id="my_modal_4" className="modal">
        <div className="modal-box flex flex-col justify-center w-full overflow-visible">
          <Text variant="text-xl" weight="semibold" className="text-center">
            New Goal
          </Text>
          <div className="modal-action mx-0 block w-full overflow-visible">
            <form
              method="dialog"
              className="flex flex-col gap-4 justify-start text-end"
            >
              <Button variant="close" className="text-black" size="fix" onClick={() => closeModal()}>
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
                      <Text className="text-red-500 text-end mt-3">
                        {errors.name.message}
                      </Text>
                    )}
                  </div>
                )}
              />

              <Controller
                name="target"
                control={control}
                defaultValue=""
                rules={{
                  required: "Target is required!",
                  pattern: {
                    value: /^([^.0-]\d+|\d)$/,
                    message: "It must be a positive number",
                  },
                }}
                render={({ field }) => (
                    <div>
                      <FormInput
                        type="number"
                        label="Target"
                        name="target"
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        labelType="side"
                        placeholder="e.g: 0"
                      />
                      {errors.target && (
                        <Text className="text-red-500 mt-3">
                          {errors.target.message}
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
                      <Text className="text-red-500 px-32 mt-3">
                        {errors.type.message}
                      </Text>
                    )}
                  </div>
                )}
              />

              <Controller
                name="startDate"
                control={control}
                defaultValue={new Date().toISOString().substr(0, 10)}
                rules={{ required: "Date is required!" }}
                render={({ field }) => (
                  <div>
                    <FormInput
                      type="date"
                      label="Start Date"
                      name="startDate"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      labelType="side"
                    />
                    {errors.date && (
                      <Text className="text-red-500 px-36 mt-3">
                        {errors.date.message}
                      </Text>
                    )}
                  </div>
                )}
              />

              <Controller
                name="endDate"
                control={control}
                // defaultValue={new Date().toISOString()}
                // rules={{ required: "Date is required!" }}
                render={({ field }) => (
                  <div>
                    <FormInput
                      type="date"
                      label="End Date"
                      name="endDate"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      labelType="side"
                    />
                    {errors.date && (
                      <Text className="text-red-500 px-36 mt-3">
                        {errors.date.message}
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
                <Button variant="roundOutline" size="xl" onClick={() => closeModal()}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default GoalForm;
