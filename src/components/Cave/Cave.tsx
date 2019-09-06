import React from "react";
import "./Cave.css";
import { connect } from "react-redux";
import { IWoodReducerState } from "store/reducers/wood-reducer";
import { WoodStorage } from "components/Cave/wood-storage/WoodStorage";

class Cave extends React.Component {
  render() {
    const props = this.props as IWoodReducerState;

    return (
      <div className="cave">
        <div className="warehouse cave__warehouse">
          <header className="warehouse__title">Warehouse</header>

          <section className="warehouse__section">
            <header className="warehouse__header">Raw materials</header>

            <WoodStorage
              className="storage warehouse__storage"
              wood={props.wood}
            />
          </section>
        </div>
      </div>
    );
  }
}

type CaveStore = {
  woodStore: IWoodReducerState;
};

const mapStateToProps = (store: CaveStore) => {
  return { ...store.woodStore };
};

export default connect(mapStateToProps)(Cave);
