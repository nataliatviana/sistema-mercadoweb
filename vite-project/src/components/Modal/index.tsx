import type React from "react";
import "./index.css";

interface ModalProps {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ onClose, title, children }: ModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-btn">
          ✕
        </button>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}
