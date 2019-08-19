import React from "react";
import uniqid from 'uniqid';
import './People.css'
import Person, { GENDER } from "./Person/Person";

interface PeopleProps {
  people: Array<JSX.Element>;
}

export default class People extends React.Component<PeopleProps> {
  render() {
    return (
      <div className="people">
        <ul className="people__list">
          {this.props.people.map(person => {
            return (
              <li className="people__item" key={person.props.id} >
                {person}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export class PeopleFactory {
  static createPerson(name: string, gender: GENDER) {
    return <Person id={uniqid()} name={name} gender={GENDER.male} />;
  }
}
