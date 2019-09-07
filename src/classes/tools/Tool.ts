import { iTool } from "./interface";
import { TOOLS } from "./TOOLS";
import { TOOL_CONDITION } from "./TOOL_CONDITION";
import { TOOL_EVENTS } from "./TOOL_EVENTS";
import { EventBus } from "utils/event-bus";

export { TOOLS, TOOL_CONDITION, TOOL_EVENTS };

export class Tool extends EventBus implements iTool {
  constructor(
    public name: TOOLS,
    public toughness: number,
    public sharpness: number,
    public weight: number,
    private _condition: number = 1000
  ) {
    super();

    this.name = name;
    this.toughness = toughness;
    this.sharpness = sharpness;
    this.weight = weight;
    this._condition = _condition;
  }

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
