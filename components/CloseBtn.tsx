"use client";

import React from "react";
import './CloseBtn.css'; // Create a CSS file for the styles

interface CloseBtnProps {
  onClose: () => void; // Callback function to handle close
}

const CloseBtn: React.FC<CloseBtnProps> = ({ onClose }) => {
  return (
    <div className="close-container" onClick={onClose}>
      <div className="leftright"></div>
      <div className="rightleft"></div>
    </div>
  );
};

export default CloseBtn;