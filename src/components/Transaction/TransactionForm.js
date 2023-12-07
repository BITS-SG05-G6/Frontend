import React, { useState } from "react";
import Button from "../common/Button";
import Text from "../common/Text";
import FormInput from "../common/FormInput";
import { Controller, useForm } from "react-hook-form";
import Select from "../common/Select";
import Textarea from "../common/Textarea";
import Icon from "../common/Icon";
import { CreateTransactionIcon } from "../svgs/sidebarIcons";

// import es from 'date-fns/locale/es'
// registerLocale('es', es);
const TransactionForm = ({ children }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isHovered, setIsHovered] = useState(false);

  const onSubmit = (d) => {
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

  return (
    <>
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <Icon
          svg={<CreateTransactionIcon />}
          isHovered={isHovered}
          hoverColor="#EF5DA8"
          fillColor="#FFFFFF"
        />

        <Text variant="text-sm" weight="bold">Create Transaction</Text>
      </Button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col justify-center w-full">
          <Text variant="text-xl" weight="semibold" className="text-center">
            Add Transaction
          </Text>
          <div className="modal-action mx-0 block w-full">
            <form method="dialog" className="flex flex-col gap-4">
              <Button variant="close" className="text-black" size="fix">
                x
              </Button>

              <Controller
                name="amount"
                control={control}
                defaultValue=""
                rules={{ required: "Amount is required!" }}
                render={({ field }) => (
                  <div>
                    <FormInput
                      type="number"
                      label="Amount"
                      name="amount"
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
                name="category"
                control={control}
                defaultValue={categories[0].id}
                render={({ field }) => (
                  <div>
                    <Select
                      label="Category"
                      name="category"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      options={categories}
                    />
                    {errors.category && (
                      <Text className="text-red-500 px-32 mt-3">
                        {errors.category.message}
                      </Text>
                    )}
                  </div>
                )}
              />

              <Controller
                name="wallet"
                control={control}
                defaultValue={options[0].id}
                render={({ field }) => (
                  <div>
                    <Select
                      label="Wallet"
                      name="wallet"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      options={options}
                    />
                    {errors.wallet && (
                      <Text className="text-red-500 px-32 mt-3">
                        {errors.wallet.message}
                      </Text>
                    )}
                  </div>
                )}
              />

              <Controller
                name="date"
                control={control}
                defaultValue={new Date().toISOString().substr(0, 10)}
                render={({ field }) => (
                  <div>
                    <FormInput
                      type="date"
                      label="Date"
                      name="date"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      labelType="side"
                    />
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

export default TransactionForm;
