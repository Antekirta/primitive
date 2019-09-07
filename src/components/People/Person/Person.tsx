import React from "react";
import "./Person.css";
import UIButton from "components/ui-kit/ui-button/ui-button";
import MultiLevelList, {
  MultiLevelListItem
} from "components/ui-kit/multi-level-list/multi-level-list";
import { GetWood } from "commands/wood-commands";
import { TREES, TREE_PARTS } from "classes/resources/wood/tree/Tree";
import { Tool, TOOLS } from "classes/Tool/Tool";
import Activity from "helpers/Activity";

export enum GENDER {
  male = "male",
  female = "female"
}

export interface iOccupation {
  title: string;
}

export interface iPerson {
  id: string;
  name: string;
  gender: GENDER;
  currentOccupation: Activity;
}

interface PersonState {
  commandsList: Array<MultiLevelListItem>;
  tasksListIsOpen: boolean;
}

export default class Person extends React.Component<iPerson, PersonState> {
  state = {
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
                      this.assignTask.call(this, () => {
                        const getWoodCommand = new GetWood(this.props.id, {
                          treeSpecies,
                          treePart,
                          tool: this.tool
                        });

                        getWoodCommand.execute();
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
    return new Tool(TOOLS.STEEL_AXE, 30, 40, 10);
  }

  private assignTask(command: () => void) {
    this.toggleTasksList.call(this);

    command();
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
            disabled={this.props.currentOccupation.isBusy}
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
          {this.props.currentOccupation.title}
        </div>
      </div>
    );
  }
}
