import React from "react";
import "./Person.css";
import UIButton from "../../ui-kit/ui-button/ui-button";
import MultiLevelList, {
  MultiLevelListItem
} from "../../ui-kit/multi-level-list/multi-level-list";
import { GetWood } from "../../../commands/wood-commands";
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
  tasksListIsOpen: boolean;
}

export default class Person extends React.Component<PersonProps, PersonState> {
  state = {
    currentActivity: "Having a rest...",
    tasksListIsOpen: false,
    commandsList: [
      {
        text: "Collect",
        list: [
          {
            text: "Wood",
            list: Object.values(TREE_PARTS).map((treePart: TREE_PARTS) => {
              return {
                text: treePart,
                list: Object.values(TREES).map((treeSpecies: TREES) => {
                  return {
                    text: treeSpecies,
                    handler: () => {
                      this.toggleTasksList.call(this);

                      this.assignTask.call(this, () => {
                        console.log('assignTask treeSpecies: ', treeSpecies)
                        new GetWood().execute(treeSpecies, treePart, this.tool);
                      });
                    }
                  };
                })
              };
            })
          },
          {
            text: "Stones"
          },
          {
            text: "Clay"
          }
        ]
      },
      {
        text: "Create"
      },
      {
        text: "Build"
      },
      {
        text: "Repair"
      }
    ]
  };

  get tool() {
    return new Tool(TOOLS.BRONZE_AXE, 30, 40, 10);
  }

  private assignTask(cb: Function) {
    this.toggleTasksList.call(this);

    cb();

    // console.log("activity:", activity);

    // this.setState({
    //   currentActivity: activity
    // });
  }

  private toggleTasksList() {
    this.setState({
      tasksListIsOpen: !this.state.tasksListIsOpen
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
            onClick={this.toggleTasksList.bind(this)}
          >
            assign
          </UIButton>

          {this.state.tasksListIsOpen ? (
            <MultiLevelList
              className="person__tasks-list"
              list={this.state.commandsList}
            />
          ) : null}
        </div>

        <div className="person__item person__current-activity">
          {this.state.currentActivity}
        </div>
      </div>
    );
  }
}
