interface iToolCondition {
  [key: string]: {
    name: string;
    toleratedCondition: number;
    chancesToBreak: number;
  };
}

export const TOOL_CONDITION: iToolCondition = {
  EXCELLENT: {
    name: "EXCELLENT",
    toleratedCondition: 850,
    chancesToBreak: 0.01
  },
  GOOD: {
    name: "GOOD",
    toleratedCondition: 850,
    chancesToBreak: 0.05
  },
  WEARED: {
    name: "WEARED",
    toleratedCondition: 850,
    chancesToBreak: 0.1
  },
  ABOUT_TO_BROKE: {
    name: "ABOUT_TO_BROKE",
    toleratedCondition: 850,
    chancesToBreak: 0.2
  },
  BROKEN: {
    name: "BROKEN",
    toleratedCondition: 850,
    chancesToBreak: 0.01
  }
};
