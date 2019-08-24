import React from "react";
import "./multi-level-list.css";

export interface MultiLevelListItem {
  text: string;
  handler?: () => any;
  list?: Array<MultiLevelListItem>;
}

interface MultiLevelListProps {
  list: Array<MultiLevelListItem>;
}

const MultiLevelList: React.FC<MultiLevelListProps> = props => {
  const itemMarkup = (listItem: MultiLevelListItem) => {
    return (
      <React.Fragment key={listItem.text}>
        <li className="multi-level-list__item" onClick={listItem.handler}>
          <span className="multi-level-list__item-content">
            {listItem.text}
          </span>

          <ul className="multi-level-list__list">
            {listItem.list
              ? listItem.list.map(listItem => itemMarkup(listItem))
              : null}
          </ul>
        </li>
      </React.Fragment>
    );
  };

  return (
    <div className="multi-level-list">
      <ul className="multi-level-list__list multi-level-list__list--top">
        {props.list.map(listItem => itemMarkup(listItem))}
      </ul>
    </div>
  );
};

export default MultiLevelList;
