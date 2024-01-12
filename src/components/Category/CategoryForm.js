import React, { useContext, useState } from "react";
import Button from "../common/Button";
import Text from "../common/Text";
import FormInput from "../common/FormInput";
import { Controller, useForm } from "react-hook-form";
import Textarea from "../common/Textarea";
import * as axiosInstance from "../../services/category";
import ColorPicker from "../common/ColorPicker";
import IconPicker from "../common/IconPicker";
import { CategoryContext } from "../../context/categoryContext";
import { NotificationContext } from "../../context/notificationContext";

const CategoryForm = ({ categoryType }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      type: categoryType,
    },
  });

  const { handleUpdateCategory } = useContext(CategoryContext);
  const { setIsMessageVisible, setMessage, setNotiType } = useContext(NotificationContext);

  const [isHovered, setIsHovered] = useState(false);

  const onSubmit = async (d) => {
    await axiosInstance
      .createCategory(
        d.name,
        categoryType,
        d.color,
        d.icon,
        d.description,
        d.budget
      )
      .then((res) => {
        // console.log(res);
        reset();
        document.getElementById("my_modal_2").close();
        handleUpdateCategory();
        setNotiType("success")
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

  return (
    <>
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => document.getElementById("my_modal_2").showModal()}
        variant="card"
        className="h-80 w-full"
      >
        <Text variant="text-md" weight="bold">
          + Add New Category
        </Text>
      </Button>
      <dialog id="my_modal_2" className="modal overflow-visible">
        <div className="modal-box flex flex-col justify-center w-full overflow-visible">
          <Text variant="text-xl" weight="semibold" className="text-center">
            Add New Category
          </Text>
          <div className="modal-action mx-0 block w-full overflow-visible">
            <form method="dialog" className="flex flex-col gap-4 justify-start text-end">
              <Button variant="close" className="text-black" size="fix">
                x
              </Button>

              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: "Name is required!" }}
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
                      <Text className="text-red-500 mt-3">
                        {errors.name.message}
                      </Text>
                    )}
                  </div>
                )}
              />
              {/* Budget field */}
              {categoryType === "Income" ? null : (
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
              )}
              <Controller
                name="type"
                control={control}
                // defaultValue={type}
                render={({ field }) => (
                  <div>
                    <FormInput
                      label="Type"
                      name="type"
                      value={categoryType}
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

export default CategoryForm;
