import React from "react";
import './Person.css'
import UIButton from "../../ui-kit/ui-button/ui-button";

export enum GENDER {
  male = 'male',
  female = 'female'
}

interface PersonProps {
  id: string
  name: string;
  gender: GENDER;
}

interface PersonState {
  currentActivity: string // TODO use enum here
}

export default class Person extends React.Component<PersonProps, PersonState> {
  constructor(props: PersonProps) {
    super(props)
  }

  state = {
    currentActivity: 'Having a rest...'
  }

  private assignTask(taskName: string) {
    alert(`Tsk ${taskName} has been assigned!`)
  }

  render() {
    return (
      <div className="person">
        <header className="person__item person__name">{this.props.name}</header>

        <div className="person__item person__gender">{this.props.gender}</div>

        <div className="person__item person__change-activity">
          <UIButton className={'person__assign-button'} onClick={this.assignTask.call(this, 'Do stuff')}>assign</UIButton>
        </div>

        <div className="person__item person__current-activity">{this.state.currentActivity}</div>
      </div>
    );
  }
}
