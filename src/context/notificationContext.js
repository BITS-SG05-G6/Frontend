import { createContext, useState } from "react";

export const NotificationContext = createContext(null);

const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState()

  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const [notiType, setNotiType] = useState();
  // const showError = () => {
  //   setIsMessageVisible(true);
  //   // You might have additional logic for showing errors
  // };

  // const hideError = () => {
  //   setIsErrorVisible(false);
  //   // You might have additional logic for hiding errors
  // };

  const notificationList = {
    message, 
    setMessage,
    isMessageVisible,
    setIsMessageVisible,
    notiType,
    setNotiType
  }

  return (
    <NotificationContext.Provider value={notificationList}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
