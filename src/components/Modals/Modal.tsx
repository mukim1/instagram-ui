import React, { useEffect } from "react";

export const Modal = (props: ModalProps) => {
  const { open, children, handleClose, clses } = props;

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (e.target.classList.contains("modal")) {
        handleClose();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } fixed top-0 bottom-0 left-0 right-0 grid items-center modal dark:bg-[rgba(0,0,0,0.5)]`}
      style={{ zIndex: 9999 }}
    >
      <div
        className={`bg-white overflow-auto mx-auto rounded lg:w-96 h-auto ${clses}`}
      >
        {children}
      </div>
    </div>
  );
};

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  clses?: string;
}
