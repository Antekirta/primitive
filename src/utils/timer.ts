import { eventBus } from "./event-bus";
import { CUSTOM_EVENTS } from "../registry/CUSTOM_EVENTS";

// @ts-ignore
let tickInterval = window.tick || 1000;

let timerId = setTimeout(function tick() {
  eventBus.emit(CUSTOM_EVENTS.TICK);

  timerId = setTimeout(tick, tickInterval); // (*)
}, tickInterval);
