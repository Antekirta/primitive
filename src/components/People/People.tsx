import React from "react";
import uniqid from "uniqid";
import "./People.css";
import Person, { iPerson } from "./Person/Person";
import { store } from "../../store/configureStore";
import { addPerson } from "../../actions/people-actions";
import { iPeopleReducerState } from "../../reducers/people-reducer";
import { connect } from "react-redux";

class People extends React.Component {
  render() {
    const props = this.props as iPeopleReducerState;

    return (
      <div className="people">
        <ul className="people__list">
          {props.people.map(personParams => {
            return (
              <li className="people__item" key={personParams.id}>
                <Person {...personParams}></Person>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

type PeopleStore = {
  peopleStore: iPeopleReducerState;
};

const mapStateToProps = (store: PeopleStore) => {
  return { ...store.peopleStore };
};

export default connect(mapStateToProps)(People);

export class PeopleFactory {
  static createPerson(personParams: Omit<iPerson, "id">) {
    const personId = uniqid();

    store.dispatch(
      addPerson({
        ...personParams,
        id: personId
      })
    );

    return <Person id={personId} {...personParams} />;
  }
}
