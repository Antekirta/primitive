import Tree from "./Tree";

class ForestFactory {
  static provideTree() {
    return new Tree();
  }
}

export default ForestFactory;
