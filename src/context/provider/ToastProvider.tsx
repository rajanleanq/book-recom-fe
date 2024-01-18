"use client";
import React from "react";
import ToastContext, {
  ToastDataType,
  ToastStateContext,
} from "../globalContext/toastContext";

type Props = {
  children: React.ReactNode;
};

const ToastProvider = ({ children }: Props) => {
  const [toast, setToast] = React.useState<ToastDataType | null>(null);

  const showToast = ({ message, type, description }: ToastDataType) => {
    setToast({ message: message, description: description, type: type });
  };
  const hideToast = () => {
    setToast(null);
  };

  const ToastContextValue: ToastStateContext = {
    toastData: toast,
    hideToast: hideToast,
    showToast: showToast,
  };

  return (
    <ToastContext.Provider value={ToastContextValue}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
