import React, { useContext, useEffect } from "react";
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
import { format } from "date-fns";
import { AuthContext } from "../../context/authContext";

const TransactionForm = ({
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
    setValue,
  } = useForm({
    mode: "onChange",
  });
  const { type, setType, categories } = useContext(CategoryContext);
  const { userInfo } = useContext(AuthContext);
  const selectedCategory = watch("category");
  const selectedWallet = watch("wallet");
  const selectedType = watch("type");
  const selectedDate = watch("date");
  const selectedCurrency = watch("currency");
  const selectedAmount = watch("amount");
  const selectedExchangeAmount = watch("exchangeAmount");
  const { wallets } = useContext(WalletContext);
  const { handleUpdateTransaction } = useContext(TransactionContext);
  const categoryType = category
    ? category.type
    : selectedCategory === "none" || selectedCategory === undefined
    ? selectedType
    : type;

  const onSubmit = async (d) => {
    console.log(d);
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
        d.currency,
        d.exchangeAmount
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

  const baseCurrency = "VND";
  const otherCurrency = baseCurrency === "VND" ? "USD" : "VND";

  async function fetchExchange(value) {
    const historicalDate = selectedDate
      ? format(new Date(selectedDate), "yyyy-MM-dd")
      : format(new Date(), "yyyy-MM-dd");
    const base_currency_code =
      selectedCurrency !== baseCurrency ? baseCurrency : otherCurrency;
    const exchangeCurrency =
      selectedCurrency !== baseCurrency ? otherCurrency : baseCurrency;
    const key = "50850783a6e088d72dbdb69c3805a415ddd351cf";
    const apiUrl = `https://api.getgeoapi.com/v2/currency/historical/${historicalDate}?api_key=${key}&from=${exchangeCurrency}&to=${base_currency_code}&amount=${value}&format=json`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    let exchangeAmount;
    if (base_currency_code === "VND") {
      exchangeAmount = Math.floor(data.rates.VND.rate_for_amount);
    } else {
      exchangeAmount = data.rates.USD.rate_for_amount;
    }

    setValue("exchangeAmount", exchangeAmount);
    return exchangeAmount;
  }
  useEffect(() => {
    fetchExchange(selectedAmount);
  }, [
    selectedCurrency,
    setValue,
    selectedDate,
    selectedAmount,
    otherCurrency,
    selectedExchangeAmount,
    selectedWallet,
    selectedType,
  ]);

  const openModal = () => {
    document
      .getElementById(
        category ? category.id : wallet ? wallet.id : "my_modal_1"
      )
      .showModal();
  };

  const closeModal = () => {
    document
      .getElementById(
        category ? category.id : wallet ? wallet.id : "my_modal_1"
      )
      .close();
    reset();
  };

  const validateAmount = async (value) => {
    const exchangeValue = await fetchExchange(value);
    const walletValue = wallets.find((wallet) => wallet.id === selectedWallet);
    if (walletValue && selectedType === "Expense") {
      if (selectedCurrency === userInfo.baseCurrency) {
        return value > walletValue.amount ? "Your wallet is not enough" : true;
      } else {
        return exchangeValue > walletValue.amount
          ? "Your wallet is not enough"
          : true;
      }
    }
    return true;
  };

  return (
    <>
      <Button
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
        <div className="modal-box flex flex-col justify-center w-full overflow-hidden">
          <Text variant="text-xl" weight="semibold" className="text-center">
            Add Transaction
          </Text>
          <div className="modal-action mx-0 block w-full">
            <form method="dialog" className="flex flex-col gap-4">
              <Button
                variant="close"
                onClick={closeModal}
                className="text-black"
                size="fix"
              >
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
                      <Text className="text-red-500 px-36 mt-3">
                        {errors.title.message}
                      </Text>
                    )}
                  </div>
                )}
              />

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
                      <Text className="text-red-500 px-36 mt-3">
                        {errors.date.message}
                      </Text>
                    )}
                  </div>
                )}
              />

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
                          <Text className="text-red-500 px-36 mt-3">
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
                        <Text className="text-red-500 px-36 mt-3">
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
                      <Text className="text-red-500 px-36 mt-3">
                        {errors.currency.message}
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
                  validate: validateAmount,
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
                      <Text className="text-red-500 pl-36 mt-3">
                        {errors.amount.message}
                      </Text>
                    )}
                  </div>
                )}
              />

              {selectedCurrency && selectedCurrency !== baseCurrency ? (
                <Controller
                  name="exchangeAmount"
                  control={control}
                  rules={{
                    required: "Currency is required!",
                  }}
                  render={({ field }) => (
                    <div>
                      <FormInput
                        label="Exchange"
                        name="exchangeAmount"
                        type="number"
                        value={field.value}
                        onChange={(e) => field.onChange(e.target.value)}
                        // placeholder={
                        //   new Intl.NumberFormat("vi-VN").format(field.value) +
                        //   " VND"
                        // }
                        // placeholder={field.value}
                        disabled
                        labelType="side"
                      />
                      {errors.exchangeAmount && (
                        <Text className="text-red-500 px-36 mt-3">
                          {errors.exchangeAmount.message}
                        </Text>
                      )}
                    </div>
                  )}
                />
              ) : null}

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

                <Button size="xl" onClick={closeModal}>
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

export default TransactionForm;
