import { TREES, TREE_PARTS } from "classes/resources/wood/tree/Tree";
import TreeBranch from "classes/resources/wood/tree/tree-parts/TreeBranch";
import { FoldingPanel } from "components/ui-kit/folding-panel/folding-panel";
import React from "react";

export interface IWoodStorageProps {
  wood: {
    [key in TREE_PARTS]: Array<TreeBranch>;
  };
  [key: string]: any;
}

export const WoodStorage = (props: IWoodStorageProps) => {
  const { wood } = props;

  return (
    <div className={`storage wood-storage ${props.className}`}>
      <header className="storage__header wood-storage__header">
        <span>Wood</span>
      </header>

      <FoldingPanel>
        <table className="storage__table">
          <thead>
            <tr>
              <td></td>
              {Object.values(TREE_PARTS).map((treePart: TREE_PARTS) => {
                return <td key={treePart}> {treePart} </td>;
              })}
            </tr>
          </thead>

          <tbody>
            {Object.values(TREES).map((tree: TREES) => {
              return (
                <tr key={tree}>
                  <td> {tree} </td>
                  {Object.values(TREE_PARTS).map((treePart: TREE_PARTS) => {
                    const treeParts = wood[treePart] || [];

                    let thisCellWood = treeParts.filter(pieceOfWood => {
                      return pieceOfWood.treeSpecies === tree;
                    });

                    return <td key={treePart}>{thisCellWood.length}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </FoldingPanel>
    </div>
  );
};
