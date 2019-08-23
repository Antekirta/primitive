import React from "react";
import { connect } from "react-redux";
import { warehouseStateInterface } from "../../reducers/warehouseReducer";

class Cave extends React.Component {
  render() {
    // @ts-ignore
    console.log("Cave props:", this.props);

    return <h2>Cave</h2>;
  }
}

type CaveStore = {
  warehouse: warehouseStateInterface;
};

const mapStateToProps = (store: CaveStore) => {
  return { ...store.warehouse };
};

export default connect(mapStateToProps)(Cave);
