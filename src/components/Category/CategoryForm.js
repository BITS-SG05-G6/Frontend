import React, { useState } from "react";
import Button from "../common/Button";
import Text from "../common/Text";
import FormInput from "../common/FormInput";
import { Controller, useForm } from "react-hook-form";
import Select from "../common/Select";
import Textarea from "../common/Textarea";
import Icon from "../common/Icon";
import { CreateTransactionIcon } from "../svgs/sidebarIcons";
import * as axiosInstance from "../../services/transactions";
import ColorPicker from "../common/ColorPicker";

// import es from 'date-fns/locale/es'
// registerLocale('es', es);
const CategoryForm = ({ children }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [isHovered, setIsHovered] = useState(false);

  const onSubmit = async (d) => {
    // await axiosInstance
    //   .createTransaction(d.amount, d.description, d.date, "Normal", "Expense", d.title)
    //   .then((res) => {
    //     console.log(res);
    //     reset();
    //     document.getElementById("my_modal_1").close();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    console.log(d);
  };

  const options = [
    {
      name: "Wallet 1",
      id: "1",
    },
    {
      name: "Wallet 2",
      id: "2",
    },
    {
      name: "Wallet 3",
      id: "3",
    },
  ];

  const categories = [
    {
      name: "Category 1",
      id: "1",
    },
    {
      name: "Category 2",
      id: "2",
    },
    {
      name: "Category 3",
      id: "3",
    },
  ];

  const type = [
    {
      id: "Expense",
      name: "Expense"
    }, 
    {
      id: "Income",
      name: "Income"
    }
  ]

  return (
    <>
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <Icon
          svg={<CreateTransactionIcon />}
          isHovered={isHovered}
          hoverColor="#EF5DA8"
          fillColor="#FFFFFF"
        />

        <Text variant="text-sm" weight="bold">
          Create Category
        </Text>
      </Button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box flex flex-col justify-center w-full">
          <Text variant="text-xl" weight="semibold" className="text-center">
            Add Category
          </Text>
          <div className="modal-action mx-0 block w-full">
            <form method="dialog" className="flex flex-col gap-4">
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
                      <Text className="text-red-500 px-32 mt-3">
                        {errors.name.message}
                      </Text>
                    )}
                  </div>
                )}
              />

              <Controller
                name="type"
                control={control}
                defaultValue={type[0].id}
                render={({ field }) => (
                  <div>
                    <Select
                      label="Type"
                      name="type"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      options={type}
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
