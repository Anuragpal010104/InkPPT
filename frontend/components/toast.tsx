import { useState, useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error" | "warning";
  duration?: number;
}

export default function Toast({ message, type, duration = 3000 }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log("Toast rendered with message:", message, "and type:", type);
    const timer = setTimeout(() => {
      console.log("Toast visibility set to false");
      setVisible(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [message, type, duration]);

  if (!visible) return null;

  const getToastStyle = () => {
    switch (type) {
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
    <div
      className={`fixed top-5 right-5 z-50 px-4 py-3 rounded-lg shadow-lg border ${getToastStyle()} transition-opacity duration-300`}
      style={{ display: visible ? "block" : "none", position: "fixed" }}
    >
      {message}
    </div>
  );
}
