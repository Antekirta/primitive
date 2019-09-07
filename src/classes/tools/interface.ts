import { TOOLS } from "classes/tools/Tool";
import { IEventBus } from "./../../utils/event-bus";

export interface iToolBaseParams {
  name: TOOLS;
  toughness: number; // 0 to 100
  sharpness: number; // 0 to 100
  weight: number;
}

export interface iToolGetters {
  readonly conditionStatus: string;
}

export interface iToolAPI {
  damage: (damage: number) => void;
}

export interface iTool
  extends iToolBaseParams,
    iToolGetters,
    iToolAPI,
    IEventBus {}
