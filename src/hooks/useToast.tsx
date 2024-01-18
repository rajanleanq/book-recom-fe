import React, { useCallback } from "react";
import { ToastDataType } from "@/context/globalContext/toastContext";
import { JsxElement } from "typescript";

interface Toast {
  message: string;
  description: string;
  type: "success" | "info" | "warning" | "error";
}

interface ToastOptions {
  showToast: ({}: ToastDataType) => void;
  ToastComponent: React.ReactNode;
}

export const useToast = (): ToastOptions => {
  const [toast, setToast] = React.useState<ToastDataType | null>(null);

  const showToast = ({ message, type, description }: ToastDataType) => {
    setToast({ message: message, description: description, type: type });
  };

  const hideToast = () => {
    setToast(null);
  };
  toast && console.log("got here");

  const ToastComponent = toast ? (
    <>
     {/* <Alert
       message={toast?.message}
       description={toast?.description}
       type={toast?.type}
       showIcon
       closable
       onClose={hideToast}
     /> */}
    </>
    ) : null;

  return { showToast, ToastComponent };
};
