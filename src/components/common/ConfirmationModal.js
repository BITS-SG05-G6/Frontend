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
        <div className="modal-box flex flex-col gap-8">
          <h3 className="font-bold text-red-500 text-2xl">Confirmation</h3>
          {/* <p className="py-4">{message}</p> */}
          <Text weight="semibold">{message}</Text>
          <div className="">
            <form method="dialog" className="flex flex-row  gap-3 justify-center ">
              {/* if there is a button in form, it will close the modal */}
              <Button
               
                type={btnType}
                onClick={() => {
                  onSubmit();
                  document.getElementById(idModal).close();
                }}
              >
                Confirm
              </Button>
              <Button  variant={"roundOutline"}>Cancel</Button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ConfirmationModal;
