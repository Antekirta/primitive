import _random from "lodash/random";
import { Tool, TOOLS } from "../../Tool/Tool";
import TreeBranch from "./tree-parts/TreeBranch";
import TreeTrunk from "./tree-parts/TreeTrunk";
import TreePart from "./tree-parts/TreePart";

export enum TREES {
  birch = "birch",
  beech = "beech",
  elm = "elm",
  pearTree = "pearTree",
  oak = "oak",
  spruce = "spruce",
  willow = "willow",
  chestnut = "chestnut",
  maple = "maple",
  linden = "linden",
  hazel = "hazel",
  lilac = "lilac",
  pine = "pine",
  appleTree = "appleTree",
  ash = "ash "
}

export enum TREE_PARTS {
  TRUNK = "trunk",
  BRANCH = "branch",
  ROOTS = "roots",
  TWIGS = "twigs",
  LEAVES = "leaves"
}

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
    console.log('treePart: ', treePart)

    let suitableTools: Array<TOOLS> = [];

    if (toolIsSuitable()) {
      return new treePartsClassMap[treePart](treePart, tree, _random(10, 30));
    }

    throw new Error(`You need on of those tools: ${suitableTools}`);

    // TODO Refactor this in order to avoid hardcoding tools names in favor of calculationg by formula
    function toolIsSuitable(): boolean {
      if (tree.density > 950) {
        if ([TREE_PARTS.TRUNK].includes(treePart)) {
          suitableTools = [TOOLS.STEEL_AXE];
        } else if ([TREE_PARTS.BRANCH, TREE_PARTS.ROOTS].includes(treePart)) {
          suitableTools = [TOOLS.STONE_AXE, TOOLS.BRONZE_AXE, TOOLS.STEEL_AXE];
        }
      } else {
        if (
          [TREE_PARTS.TRUNK, TREE_PARTS.BRANCH, TREE_PARTS.ROOTS].includes(
            treePart
          )
        ) {
          suitableTools = [TOOLS.STONE_AXE, TOOLS.BRONZE_AXE, TOOLS.STEEL_AXE];
        }
      }

      return suitableTools.length === 0 || suitableTools.includes(tool.name);
    }
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
