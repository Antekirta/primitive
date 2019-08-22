import Tree, { TREES } from "./Tree";

class ForestFactory {
  static provideTree() {
    return Tree.getTree(TREES.birch);
  }
}

export default ForestFactory;
