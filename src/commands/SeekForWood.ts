import { ICommand } from "./Command";
import ForestFactory from "../components/Forest/ForestFactory";

interface ICollectWoodCommand {
  wood: string; // TODO add enum wood
  tool: object; // TODO add Tool class instance
}

class SeekForWood implements ICommand {
  // TODO add enum wood, add Tool class instance
  execute(wood: string, tool: object) {
    console.log(ForestFactory.provideTree(), wood, tool);
  }
}

export default SeekForWood;
