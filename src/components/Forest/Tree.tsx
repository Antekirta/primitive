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
  density: Number = 0;
  burningTemparature: number = 0;
  humidity: number = 0;

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
        setTreeParams(1000, 1000, 1000);
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
