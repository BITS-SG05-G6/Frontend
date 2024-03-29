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
import { formatMoney } from "../../utils/formatMoney";
import { format } from "date-fns";

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
  const { rate, setDate } = useContext(ExchangeContext);
  const { setIsMessageVisible, setMessage, setNotiType } =
    useContext(NotificationContext);
  const reminder = watch("reminder");
  const selectedCurrency = watch("currency");
  const selectedDate = watch("date");
  const { handleUpdateBill } = useContext(BillContext);

  const onSubmit = async (d) => {
    await axiosInstance
      .createBill(
        d.title,
        d.amount,
        d.currency,
        d.reminder,
        d.date,
        d.frequency,
        d.description,
        d.exchangeAmount,
      )
      .then((res) => {
        reset();
        document.getElementById("my_modal_2").close();
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
    setDate(
      selectedDate
        ? format(new Date(selectedDate), "yyyy-MM-dd")
        : format(new Date(), "yyyy-MM-dd"),
    );
  }, [selectedDate, setDate]);

  const handleOnChange = (value) => {
    let exchangeValue;
    if (selectedCurrency === "VND") {
      exchangeValue = parseFloat((value / rate).toFixed(2));
    } else {
      exchangeValue = value * rate;
    }
    setValue("exchangeAmount", exchangeValue);
    return true;
  };

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
        <div className="modal-box flex w-full flex-col justify-center overflow-visible">
          <Text variant="text-xl" weight="semibold" className="text-center">
            Add New Invoice
          </Text>
          <div className="modal-action mx-0 block w-full overflow-visible">
            <form
              method="dialog"
              className="flex flex-col justify-start gap-4 text-end"
            >
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
                      <Text className="mt-3 text-red-500">
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
                      <Text className="mt-3 text-red-500">
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
                      <Text className="mt-3 text-red-500">
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
                      <Text className="mt-3 text-red-500">
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
                        // value={field.value}
                        placeholder={formatMoney(
                          field.value,
                          userInfo.baseCurrency,
                        )}
                        // placeholder={field.value}
                        disabled
                        labelType="side"
                      />
                      {errors.exchangeAmount && (
                        <Text className="mt-3 px-36 text-red-500">
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
                      <Text className="mt-3 px-32 text-red-500">
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
                          <Text className="mt-3 px-32 text-red-500">
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
