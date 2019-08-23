import React from "react";
import "./LocalArea.css";
import Forest from "../Forest/Forest";
import Cave from "../Cave/Cave";
import People, { PeopleFactory } from "../People/People";
import { GENDER } from "../People/Person/Person";

const members = [
  PeopleFactory.createPerson("Iwar", GENDER.male),
  PeopleFactory.createPerson("Inga", GENDER.female)
];

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
          <header className="local-area__cell-header">Люди</header>

          <People people={members} />
        </div>

        <div className="local-area__cell local-area__cave">
          <header className="local-area__cell-header">Пещера</header>

          <Cave />
        </div>

        <div className="local-area__cell local-area__cave-surroundings">
          <header className="local-area__cell-header">
            Окрестности пещеры
          </header>
        </div>

        <div className="local-area__cell local-area__forest">
          <header className="local-area__cell-header">Лес</header>

          <Forest />
        </div>

        <div className="local-area__cell local-area__meadow">
          <header className="local-area__cell-header">Луг</header>
        </div>

        <div className="local-area__cell local-area__river">
          <header className="local-area__cell-header">Река</header>
        </div>

        <div className="local-area__cell local-area__mountain">
          <header className="local-area__cell-header">Горы</header>
        </div>

        <div className="local-area__cell local-area__events">
          <header className="local-area__cell-header">События</header>
        </div>
      </div>
    );
  }
}
