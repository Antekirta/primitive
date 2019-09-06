import { TREE_PARTS } from './../Tree';
import { eventBus, EventBus, IEventBus } from "../../../../utils/event-bus";
import { CUSTOM_EVENTS } from "../../../../registry/CUSTOM_EVENTS";
import Tree from "../Tree";

enum TREE_PART_EVENTS {
  PRODUCE_HEAT = "produce-heat",
  DESTROYED = "destroyed"
}

export interface ITreePart extends IEventBus {
  calculateTimeToBurn: () => number;
  calculateHeatPerTick: () => number;
  light: () => void;
}

export default class TreePart extends EventBus implements ITreePart {
  constructor(treePart: TREE_PARTS, parentTree: Tree, weight: number) {
    super();

    this.treePart = treePart
    this.parentTree = parentTree;
    this.weight = weight;
    this.currentHumidity = this.parentTree.humidity;

    this.dryTimerId = eventBus.on(CUSTOM_EVENTS.TICK, this.dry.bind(this));
  }
  
  private treePart : TREE_PARTS

  private dryTimerId: string;

  private parentTree: Tree;
  weight: number; // kg
  private currentHumidity: number; // percent

  get treePartGetter () {
    return this.treePart
  }

  get density(): number {
    return this.parentTree.density as number;
  }

  get treeSpecies() {
    return this.parentTree.name;
  }

  get localEvents() {
    return TREE_PART_EVENTS;
  }

  public calculateTimeToBurn(isThereEnoughOxygen: boolean = true): number {
    const basicTime =
      (this.weight * (this.parentTree.density as number)) /
      this.parentTree.burningTemparature;

    return isThereEnoughOxygen ? basicTime : basicTime * 2;
  }

  public calculateHeatPerTick(isThereEnoughOxygen: boolean = true): number {
    const basicHeat = Math.round(
      this.parentTree.burningTemparature / this.currentHumidity
    );

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

      this.emit(TREE_PART_EVENTS.PRODUCE_HEAT, {
        heatAmount: this.calculateHeatPerTick()
      });
    } else {
      this.destroy();
    }
  }

  private destroy() {
    this.emit(TREE_PART_EVENTS.DESTROYED);
  }
}
