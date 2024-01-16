import React from "react";
import Button from "./Button";
import Text from "./Text";

function ConfirmationModal({ idModal, btnName, btnType, onSubmit, message }) {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <Button
        type={"button"}
        variant={"redButton"}
        size={"card"}
        onClick={() => document.getElementById(idModal).showModal()}
      >
        {btnName}
      </Button>
      <dialog id={`${idModal}`} className="modal">
        <div className="modal-box flex flex-col gap-8 py-14">
          <Text variant="text-2xl" weight="bold" className="text-[#EF5DA8]">
            Are you sure?
          </Text>
          <Text weight="medium">{message}</Text>
          <div className="">
            <form
              method="dialog"
              className="flex flex-row  justify-center gap-10 "
            >
              {/* if there is a button in form, it will close the modal */}
              <button class="btn btn-circle btn-sm absolute right-2 top-2 border-transparent bg-transparent text-sm text-black outline-none hover:border-transparent hover:bg-transparent hover:text-[#EF5DA8]">
                x
              </button>

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
              <Button size="xl" variant={"roundOutline"}>
                Cancel
              </Button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default ConfirmationModal;
