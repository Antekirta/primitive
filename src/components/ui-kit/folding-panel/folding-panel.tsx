import React, {
  useState,
  Props,
  ReactChildren,
  ReactPropTypes,
  ReactNode
} from "react";
import "./folding-panel.css";
import UIButton from "../ui-button/ui-button";

interface IFoldingPanelProps {
  children?: ReactNode;
}

export const FoldingPanel: React.FC = (props: IFoldingPanelProps) => {
  let [isOpen, toggle] = useState(false);

  return (
    <div className="folding-panel">
      <UIButton
        className="folding-panel__toggle"
        onClick={() => {
          toggle(!isOpen);
        }}
      >
        {isOpen ? "Hide" : "Show"}
      </UIButton>

      <div className="folding-panel__content">
        {isOpen ? props.children : null}
      </div>
    </div>
  );
};
