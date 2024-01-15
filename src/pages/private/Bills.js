import React, { useContext } from "react";
import BillCard from "../../components/Bill/BillCard";
import BillForm from "../../components/Bill/BillForm";
import Alert from "../../components/common/Alert";
import { BillContext } from "../../context/billContext";
import { NotificationContext } from "../../context/notificationContext";
import Loading from "../../components/common/Loading";

function Bills() {
  const { bills, isLoading } = useContext(BillContext);
  const { isMessageVisible, message, notiType } =
    useContext(NotificationContext);
  return (
    <div>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <>
          {isMessageVisible && <Alert message={message} type={notiType} />}
          <div className="mb-8 flex w-full justify-end px-4 lg:px-6">
            <BillForm />
          </div>
          <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {bills.map((bill) => (
              <div className="flex items-center justify-center">
                <BillCard bill={bill} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Bills;
