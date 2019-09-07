import React from "react";
import { TOOLS } from "classes/tools/Tool";
import { iTool } from "classes/tools/interface";

interface iProps {
  tools: {
    [key in TOOLS]: Array<iTool>;
  };
}

export const ToolStorage: React.FC<iProps> = props => {
  return (
    <div className="tool-storage">
      <table>
        {Object.values(TOOLS).map(toolName => {
          return (
            <tr>
              <td>{toolName}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
