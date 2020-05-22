import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, primaryText, show = false, onClose, onSubmit }) => {
  const mountingElement = document.createElement("div");

  useEffect(() => {
    const modalRoot = document.getElementById("modal-root");
    modalRoot.appendChild(mountingElement);

    //ComponentWillUnmount
    return () => {
      modalRoot.removeChild(mountingElement);
    };
  });

  return show
    ? ReactDOM.createPortal(
        <div
          style={{
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              padding: 20,
              background: "#fff",
              borderRadius: "2px",
              display: "inline-block",
              minHeight: "300px",
              margin: "1rem",
              position: "relative",
              minWidth: "300px",
              boxShadow:
                "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
              justifySelf: "center",
            }}
          >
            {children}
            <button onClick={onSubmit}>Submit</button>
          </div>
        </div>,
        mountingElement
      )
    : null;
};

export default Modal;
