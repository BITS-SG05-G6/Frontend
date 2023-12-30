import React, { useContext } from "react";
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
const BillForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      reminder: false,
    },
  });

  const reminder = watch("reminder");
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
        d.description
      )
      .then((res) => {
        reset();
        document.getElementById("my_modal_2").close();
        // console.log(res);
        handleUpdateBill();
      })
      .catch((err) => {
        console.log(err);
      });
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
