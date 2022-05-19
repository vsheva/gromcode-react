import React from 'react';

const Dialog = ({ isOpen, children, title, onClick }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="dialog" onClick={onClick}>
      <div className="dialog__heading">
        <h4 className="dialog__title">{title}</h4>
        <button className="dialog__close-btn">+</button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};

export default Dialog;
