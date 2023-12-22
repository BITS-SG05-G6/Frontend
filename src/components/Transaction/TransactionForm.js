import React, { useContext, useEffect, useState } from "react";
import Button from "../common/Button";
import Text from "../common/Text";
import FormInput from "../common/FormInput";
import { Controller, useForm } from "react-hook-form";
import Select from "../common/Select";
import Textarea from "../common/Textarea";
import Icon from "../common/Icon";
import { CreateTransactionIcon } from "../svgs/sidebarIcons";
import * as axiosInstance from "../../services/transactions";
import { CategoryContext } from "../../context/categoryContext";
import { WalletContext } from "../../context/walletContext";
import { TransactionContext } from "../../context/transactionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import { IconList } from "../svgs/IconList";

const TransactionForm = ({
  children,
  category,
  wallet,
  buttonName,
  className,
  variant,
  icon,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange"
  });
  const { type, setType, categories } = useContext(CategoryContext);
  const selectedCategory = watch("category");
  const { wallets } = useContext(WalletContext);
  const [isHovered, setIsHovered] = useState(false);
  const types = ["Expense", "Income"];
  // console.log(category);
  const [categoryDefault, setCategoryDefault] = useState(null);

  const { handleUpdateTransaction } = useContext(TransactionContext);
  const onSubmit = async (d) => {
    // console.log(d);
    const categoryType = category ? category.type : (selectedCategory === "none" || selectedCategory === undefined) ? d.type : type;
    const categoryValue = category ? category.id : d.category;
    const walletValue = wallet ? wallet.id : d.wallet;
    await axiosInstance
      .createTransaction(
        d.amount,
        d.description,
        d.date,
        "Normal",
        categoryType,
        d.title,
        categoryValue,
        walletValue
      )
      .then((res) => {
        document.getElementById("my_modal_1").close();
        handleUpdateTransaction();
        console.log(res);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(d);
  };

  const openModal = (c) => {
    document.getElementById("my_modal_1").showModal()
  }


  return (
    <>
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => openModal(category)}
        variant={variant}
        className={className}
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
                name="title"
                control={control}
                defaultValue=""
                rules={{ required: "Title is required!" }}
                render={({ field }) => (
                  <div>
                    <FormInput
                      type="text"
                      label="Title"
                      name="title"
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                      labelType="side"
                    />
                    {errors.title && (
                      <Text className="text-red-500 px-32 mt-3">
                        {errors.title.message}
                      </Text>
                    )}
                  </div>
                )}
              />

              <Controller
                name="amount"
                control={control}
                defaultValue=""
                rules={{
                  required: "Amount is required!",
                  pattern: {
                    value: /^([^.0-]\d+|\d)$/,
                    message: "It must be a positive number",
                  },
                }}
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

              {
               wallets && (
                  <Controller
                    name="wallet"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <Select
                          label="Wallet"
                          name="wallet"
                          value={field.value}
                          onChange={(e) => field.onChange(e.target.value)}
                          options={wallets}
                          placeholder="Please choose a wallet"
                        />
                        {errors.wallet && (
                          <Text className="text-red-500 px-32 mt-3">
                            {errors.wallet.message}
                          </Text>
                        )}
                      </div>
                    )}
                  />
                )}
              
           
              
                {categories && (
                  <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                      <div>
                        <Select
                          label="Category"
                          name="category"
                          value={field.value}
                          onChange={(e) => {
                            field.onChange(e.target.value);
                            categories.map((category) =>
                              category.id === e.target.value
                                ? setType(category.type)
                                : null
                            );
                          }}
                          options={categories}
                          placeholder="Please choose a category"
                        />
                        {errors.category && (
                          <Text className="text-red-500 px-32 mt-3">
                            {errors.category.message}
                          </Text>
                        )}
                      </div>
                    )}
                  />
                )}
              

              
              {(selectedCategory === undefined || selectedCategory === "none") ? (
                <Controller
                  name="type"
                  control={control}
                  rules={{
                    required:
                      selectedCategory === "none" ||
                      selectedCategory === undefined
                        ? "Type is required"
                        : false,
                  }}
                  render={({ field }) => (
                    <div>
                      <Select
                        label="Type"
                        name="type"
                        value={field.value}
                        onChange={(e) => {
                          field.onChange(e.target.value);
                        }}
                        options={types}
                        placeholder="Please choose a type"
                        none={false}
                      />
                      {errors.type && (
                        <Text className="text-red-500 px-32 mt-3">
                          {errors.type.message}
                        </Text>
                      )}
                    </div>
                  )}
                />
              ) : (
                <FormInput
                  label="Type"
                  name="categoryType"
                  value={type}
                  disabled
                  labelType="side"
                />
              )}

              <Controller
                name="date"
                control={control}
                defaultValue={new Date().toISOString().substr(0, 10)}
                rules={{ required: "Date is required!" }}
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
                    {errors.date && (
                      <Text className="text-red-500 px-32 mt-3">
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
