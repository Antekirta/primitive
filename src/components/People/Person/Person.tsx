import React from "react";
import "./Person.css";
import UIButton from "../../ui-kit/ui-button/ui-button";
import MultiLevelList, {
  MultiLevelListItem
} from "../../ui-kit/multi-level-list/multi-level-list";
import GetWood from "../../../commands/GetWood";
import { TREES, TREE_PARTS } from "../../Forest/Tree";
import { Tool, TOOLS } from "../../Tool/Tool";

export enum GENDER {
  male = "male",
  female = "female"
}

interface PersonProps {
  id: string;
  name: string;
  gender: GENDER;
}

interface PersonState {
  currentActivity: string; // TODO use enum here
  commandsList: Array<MultiLevelListItem>;
}

export default class Person extends React.Component<PersonProps, PersonState> {
  constructor(props: PersonProps) {
    super(props);
  }

  state = {
    currentActivity: "Having a rest...",
    commandsList: [
      {
        text: "sdf"
      }
    ]
  };

  private assignTask(taskName: string) {
    const activity = new GetWood().execute(
      TREES.birch,
      TREE_PARTS.BRANCH,
      new Tool(TOOLS.BRONZE_AXE, 30, 40, 10)
    );

    console.log("activity:", activity);

    this.setState({
      currentActivity: activity
    });
  }

  render() {
    return (
      <div className="person">
        <header className="person__item person__name">{this.props.name}</header>

        <div className="person__item person__gender">{this.props.gender}</div>

        <div className="person__item person__change-activity">
          <UIButton
            className={"person__assign-button"}
            onClick={() => {
              this.assignTask.call(this, "Do stuff");
            }}
          >
            assign
          </UIButton>

          <MultiLevelList list={this.state.commandsList} />
        </div>

        <div className="person__item person__current-activity">
          {this.state.currentActivity}
        </div>
      </div>
    );
  }
}
