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
import { transactionType, currencyList } from "../svgs/OptionList";
import { format } from "date-fns";
import { AuthContext } from "../../context/authContext";
import { SavingContext } from "../../context/savingContext";
import { ExchangeContext } from "../../context/exchangeContext";
import { NotificationContext } from "../../context/notificationContext";
import { formatMoney } from "../../utils/formatMoney";

const TransactionEditForm = ({ transaction }) => {
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
  const { setIsMessageVisible, setMessage, setNotiType } =
    useContext(NotificationContext);
  const { userInfo } = useContext(AuthContext);
  const selectedCategory = watch("category");
  const selectedWallet = watch("wallet");
  const selectedType = watch("type");
  const selectedDate = watch("date");
  const selectedCurrency = watch("currency");
  const { wallets } = useContext(WalletContext);
  const { goals } = useContext(SavingContext);
  const { rate, setDate, setBaseCurrency, setExchangeCurrency } =
    useContext(ExchangeContext);
  const { handleUpdateTransaction } = useContext(TransactionContext);

  const categoryType =
    selectedCategory === "none" || selectedCategory === undefined
      ? selectedType
      : type;

  const onSubmit = async (d) => {
    await axiosInstance
      .updateTransaction(
        transaction._id,
        d.title,
        d.date,
        d.category,
        categoryType,
        d.wallet,
        d.currency,
        d.amount,
        d.exchangeAmount,
        d.description,
        d.goal
      )
      .then((res) => {
        console.log(res);
        closeModal();
        handleUpdateTransaction();
        setMessage(res.message);
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

  const otherCurrency = userInfo.baseCurrency === "VND" ? "USD" : "VND";

  useEffect(() => {
    setDate(
      selectedDate
        ? format(new Date(selectedDate), "yyyy-MM-dd")
        : format(new Date(), "yyyy-MM-dd")
    );
    setBaseCurrency(
      selectedCurrency !== userInfo.baseCurrency
        ? userInfo.baseCurrency
        : otherCurrency
    );
    setExchangeCurrency(
      selectedCurrency !== userInfo.baseCurrency
        ? otherCurrency
        : userInfo.baseCurrency
    );
    if (selectedType === "Saving") {
      setValue("currency", userInfo.baseCurrency);
    }
  }, [
    selectedCurrency,
    setValue,
    selectedDate,
    otherCurrency,
    userInfo.baseCurrency,
    setBaseCurrency,
    setDate,
    setExchangeCurrency,
    rate,
    selectedType,
    reset,
  ]);

  const openModal = () => {
    document.getElementById(transaction._id).showModal();
    setValue("title", transaction.title);
    setValue("date", new Date(transaction.date).toISOString().substr(0, 10));
    setValue("category", transaction.categoryID);
    setValue("type", transaction.type);
    setValue("wallet", transaction.walletID);
    setValue("currency", transaction.currency);
    setValue("amount", transaction.amount);
    setValue("description", transaction.description);
  };

  const closeModal = () => {
    document.getElementById(transaction._id).close();
    reset();
  };

  const validateAmount = async (value) => {
    let exchangeValue;
    if (selectedCurrency === "VND") {
      exchangeValue = parseFloat((value / rate).toFixed(2));
    } else {
      exchangeValue = value * rate;
    }
    setValue("exchangeAmount", exchangeValue);

    const walletValue = wallets.find((wallet) => wallet._id === selectedWallet);
    if (walletValue && selectedType === "Expense") {
      if (selectedCurrency === userInfo.baseCurrency) {
        return value > walletValue.amount
          ? `Your wallet is not enough. Balance: ${walletValue.amount} ${userInfo.baseCurrency}`
          : true;
      } else {
        return exchangeValue > walletValue.amount
          ? `Your wallet is not enough. Balance: ${walletValue.amount} ${userInfo.baseCurrency}`
          : true;
      }
    }
    return true;
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
      >
        <Text variant="text-sm" weight="bold">
          Edit
        </Text>
      </Button>
      <dialog id={transaction._id} className="modal">
        <div className="modal-box flex flex-col justify-center w-full">
          <Text variant="text-xl" weight="semibold" className="text-center">
            Edit {transaction.title} Transaction
          </Text>
          <div className="modal-action mx-0 block w-full overflow-scroll no-scrollbar">
            <form
              method="dialog"
              className="flex flex-col gap-4 justify-start text-end"
            >
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
                // rules={{ required: "Title is required!" }}
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
                      <Text className="text-red-500 mt-3">
                        {errors.title.message}
                      </Text>
                    )}
                  </div>
                )}
              />

              <Controller
                name="date"
                control={control}
                // defaultValue={new Date().toISOString().substr(0, 10)}
                // rules={{ required: "Date is required!" }}
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
                      <Text className="text-red-500 mt-3 text-start">
                        {errors.date.message}
                      </Text>
                    )}
                  </div>
                )}
              />

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
                            category._id === e.target.value
                              ? setType(category.type)
                              : null
                          );
                        }}
                        options={categories}
                        placeholder="Please choose a category"
                      />
                    </div>
                  )}
                />
              )}

              {selectedCategory === undefined || selectedCategory === "none" || selectedType ? (
                <Controller
                  name="type"
                  control={control}
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
                        <Text className="text-red-500 text-start mt-3">
                          {errors.type.message}
                        </Text>
                      )}
                    </div>
                  )}
                />
              ) : (
                null
                // <FormInput
                //   label="Type"
                //   name="categoryType"
                //   value={type}
                //   disabled
                //   labelType="side"
                // />
              )}

              {wallets && (
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
                        <Text className="text-red-500 px-36 mt-3">
                          {errors.wallet.message}
                        </Text>
                      )}
                    </div>
                  )}
                />
              )}

              {goals && transaction.type === "Saving" ? (
                <Controller
                  name="goal"
                  control={control}
                  rules={{ required: "Goals is required!" }}
                  render={({ field }) => (
                    <div>
                      <Select
                        label="Goal"
                        name="goal"
                        value={field.value}
                        onChange={(e) => {
                          field.onChange(e.target.value);
                        }}
                        options={goals}
                        placeholder="Please choose a goal"
                        none={false}
                      />
                      {errors.goal && (
                        <Text className="text-end text-red-500 mt-3">
                          {errors.goal.message}
                        </Text>
                      )}
                    </div>
                  )}
                />
              ) : null}
              {transaction.type === "Saving" ? null : (
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
                        <Text className="text-red-500 mt-3">
                          {errors.currency.message}
                        </Text>
                      )}
                    </div>
                  )}
                />
              )}

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
                      <Text className="text-red-500 mt-3">
                        {errors.amount.message}
                      </Text>
                    )}
                  </div>
                )}
              />

              {selectedCurrency &&
              selectedCurrency !== userInfo.baseCurrency ? (
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
                        placeholder={formatMoney(
                          field.value,
                          userInfo.baseCurrency
                        )}
                        disabled
                        labelType="side"
                      />
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
                <Button size="xl" onClick={handleSubmit(onSubmit)}>
                  Save
                </Button>

                <Button size="xl" onClick={closeModal} variant="roundOutline">
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

export default TransactionEditForm;