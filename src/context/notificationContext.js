import { createContext, useState } from "react";

export const NotificationContext = createContext(null);

const NotificationProvider = ({ children }) => {
  const [message, setMessage] = useState();

  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const [notiType, setNotiType] = useState();

  const notificationList = {
    message,
    setMessage,
    isMessageVisible,
    setIsMessageVisible,
    notiType,
    setNotiType,
  };

  return (
    <NotificationContext.Provider value={notificationList}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
