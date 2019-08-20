import React from "react";
import "./ui-button.css";

interface UIButtonProps {
  className?: string;
  bold?: boolean;
  [key: string]: any;
}

const UIButton: React.FC<UIButtonProps> = props => {
  let UIButtonClassNames = `ui-button ${props.className}`;

  UIButtonClassNames += props.bold ? ` ui-button--bold` : "";

  return (
    <button {...props} className={UIButtonClassNames}>
      {props.children}
    </button>
  );
};

export default UIButton;
