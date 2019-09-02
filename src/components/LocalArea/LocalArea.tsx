import React from "react";
import "./LocalArea.css";
import Forest from "../Forest/Forest";
import Cave from "../Cave/Cave";
import People, { PeopleFactory } from "../People/People";
import { GENDER } from "../People/Person/Person";

PeopleFactory.createPerson({
  name: "Iwar",
  gender: GENDER.male,
  currentOccupation: {
    title: "Idle"
  }
});

interface ILocalAreaProps {}

export interface ILocalAreaState {}

export default class LocalArea extends React.Component<
  ILocalAreaProps,
  ILocalAreaState
> {
  private constructor(props: ILocalAreaProps) {
    super(props);
  }

  render() {
    return (
      <div className="local-area">
        <div className="local-area__cell local-area__people">
          <header className="local-area__cell-header">Tribe</header>

          <People />
        </div>

        <div className="local-area__cell local-area__cave">
          <header className="local-area__cell-header">Cave</header>

          <Cave />
        </div>

        <div className="local-area__cell local-area__cave-surroundings">
          <header className="local-area__cell-header">
            Cave's surroundings
          </header>
        </div>

        <div className="local-area__cell local-area__forest">
          <header className="local-area__cell-header">Forest</header>

          <Forest />
        </div>

        <div className="local-area__cell local-area__meadow">
          <header className="local-area__cell-header">Meadow</header>
        </div>

        <div className="local-area__cell local-area__river">
          <header className="local-area__cell-header">River</header>
        </div>

        <div className="local-area__cell local-area__mountain">
          <header className="local-area__cell-header">Mountains</header>
        </div>

        <div className="local-area__cell local-area__events">
          <header className="local-area__cell-header">Events</header>
        </div>
      </div>
    );
  }
}
