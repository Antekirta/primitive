import Tree, { TREES } from "./Tree";

class ForestFactory {
  static provideTree(treeSpecies: TREES) {
    return Tree.getTree(TREES.birch);
  }
}

export default ForestFactory;
