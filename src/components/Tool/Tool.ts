import { TOOL_CONDITION } from "./TOOL_CONDITION";
import { EventBus, IEventBus } from "./../../utils/event-bus";

export { TOOL_CONDITION };

export enum TOOL_EVENTS {
  DESTROY = "DESTROY"
}

export enum TOOLS {
  BARE_HANDS = "bare-hands",
  STONE = "stone",
  STICK = "stick",
  STONE_AXE = "stone-axe",
  BRONZE_AXE = "bronze-axe",
  STEEL_AXE = "steel-axe",
  ROPE = "rope"
}

export interface ITool extends IEventBus {
  toughness: number; // 0 to 100
  sharpness: number; // 0 to 100
  weight: number;
  conditionStatus: string;
  damage: (damage: number) => void;
}

export class Tool extends EventBus implements ITool {
  constructor(
    name: TOOLS,
    toughness: number,
    sharpness: number,
    weight: number,
    _condition: number = 1000
  ) {
    super();

    this.name = name;
    this.toughness = toughness;
    this.sharpness = sharpness;
    this.weight = weight;
    this._condition = _condition;
  }

  name: TOOLS;
  toughness: number;
  sharpness: number;
  weight: number;
  private _condition: number;

  get conditionStatus(): string {
    if (this._condition >= TOOL_CONDITION.EXCELLENT.toleratedCondition) {
      return TOOL_CONDITION.EXCELLENT.name;
    } else if (this._condition >= TOOL_CONDITION.GOOD.toleratedCondition) {
      return TOOL_CONDITION.GOOD.name;
    } else if (this._condition >= TOOL_CONDITION.WEARED.toleratedCondition) {
      return TOOL_CONDITION.WEARED.name;
    } else if (
      this._condition >= TOOL_CONDITION.ABOUT_TO_BROKE.toleratedCondition
    ) {
      return TOOL_CONDITION.ABOUT_TO_BROKE.name;
    } else {
      return TOOL_CONDITION.BROKEN.name;
    }
  }

  public damage(damage: number): void {
    this._condition -= damage;
    this.sharpness -= damage;

    if (
      Math.random() < TOOL_CONDITION[this.conditionStatus].toleratedCondition
    ) {
      this.destroy();
    }
  }

  public destroy() {
    this.emit(TOOL_EVENTS.DESTROY);
  }
}
