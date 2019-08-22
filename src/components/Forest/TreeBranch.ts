import { eventBus, EventBus, IEventBus } from "./../../utils/event-bus";
import { CUSTOM_EVENTS } from "./../../registry/CUSTOM_EVENTS";
import Tree from "./Tree";

export const enum TREE_BRANCH_EVENTS {
  PRODUCE_HEAT = "produce-heat",
  DESTROYED = "destroyed"
}

export interface ITreeBranch extends IEventBus {
  calculateTimeToBurn: () => number;
  calculateHeatPerTick: () => number;
  light: () => void;
}

export default class TreeBranch extends EventBus implements ITreeBranch {
  constructor(treeSpecies: Tree, weight: number) {
    super();

    this.treeSpecies = treeSpecies;
    this.weight = weight;

    this.dryTimerId = eventBus.on(CUSTOM_EVENTS.TICK, this.dry.bind(this));
  }

  dryTimerId: string;

  treeSpecies: Tree;
  weight: number; // kg
  currentHumidity: number = this.treeSpecies.humidity; // percent

  public calculateTimeToBurn(isThereEnoughOxygen: boolean = true): number {
    const basicTime =
      (this.weight * (this.treeSpecies.density as number)) /
      this.treeSpecies.burningTemparature;

    return isThereEnoughOxygen ? basicTime : basicTime * 2;
  }

  public calculateHeatPerTick(isThereEnoughOxygen: boolean = true): number {
    const basicHeat =
      this.treeSpecies.burningTemparature / this.currentHumidity;

    return isThereEnoughOxygen ? basicHeat : basicHeat / 2;
  }

  public light() {
    eventBus.on(CUSTOM_EVENTS.TICK, this.burn.bind(this));
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

  private burn() {
    if (this.weight > 0.02) {
      this.weight -= this.weight * 0.01;

      this.emit(TREE_BRANCH_EVENTS.PRODUCE_HEAT, {
        heatAmount: this.calculateHeatPerTick()
      });
    } else {
      this.destroy();
    }
  }

  private destroy() {
    this.emit(TREE_BRANCH_EVENTS.DESTROYED);
  }
}
