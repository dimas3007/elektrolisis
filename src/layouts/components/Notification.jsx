import React from "react";
import { FaTimes } from "react-icons/fa";

const Notification = ({ message, type, isOpen, handleClose }) => {
  return (
    <div className={`notification ${type} ${isOpen ? "open" : ""}`}>
      <p>{message}</p>
      <FaTimes className="close" onClick={handleClose} />
    </div>
  );
};

export default Notification;
