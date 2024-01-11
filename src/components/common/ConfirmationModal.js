import React, { useState } from "react";
import Button from "./Button";

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
        onClick={() => document.getElementById(`${idModal}confirm`).showModal()}
      >
        {btnName}
      </Button>
      <dialog id={`${idModal}confirm`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirmation</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <form method="dialog" className="flex flex-row gap-3">
              {/* if there is a button in form, it will close the modal */}
              <Button
                variant={"roundOutline"}
                type={btnType}
                onClick={() => {
                  onSubmit();
                  document.getElementById(idModal).close();
                }}
              >
                Confirm
              </Button>
              <Button>Cancel</Button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ConfirmationModal;
