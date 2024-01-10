import React, { useState } from "react";
import Button from "./Button";
import Text from './Text';

function ConfirmationModal({
  idModal,
  btnName,
  btnSize,
  btnType,
  onSubmit,
  message,
  variant,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <Button
        type={"button"}
        size={btnSize}
        variant={variant}
        onClick={() => document.getElementById(idModal).showModal()}
      >
        {btnName}
      </Button>
      <dialog id={`${idModal}`} className="modal">
        <div className="modal-box flex flex-col gap-8 py-14">
          <Text variant="text-2xl" weight="bold" className="text-[#EF5DA8]">Are you sure?</Text>
          {/* <p className="py-4">{message}</p> */}
          <Text weight="medium">{message}</Text>
          <div className="">
            <form method="dialog" className="flex flex-row  gap-10 justify-center ">
              {/* if there is a button in form, it will close the modal */}
              <button class="hover:text-[#EF5DA8] text-sm outline-none btn btn-sm btn-circle bg-transparent border-transparent hover:bg-transparent hover:border-transparent absolute right-2 top-2 text-black">x</button>

              <Button
                size="xl"
                type={btnType}
                onClick={() => {
                  onSubmit();
                  document.getElementById(idModal).close();
                }}
              >
                Confirm
              </Button>
              <Button size="xl"  variant={"roundOutline"}>Cancel</Button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ConfirmationModal;
