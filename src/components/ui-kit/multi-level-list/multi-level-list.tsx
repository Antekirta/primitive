import React from "react";
import "./multi-level-list.css";

export interface MultiLevelListItem {
  text: string;
  handler?: Function;
  list?: Array<MultiLevelListItem>;
}

interface MultiLevelListProps {
  list: Array<MultiLevelListItem>;
}

const MultiLevelList: React.FC<MultiLevelListProps> = props => {
  return (
    <div className="multi-level-list">
      <ul className="multi-level-list__list multi-level-list__list--top">
        <li className="multi-level-list__item">
          <span className="multi-level-list__item-content">Collect wood</span>

          <ul className="multi-level-list__list">
            <li className="multi-level-list__item">
              <span className="multi-level-list__item-content">
                Collect branches
              </span>

              <ul className="multi-level-list__list">
                <li className="multi-level-list__item">
                  <span className="multi-level-list__item-content">
                    Collect branches
                  </span>
                </li>
              </ul>
            </li>

            <li className="multi-level-list__item">
              <span className="multi-level-list__item-content">
                Collect branches
              </span>
            </li>

            <li className="multi-level-list__item">
              <span className="multi-level-list__item-content">
                Collect branches
              </span>
            </li>

            <li className="multi-level-list__item">
              <span className="multi-level-list__item-content">
                Collect branches
              </span>
            </li>
          </ul>
        </li>

        <li className="multi-level-list__item">
          <span className="multi-level-list__item-content">Collect stones</span>

          <ul className="multi-level-list__list">
            <li className="multi-level-list__item">
              <span className="multi-level-list__item-content">
                Collect branches
              </span>

              <ul className="multi-level-list__list">
                <li className="multi-level-list__item">
                  <span className="multi-level-list__item-content">
                    Collect branches
                  </span>
                </li>
              </ul>
            </li>

            <li className="multi-level-list__item">
              <span className="multi-level-list__item-content">
                Collect branches
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MultiLevelList;
