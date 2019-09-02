import Tree, { TREES } from "./tree/Tree";

class ForestFactory {
  static provideTree(treeSpecies: TREES) {
    return Tree.getTree(treeSpecies);
  }
}

export default ForestFactory;
