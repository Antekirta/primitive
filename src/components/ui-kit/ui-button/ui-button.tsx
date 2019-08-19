import React from "react";

export default class UIButton extends React.Component {
    render() {
        return (
            <button className="ui-button">
                {this.props.children}
            </button>
        )
    }
}