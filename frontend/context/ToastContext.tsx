"use client";
import React, { createContext, useContext, useState, useCallback } from "react";

type ToastType = "success" | "error" | "warning";

interface Toast {
  message: string;
  type: ToastType;
}

interface ToastContextProps {
  showToast: (message: string, type: ToastType, duration?: number) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toast, setToast] = useState<Toast | null>(null);
  const [visible, setVisible] = useState(false);

  const showToast = useCallback((message: string, type: ToastType, duration = 3000) => {
    setToast({ message, type });
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setToast(null); // Clear toast after it disappears
    }, duration);
    return () => clearTimeout(timer);
  }, []);

  const getToastStyle = () => {
    switch (toast?.type) {
      case "success":
        return "bg-green-100 text-green-700 border-green-500";
      case "error":
        return "bg-red-100 text-red-700 border-red-500";
      case "warning":
        return "bg-yellow-100 text-yellow-700 border-yellow-500";
      default:
        return "";
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && visible && (
        <div
          className={`fixed top-5 right-5 z-50 px-4 py-3 rounded-lg shadow-lg border ${getToastStyle()} transition-opacity duration-300`}
        >
          {toast.message}
        </div>
      )}
    </ToastContext.Provider>
  );
};
