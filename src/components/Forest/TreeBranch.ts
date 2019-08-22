import { eventBus } from "./../../utils/event-bus";
import { CUSTOM_EVENTS } from "./../../registry/CUSTOM_EVENTS";
import Tree from "./Tree";

export default class TreeBranch {
  constructor(treeSpecies: Tree, weight: number) {
    this.treeSpecies = treeSpecies;
    this.weight = weight;

    eventBus.on(CUSTOM_EVENTS.TICK, this.dry.bind(this));
  }

  treeSpecies: Tree;
  weight: number; // kg 
  currentHumidity: number = this.treeSpecies.humidity; // percent

  public calculateTimeToBurn(isThereEnoughOxygen: boolean = true) {
    const basicTime =
      (this.weight * (this.treeSpecies.density as number)) /
      this.treeSpecies.burningTemparature;

    return isThereEnoughOxygen ? basicTime : basicTime * 2;
  }

  public calculateHeatPerTick(isThereEnoughOxygen: boolean = true) {
    const basicHeat =
      this.treeSpecies.burningTemparature / this.currentHumidity;

    return isThereEnoughOxygen ? basicHeat : basicHeat / 2;
  }

  dry() {
    if (this.currentHumidity > 0.05) {
      this.currentHumidity -= 0.01;
    }
  }
}
