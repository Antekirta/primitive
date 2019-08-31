import React from "react";
import { TREES, TREE_PARTS } from "../../Forest/Tree";
import TreeBranch from "../../Forest/TreeBranch";
import { FoldingPanel } from "../../ui-kit/folding-panel/folding-panel";

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
                    const someWood = wood[treePart];

                    if (someWood) {
                      const pieceOfWood = someWood[0];

                      if (pieceOfWood && pieceOfWood.treeSpecies === tree) {
                        return <td key={treePart}>{wood[treePart].length}</td>;
                      }
                    }

                    return <td key={treePart}>0</td>;
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