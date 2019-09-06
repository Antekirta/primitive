import _random from "lodash/random";
import { Tool, TOOLS } from "../../Tool/Tool";
import { TREES } from "./registry/TREES";
import { TREE_PARTS } from "./registry/TREE_PARTS";
import TreeBranch from "./tree-parts/TreeBranch";
import TreeTrunk from "./tree-parts/TreeTrunk";
import TreePart from "./tree-parts/TreePart";

export { TREES, TREE_PARTS };

const treePartsClassMap: { [key in TREE_PARTS]: typeof TreePart } = {
  [TREE_PARTS.TRUNK]: TreeTrunk,
  [TREE_PARTS.BRANCH]: TreeBranch,
  [TREE_PARTS.ROOTS]: TreeBranch,
  [TREE_PARTS.TWIGS]: TreeBranch,
  [TREE_PARTS.LEAVES]: TreeBranch
};

/**
 * TODO Properly describe thee characteristics like density and humidity
 */

class Tree {
  private constructor(
    name: string,
    density: number, // kg/m3
    burningTemparature: number,
    humidity: number // percent
  ) {
    this.name = name;
    this.density = density;
    this.burningTemparature = burningTemparature;
    this.humidity = humidity;
  }

  name: string = "";
  density: number = 0;
  burningTemparature: number = 0;
  humidity: number = 0;

  static getTreePart(tree: Tree, treePart: TREE_PARTS, tool: Tool): TreeBranch {
    return new treePartsClassMap[treePart](treePart, tree, _random(10, 30));
  }

  static getTree(name: TREES) {
    let density = 0,
      burningTemperature = 0,
      humidity = 0;

    switch (name) {
      case TREES.birch:
        setTreeParams(650, 816, 0.72);
        break;
      case TREES.beech:
        setTreeParams(650, 1044, 0.64);
        break;
      case TREES.elm:
        setTreeParams(1000, 1000, 1000);
        break;
      case TREES.pearTree:
        setTreeParams(1000, 1000, 1000);
        break;
      case TREES.oak:
        setTreeParams(1000, 1000, 1000);
        break;
      case TREES.spruce:
        setTreeParams(800, 800, 1000);
        break;
      case TREES.willow:
        setTreeParams(1000, 1000, 1000);
        break;
      case TREES.chestnut:
        setTreeParams(1000, 1000, 1000);
        break;
      case TREES.maple:
        setTreeParams(1000, 1000, 1000);
        break;
      case TREES.linden:
        setTreeParams(1000, 1000, 1000);
        break;
      case TREES.hazel:
        setTreeParams(1000, 1000, 1000);
        break;
      case TREES.lilac:
        setTreeParams(1000, 1000, 1000);
        break;
      case TREES.pine:
        setTreeParams(1000, 1000, 1000);
        break;
      case TREES.appleTree:
        setTreeParams(1000, 1000, 1000);
        break;
      case TREES.ash:
        setTreeParams(1000, 1000, 1000);
        break;
      default:
        throw new Error(`There is no ${name} tree species!`);
    }

    return new Tree(name, density, burningTemperature, humidity);

    function setTreeParams(
      densityToSet: number,
      burningTemperatureToSet: number,
      humidityToSet: number
    ) {
      density = densityToSet;
      burningTemperature = burningTemperatureToSet;
      humidity = humidityToSet;
    }
  }
}

export default Tree;
