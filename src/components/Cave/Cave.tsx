import React from "react";
import "./Cave.css";
import { connect } from "react-redux";
import { warehouseStateInterface } from "../../reducers/warehouseReducer";

class Cave extends React.Component {
  render() {
    // @ts-ignore
    console.log("Cave props:", this.props);

    const props = this.props as warehouseStateInterface;

    const { rawMaterials } = props.warehouse;

    return (
      <div className="cave">
        <div className="warehouse cave__warehouse">
          <header className="warehouse__title">Warehouse</header>

          <section className="warehouse__section">
            <header className="warehouse__header">Raw materials</header>

            <ul className="warehouse__list">
              <li className="warehouse__item">
                <span className="warehouse__item-label">Wood</span>
                <span className="warehouse__item-value">
                  {rawMaterials.wood.branch.length}
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

type CaveStore = {
  warehouse: warehouseStateInterface;
};

const mapStateToProps = (store: CaveStore) => {
  return { ...store.warehouse };
};

export default connect(mapStateToProps)(Cave);
