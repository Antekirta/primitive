import { CUSTOM_EVENTS } from "registry/CUSTOM_EVENTS";
import { setPersonOccupation } from "store/actions/people-actions";
import { addTreeBranch } from "store/actions/wood-actions";
import { Tool } from "classes/tools/Tool";
import { ICommand } from "commands/Command";
import ForestFactory from "components/Forest/ForestFactory";
import Tree, { TREES, TREE_PARTS } from "classes/resources/wood/tree/Tree";
import MediatorToolMaterial from "mediators/tool-material";
import { store } from "index";
import Activity from "helpers/Activity";
import { eventBus } from "utils/event-bus";
import { delayForNTicks } from "utils/timer";
import TreePart from "classes/resources/wood/tree/tree-parts/TreePart";

interface iGetWoodParams {
  treeSpecies: TREES;
  treePart: TREE_PARTS;
  tool: Tool;
}

class GetWood implements ICommand {
  constructor(personId: string, params: iGetWoodParams) {
    this.personId = personId;
    this.params = params;

    this.tree = ForestFactory.provideTree(this.params.treeSpecies);

    this.treeBranch = Tree.getTreePart(
      this.tree,
      this.params.treePart,
      this.params.tool
    );

    this.timeToPerformCommand =
      this.treeBranch.density /
      (this.params.tool.sharpness + this.params.tool.toughness);
  }

  personId: string;
  params: iGetWoodParams;

  private tree: Tree;
  // How many ticks should pass before success action (in terms of redux) is fired
  // could be placed in more general class
  private timeToPerformCommand: number;
  private treeBranch: TreePart;

  execute(): void {
    this.damageTool();

    store.dispatch(addTreeBranch(this.treeBranch, this.timeToPerformCommand));

    store.dispatch(
      setPersonOccupation(
        this.personId,
        new Activity(
          `Looking for a ${this.params.treePart} of ${this.params.treeSpecies}`,
          true
        ),
        this.timeToPerformCommand
      )
    );
  }

  /**
   * The tool will be damaged at every tick
   */
  private damageTool() {
    const toolWoodMediator = new MediatorToolMaterial(
      this.params.tool,
      this.tree
    );

    const damageId = eventBus.on(CUSTOM_EVENTS.TICK, () => {
      this.params.tool.damage(toolWoodMediator.calculateDeteriorationPerTick());
    });

    delayForNTicks(() => {
      eventBus.off(damageId);
    }, this.timeToPerformCommand);
  }
}

export { GetWood };
