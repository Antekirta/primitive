import Tree, { TREES } from "classes/resources/wood/tree/Tree";

class ForestFactory {
  static provideTree(treeSpecies: TREES) {
    return Tree.getTree(treeSpecies);
  }
}

export default ForestFactory;
