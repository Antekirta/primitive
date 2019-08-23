import { EventBus, IEventBus } from "./../../utils/event-bus";

export enum TOOLS {
  BARE_HANDS = "bare-hands",
  STICK = "stick",
  STONE_AXE = "stone-axe",
  BRONZE_AXE = "bronze-axe",
  STEEL_AXE = "steel-axe"
}

export interface ITool extends IEventBus {
  toughness: number;
  sharpness: number; // 0 to 100
  weight: number;
}

export class Tool extends EventBus implements ITool {
  constructor(name: TOOLS, toughness: number, sharpness: number, weight: number) {
    super();

    this.name = name;
    this.toughness = toughness;
    this.sharpness = sharpness;
    this.weight = weight;
  }

  name: TOOLS;
  toughness: number;
  sharpness: number;
  weight: number;
}
