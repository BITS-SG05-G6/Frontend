import React, { useContext, useEffect } from "react";
import Button from "../common/Button";
import Text from "../common/Text";
import FormInput from "../common/FormInput";
import { Controller, useForm } from "react-hook-form";
import Textarea from "../common/Textarea";
import ColorPicker from "../common/ColorPicker";
import * as axiosInstance from "../../services/savingGoal";
import { SavingContext } from "../../context/savingContext";

function GoalEditForm({ goal, updateGoalDetails }) {
  const { handleUpdateGoal } = useContext(SavingContext);

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (d) => {
    // console.log(d);
    // console.log(goal._id);
    const updatedData = d;

    await axiosInstance
      .updateSavingGoal(goal._id, updatedData)
      .then((res) => {
        document.getElementById(`${goal._id}edit`).close();
        // handleUpdateGoal();
        console.log(res);
        updateGoalDetails();
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openModal = () => {
    document.getElementById(`${goal._id}edit`).showModal();

    // Set Value for form
    setValue("name", goal.name);
    setValue("description", goal.description);
    setValue("color", goal.color);
    setValue("target", goal.target);
    setValue("startDate", goal.startDate.substring(0, 10));
    if (goal.endDate !== undefined) {
      setValue("endDate", goal.endDate.substring(0, 10));
    }
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

      <dialog id={`${goal._id}edit`} className="modal">
        <div className="modal-box flex flex-col justify-center w-full overflow-visible">
          <Text variant="text-xl" weight="semibold" className="text-center">
            Edit {goal && goal.name} Goal
          </Text>
          <div className="modal-action mx-0 block w-full overflow-visible">
            <form
              method="dialog"
              className="flex flex-col gap-4 justify-start text-end"
            >
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
                rules={{
                  //   required: "Target is required!",
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
                defaultValue=""
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
                defaultValue={new Date(goal.startDate)}
                // rules={{ required: "Date is required!" }}
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
                defaultValue=""
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
}

export default GoalEditForm;
