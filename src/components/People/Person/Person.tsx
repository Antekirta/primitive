import React from "react";

export enum GENDER {
  male,
  female
}

interface PersonProps {
  name: string;
  gender: GENDER;
}

export default class Person extends React.Component<PersonProps> {
  render() {
    return (
      <div className="person">
        <header className="person__name">{this.props.name}</header>

        <div className="person__gender">{this.props.gender}</div>
      </div>
    );
  }
}
