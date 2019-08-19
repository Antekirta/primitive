import React from "react";
import Person, { GENDER } from "./Person/Person";

interface PeopleProps {
  people: Array<Person>;
}

export default class People extends React.Component<PeopleProps> {
  render() {
    return (
      <div className="people">
        <ul className="people__list">
          {this.props.people.map(person => {
            return person;
          })}
        </ul>
      </div>
    );
  }
}

export class PeopleFactory {
  static createPerson(gender: GENDER) {
    return <Person name={"Iwar"} gender={GENDER.male} />;
  }
}
