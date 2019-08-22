import { eventBus, EventBus } from "./../../utils/event-bus";
import { CUSTOM_EVENTS } from "./../../registry/CUSTOM_EVENTS";
import Tree from "./Tree";

export default class TreeBranch extends EventBus {
  constructor(treeSpecies: Tree, weight: number) {
    super()
    
    this.treeSpecies = treeSpecies;
    this.weight = weight;

    this.dryTimerId = eventBus.on(CUSTOM_EVENTS.TICK, this.dry.bind(this));
  }

  dryTimerId: string;

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

  public light() {
    
  }

  public isDry() {
    return this.currentHumidity === 0.05;
  }

  private dry() {
    if (this.currentHumidity > 0.05) {
      this.currentHumidity -= 0.005;
    } else {
      eventBus.off(this.dryTimerId);
    }
  }

  private burn () {
    if (this.weight > 0.02) {
      this.weight -= this.weight * 0.01 
    }  
  }
}
