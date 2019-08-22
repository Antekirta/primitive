import Tree from "./Tree";

export default class TreeBranch {
  constructor(treeSpecies: Tree) {
    this.treeSpecies = treeSpecies;

    const dryTimerId = setInterval(this.dry.bind(this), 1000)
  }

  treeSpecies: Tree;
  weight: number; // kg
  currentHumidity: number; // percent

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

  dry () {
      if (this.currentHumidity > 0.05) {
        this.currentHumidity -= 0.01
      }
  }
}
