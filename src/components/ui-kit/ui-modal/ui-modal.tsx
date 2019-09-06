import React, { useState } from "react";
import "./ui-modal.css";
import UIButton from "../ui-button/ui-button";

interface iProps {
  title?: string;
  isOpen: boolean;
  handler: () => void;
}

export const UIModal: React.FC<iProps> = props => {
  return (
    <dialog className={`ui-modal ${props.isOpen ? "ui-modal--open" : null}`}>
      <div className="ui-modal__content">
        <header className="ui-modal__title">{props.title}</header>

        <UIButton className="ui-modal__button" onClick={props.handler}>
          Close
        </UIButton>
      </div>
    </dialog>
  );
};
