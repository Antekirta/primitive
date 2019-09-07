import React from "react";
import "./Cave.css";
import { connect } from "react-redux";
import { IWoodReducerState } from "store/reducers/wood-reducer";
import { WoodStorage } from "components/Cave/wood-storage/WoodStorage";
import { ToolStorage } from "components/Cave/tool-storage/ToolStorage"
import { iToolsReducerState } from "store/reducers/tools-reducer";

interface iProps {
  wood: IWoodReducerState
  tools: iToolsReducerState
}

class Cave extends React.Component<iProps> {
  render() {
    return (
      <div className="cave">
        <div className="warehouse cave__warehouse">
          <header className="warehouse__title">Warehouse</header>

          <section className="warehouse__section">
            <header className="warehouse__header">Raw materials</header>

            <WoodStorage
              className="storage warehouse__storage"
              wood={this.props.wood}
            />

            <header className="warehouse__header">Raw materials</header>

            <ToolStorage tools={this.props.tools} ></ToolStorage>
          </section>
        </div>
      </div>
    );
  }
}

type CaveStore = {
  woodStore: IWoodReducerState;
  toolStore: iToolsReducerState;
};

const mapStateToProps = (store: CaveStore) => {
  return { ...store.woodStore, ...store.toolStore };
};

export default connect(mapStateToProps)(Cave);
