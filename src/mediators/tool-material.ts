import Tree from "classes/resources/wood/tree/Tree";
import { Tool } from "classes/Tool/Tool";

// add new materials here
type MaterialType = Tree;

export default class MediatorToolMaterial {
  constructor(tool: Tool, material: MaterialType) {
    this.tool = tool;
    this.material = material;
  }

  private tool: Tool;
  private material: MaterialType;

  public calculateDeteriorationPerTick() : number {
    const k = 1; // some misterious coefficient for today

    return (
      (this.material.density / (this.tool.toughness * this.tool.sharpness)) * k
    );
  }
}
