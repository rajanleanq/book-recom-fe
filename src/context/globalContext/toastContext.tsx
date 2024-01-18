import React, { Dispatch, SetStateAction } from "react";

type ToastType = "success" | "info" | "warning" | "error" | undefined;

export interface ToastDataType {
  message: string;
  description?: string;
  type: ToastType;
}
export interface ToastStateContext {
  isVisible?: boolean;
  toastData: ToastDataType | null;
  hideToast: () => void;
  showToast: ({}: ToastDataType) => void;
}

const ToastState = {
  toastData: {
    message: "",
    description: "",
    type: undefined,
  },
  hideToast: () => {},
  showToast: () => {},
};

const ToastContext = React.createContext<ToastStateContext>(ToastState);
export default ToastContext;
