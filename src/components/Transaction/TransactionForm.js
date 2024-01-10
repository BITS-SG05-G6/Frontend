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
import { SavingContext } from "../../context/savingContext";
import { ExchangeContext } from "../../context/exchangeContext";
import { NotificationContext } from "../../context/notificationContext";

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
  const { setIsMessageVisible, setMessage, setNotiType } = useContext(NotificationContext);
  const { userInfo } = useContext(AuthContext);
  const selectedCategory = watch("category");
  const selectedWallet = watch("wallet");
  const selectedType = watch("type");
  const selectedDate = watch("date");
  const selectedCurrency = watch("currency");
  const { wallets } = useContext(WalletContext);
  const { goals } = useContext(SavingContext);
  const { rate, setDate, setBaseCurrency, setExchangeCurrency} = useContext(ExchangeContext);
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
        d.exchangeAmount,
        d.goal
      )
      .then((res) => {
        document
          .getElementById(
            category ? category.id : wallet ? wallet.id : "my_modal_1"
          )
          .close();
        handleUpdateTransaction();
        setMessage(res.message);
        setIsMessageVisible(true);
        setNotiType("success");

        setTimeout(() => {
          setMessage(null);
          setIsMessageVisible(false);
        }, 3000);
        console.log(res);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(goals)

  const otherCurrency = userInfo.baseCurrency === "VND" ? "USD" : "VND";

  useEffect(() => {
    setDate(selectedDate
          ? format(new Date(selectedDate), "yyyy-MM-dd")
          : format(new Date(), "yyyy-MM-dd"))
    setBaseCurrency(selectedCurrency !== userInfo.baseCurrency ? userInfo.baseCurrency : otherCurrency);
    setExchangeCurrency(selectedCurrency !== userInfo.baseCurrency ? otherCurrency : userInfo.baseCurrency);
    if (selectedType === "Saving") {
      setValue("currency", userInfo.baseCurrency);
    }
  }, [selectedCurrency, setValue, selectedDate, otherCurrency, userInfo.baseCurrency, setBaseCurrency, setDate, setExchangeCurrency, rate, selectedType, reset])

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
    let exchangeValue;
    console.log(rate);
    if (selectedCurrency === "VND") {
      exchangeValue = parseFloat((value/rate).toFixed(2));
    } else {
      exchangeValue = value * rate;
    }
    setValue("exchangeAmount", exchangeValue)

    // console.log(exchangeValue);
    const walletValue = wallet ? wallet : wallets.find((wallet) => wallet.id === selectedWallet);
    if (walletValue && selectedType === "Expense") {
      if (selectedCurrency === userInfo.baseCurrency) {
        return value > walletValue.amount ? `Your wallet is not enough. Balance: ${walletValue.amount} ${userInfo.baseCurrency}` : true;
      } else {
        return exchangeValue > walletValue.amount
          ? 
          `Your wallet is not enough. Balance: ${walletValue.amount} ${userInfo.baseCurrency}`
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
          openModal()}
        }
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
          <div className="modal-action mx-0 block w-full overflow-scroll no-scrollbar">
            <form method="dialog" className="flex flex-col gap-4 justify-start text-end">
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
                      <Text className="text-red-500 mt-3 text-start">
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
                      <Text className="text-red-500 mt-3 text-start">
                        {errors.date.message}
                      </Text>
                    )}
                  </div>
                )}
              />

              {
                selectedType === "Saving" ? null :
                category ? (
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
                    
                      </div>
                    )}
                  />
                )
              )
              }
          

              {
              category ? (
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
                        <Text className="text-red-500 text-start mt-3">
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

              { wallet ? (
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
                          <Text className="text-red-500 px-36 mt-3">
                            {errors.wallet.message}
                          </Text>
                        )}
                      </div>
                    )}
                  />
                )
              )}

              {
                selectedType === "Saving" ?
                wallet ? (
                  // <FormInput
                  //   label="Wallet"
                  //   name="wallet"
                  //   value={wallet.name}
                  //   disabled
                  //   labelType="side"
                  // />
                  null
                ) : (
                  goals && (
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
                  )) : null
              }
              {
                selectedType === "Saving" ? null :
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
              }
              

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
                      // <div className="pl-36">
                      //   {errors.amount.message}
                      // </div>
                    )}
                  </div>
                )}
              />

              {selectedCurrency && selectedCurrency !== userInfo.baseCurrency ? (
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
                        // value={field.value}
                        // onChange={(e) => field.on/Change(e.target.value)}
                        placeholder={userInfo.baseCurrency === "VND" ?
                          new Intl.NumberFormat("vi-VN").format(field.value) +
                          " VND" : new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "USD"
                          }).format(field.value)
                        }
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
                <Button
                  size="xl"
                  onClick={handleSubmit(onSubmit)}
                >
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

export default TransactionForm;
