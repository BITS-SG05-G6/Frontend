import React, { useContext, useState } from "react";
import Button from "../common/Button";
import Text from "../common/Text";
import FormInput from "../common/FormInput";
import { Controller, useForm } from "react-hook-form";
import Select from "../common/Select";
import Textarea from "../common/Textarea";
import * as axiosInstance from "../../services/transactions";
import { CategoryContext } from "../../context/categoryContext";
import { WalletContext } from "../../context/walletContext";
import { TransactionContext } from "../../context/transactionContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconList } from "../svgs/IconList";
import { transactionType, currencyList } from "../svgs/OptionList";

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
    mode: "onChange",
  });
  // const { currency, setCurrency } = useState("123");
  const { type, setType, categories } = useContext(CategoryContext);
  const selectedCategory = watch("category");
  const selectedWallet = watch("wallet");
  const { wallets, currency, setCurrency } = useContext(WalletContext);
  const [isHovered, setIsHovered] = useState(false);
  const { handleUpdateTransaction } = useContext(TransactionContext);
  const onSubmit = async (d) => {
    const categoryType = category
      ? category.type
      : selectedCategory === "none" || selectedCategory === undefined
      ? d.type
      : type;
      const walletCurrency = wallet
      ? wallet.type
      : selectedWallet === "none" || selectedWallet === undefined
      ? d.currency
      : currency;
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
        walletValue,
        walletCurrency
      )
      .then((res) => {
        document
          .getElementById(
            category ? category.id : wallet ? wallet.id : "my_modal_1"
          )
          .close();
        handleUpdateTransaction();
        console.log(res);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openModal = () => {
    document
      .getElementById(
        category ? category.id : wallet ? wallet.id : "my_modal_1"
      )
      .showModal();
  };

  return (
    <>
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => openModal()}
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
      <dialog
        id={category ? category.id : wallet ? wallet.id : "my_modal_1"}
        className="modal"
      >
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

              {wallet ? (
                <FormInput
                  label="Wallet"
                  name="wallet"
                  value={wallet.name}
                  disabled
                  labelType="side"
                />
              ) : (
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
                          onChange={(e) => {
                            field.onChange(e.target.value);
                            wallets.map((wallet) =>
                              wallet.id === e.target.value
                                ? setCurrency(wallet.currency)
                                : null
                            );
                          }}
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
                )
              )}

              {wallet ? (
                <FormInput
                  label="Currency"
                  name="currency"
                  value={wallet.currency}
                  disabled
                  labelType="side"
                />
              ) : selectedWallet === undefined || selectedWallet === "none" ? (
                <Controller
                  name="currency"
                  control={control}
                  rules={{
                    required: "Currency is required!",
                  }}
                  render={({ field }) => (
                    <div>
                      <Select
                        label="Currency"
                        name="currency"
                        value={field.value}
                        onChange={(e) => {
                          field.onChange(e.target.value);
                        }}
                        options={currencyList}
                        placeholder="Please choose a currency"
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
              ) : (
                <FormInput
                  label="Currency"
                  name="currency"
                  value={currency}
                  disabled
                  labelType="side"
                />
              )}

              {category ? (
                <FormInput
                  label="Category"
                  name="category"
                  value={category.name}
                  disabled
                  labelType="side"
                />
              ) : (
                categories && (
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
                )
              )}

              {category ? (
                <FormInput
                  label="Type"
                  name="categoryType"
                  value={category.type}
                  disabled
                  labelType="side"
                />
              ) : selectedCategory === undefined ||
                selectedCategory === "none" ? (
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
                        options={transactionType}
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
