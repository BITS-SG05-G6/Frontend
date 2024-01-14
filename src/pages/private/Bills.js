import React, { useContext } from "react";
import BillCard from "../../components/Bill/BillCard";
import BillForm from "../../components/Bill/BillForm";
import Alert from "../../components/common/Alert";
import { BillContext } from "../../context/billContext";
import { NotificationContext } from "../../context/notificationContext";
import Loading from "../../components/common/Loading";

function Bills() {
  const { bills, isLoading } = useContext(BillContext);
  const { isMessageVisible, message, notiType } = useContext(NotificationContext);


  return (
    <>
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <>
          {
            isMessageVisible && (
              <Alert message={message} type={notiType} />
            )
          }
          <div className="flex justify-end px-6">
            <BillForm />
          </div>
          <div className="px-10 grid grid-cols-4 gap-6">

            {bills.map((bill) => (
              <BillCard
                bill={bill}
              />
            ))}
          </div>
        </>
      )
      }
    </>
  );
}

export default Bills;
