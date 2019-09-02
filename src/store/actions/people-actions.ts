import { delayForNTicks } from "../../utils/timer";
import { AnyAction } from "redux";
import { Dispatch } from "react";
import { iPerson, iOccupation } from "../../components/People/Person/Person";

export enum PEOPLE_ACTIONS {
  ADD_PERSON = "ADD_PERSON",
  SET_PERSON_OCCUPATION = "SET_PERSON_OCCUPATION"
}

const DEFAULT_ACTIVITY = "Idle";

export const addPerson = (personParams: iPerson): any => {
  return {
    type: PEOPLE_ACTIONS.ADD_PERSON,
    payload: personParams
  };
};

export const setPersonOccupation = (
  personId: string,
  occupation: iOccupation,
  timeout: number
): any => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: PEOPLE_ACTIONS.SET_PERSON_OCCUPATION,
      personId,
      payload: occupation
    });

    delayForNTicks(() => {
      dispatch({
        type: PEOPLE_ACTIONS.SET_PERSON_OCCUPATION,
        personId,
        payload: {
          title: DEFAULT_ACTIVITY
        }
      });
    }, timeout);
  };
};
