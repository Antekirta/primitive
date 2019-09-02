import _find from "lodash/find";
import { PEOPLE_ACTIONS } from "./../actions/people-actions";
import { AnyAction } from "redux";
import { iPerson } from "../components/People/Person/Person";

export interface iPeopleReducerState {
  people: Array<iPerson>;
}

const initialState: iPeopleReducerState = {
  people: []
};

export const peopleReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case PEOPLE_ACTIONS.ADD_PERSON:
      return Object.assign({}, state, {
        people: [...state.people, action.payload]
      } as iPeopleReducerState);

    case PEOPLE_ACTIONS.SET_PERSON_OCCUPATION:
      const newPeople = state.people.map(person => {
        if (person.id === action.personId) {
          person.currentOccupation = action.payload;
        }

        return person;
      });

      return Object.assign({}, state, {
        people: newPeople
      } as iPeopleReducerState);
    default:
      return state;
  }
};
