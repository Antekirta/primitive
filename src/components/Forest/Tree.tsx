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
    toughness: number,
    flexibility: number,
    burningHeatQuantity: number,
    humidity: number
  ) {}

  static createTree(name: TREES) {
    let toughness, flexibility, burningHeatQuantity, humidity;

    switch (name) {
      case TREES.birch:
        break;
    }
  }
}

export default Tree;
