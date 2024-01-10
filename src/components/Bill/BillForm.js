import React, { useContext, useEffect } from "react";
import Button from "../common/Button";
import Text from "../common/Text";
import FormInput from "../common/FormInput";
import { Controller, useForm } from "react-hook-form";
import Textarea from "../common/Textarea";
import * as axiosInstance from "../../services/bill";
import Select from "../common/Select";
import { currencyList, frequencyList } from "../svgs/OptionList";
import Toggle from "../common/Toggle";
import { BillContext } from "../../context/billContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/authContext";
import { ExchangeContext } from "../../context/exchangeContext";
import { NotificationContext } from "../../context/notificationContext";

const BillForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      reminder: false,
    },
  });
  const { userInfo } = useContext(AuthContext);
  const { rate, setDate, setBaseCurrency, setExchangeCurrency} = useContext(ExchangeContext);
  const { setIsMessageVisible, setMessage, setNotiType } = useContext(NotificationContext);
  const reminder = watch("reminder");
  const selectedCurrency = watch("currency");
  const selectedDate = watch("date");
  const otherCurrency = userInfo.baseCurrency === "VND" ? "USD" : "VND";
  const { handleUpdateBill } = useContext(BillContext);

  const onSubmit = async (d) => {
    console.log(d);
    await axiosInstance
      .createBill(
        d.title,
        d.amount,
        d.currency,
        d.reminder,
        d.date,
        d.frequency,
        d.description,
        d.exchangeAmount
      )
      .then((res) => {
        reset();
        document.getElementById("my_modal_2").close();
        // console.log(res);
        handleUpdateBill();
        setMessage(res.message);
        setIsMessageVisible(true);
        setNotiType("success");

        setTimeout(() => {
          setMessage(null);
          setIsMessageVisible(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setBaseCurrency(selectedCurrency !== userInfo.baseCurrency ? userInfo.baseCurrency : otherCurrency);
    setExchangeCurrency(selectedCurrency !== userInfo.baseCurrency ? otherCurrency : userInfo.baseCurrency);

  }, [selectedCurrency, setValue, selectedDate, otherCurrency, userInfo.baseCurrency, setBaseCurrency, setDate, setExchangeCurrency, rate])

  // console.log(rate);
  const handleOnChange = (value) => {
    console.log(rate);
    let exchangeValue;
    if (selectedCurrency === "VND") {
      exchangeValue = parseFloat((value/rate).toFixed(2));
    } else {
      exchangeValue = value * rate;
    }
    setValue("exchangeAmount", exchangeValue)
    return true;
  }

  return (
    <>
      <Button
        onClick={() => document.getElementById("my_modal_2").showModal()}
        variant=""
        className=""
      >
        <FontAwesomeIcon icon={faReceipt} />
        <Text variant="text-sm" weight="bold">
          Add New Invoice
        </Text>
      </Button>
      <dialog id="my_modal_2" className="modal overflow-visible">
        <div className="modal-box flex flex-col justify-center w-full overflow-visible">
          <Text variant="text-xl" weight="semibold" className="text-center">
            Add New Invoice
          </Text>
          <div className="modal-action mx-0 block w-full overflow-visible">
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
                name="date"
                control={control}
                defaultValue={new Date().toISOString().substr(0, 10)}
                rules={{ required: "Date is required!" }}
                render={({ field }) => (
                  <div>
                    <FormInput
                      type="date"
                      label="Start date"
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
                  validate: handleOnChange,
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
                        placeholder={userInfo.baseCurrency === "VND" ?
                          new Intl.NumberFormat("vi-VN").format(field.value) +
                          " VND" : new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "USD"
                          }).format(field.value)
                        }
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
                name="reminder"
                control={control}
                // defaultValue={false}
                render={({ field }) => (
                  <div>
                    {/* <FormInput type="checkbox" className="toggle" label="Reminder" labelType="side"/> */}
                    <Toggle
                      label="Reminder"
                      name="reminder"
                      value={field.value}
                      onChange={(e) => {
                        field.onChange(e.target.checked);
                      }}
                    />
                    {errors.reminder && (
                      <Text className="text-red-500 px-32 mt-3">
                        {errors.reminder.message}
                      </Text>
                    )}
                  </div>
                )}
              />

              {reminder ? (
                <>
                  <Controller
                    name="frequency"
                    control={control}
                    rules={{
                      required: "Frequency is required!",
                    }}
                    render={({ field }) => (
                      <div>
                        <Select
                          label="Frequency"
                          name="frequency"
                          value={field.value}
                          onChange={(e) => {
                            field.onChange(e.target.value);
                          }}
                          options={frequencyList}
                          placeholder="Please choose a frequency"
                          none={false}
                        />
                        {errors.frequency && (
                          <Text className="text-red-500 px-32 mt-3">
                            {errors.frequency.message}
                          </Text>
                        )}
                      </div>
                    )}
                  />
                </>
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

                <Button size="xl">Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default BillForm;
