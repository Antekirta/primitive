import Tree, { TREES } from "./Tree";

class ForestFactory {
  static provideTree() {
    return Tree.createTree(TREES.birch);
  }
}

export default ForestFactory;
