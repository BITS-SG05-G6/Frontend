import React, { useContext, useState } from "react";
import Button from "../common/Button";
import Text from "../common/Text";
import FormInput from "../common/FormInput";
import { Controller, useForm } from "react-hook-form";
import Textarea from "../common/Textarea";
import * as axiosInstance from "../../services/category";
import ColorPicker from "../common/ColorPicker";
import IconPicker from "../common/IconPicker";
import { NotificationContext } from "../../context/notificationContext";
import { CategoryContext } from "../../context/categoryContext";

const CategoryEditForm = ({ category }) => {
  const { isUpdate, setIsUpdate } = useContext(CategoryContext);
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const {
    setIsMessageVisible,
    isMessageVisible,
    message,
    setMessage,
    setNotiType,
  } = useContext(NotificationContext);

  const [isHovered, setIsHovered] = useState(false);

  const onSubmit = async (d) => {
    console.log(d);
    await axiosInstance
      .updateCategory(
        category.id,
        d.name,
        d.type,
        d.color,
        d.icon,
        d.description,
        d.budget
      )
      .then((res) => {
        console.log(res);
        reset();
        document.getElementById(`${category.id}edit`).close();
        setIsUpdate(!isUpdate);
        setNotiType("success");
        setMessage(res);
        setIsMessageVisible(true);

        setTimeout(() => {
          setMessage(null);
          setIsMessageVisible(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
      });
  };

  const openModal = () => {
    document.getElementById(`${category.id}edit`).showModal();

    // Set value for form
    setValue("amount", category.amount);
    setValue("budget", category.budget);
    setValue("color", category.color);
    setValue("icon", category.icon);
    setValue("name", category.name);
    setValue("type", category.type);
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
      <dialog id={`${category.id}edit`} className="modal overflow-visible">
        <div className="modal-box flex flex-col justify-center w-full overflow-visible">
          <Text variant="text-xl" weight="semibold" className="text-center">
            Edit {category && category.name}
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
              {/* Budget field */}
              {/* {categoryType === "Income" ? null : ( */}
              <Controller
                name="budget"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <FormInput
                      type="text"
                      label="Budget"
                      name="budget"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      labelType="side"
                    />
                  </div>
                )}
              />
              {/* )} */}
              <Controller
                name="type"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <div>
                    <FormInput
                      label="Type"
                      name="type"
                      value={category && category.type}
                      onChange={(e) => field.onChange(e.target.value)}
                      disabled
                      // options={types}
                      labelType="side"
                    />
                    {/* <FormInput /> */}
                    {errors.type && (
                      <Text className="text-red-500 px-32 mt-3">
                        {errors.type.message}
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
                    />
                  </div>
                )}
              />

              <div className="flex justify-around">
                <Button
                  size="xl"
                  variant="roundOutline"
                  onClick={handleSubmit(onSubmit)}
                >
                  Save
                </Button>

                <Button size="xl">Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CategoryEditForm;
