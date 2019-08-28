import { eventBus } from "./event-bus";
import { CUSTOM_EVENTS } from "../registry/CUSTOM_EVENTS";

// @ts-ignore
let tickInterval = window.tick || 1000;

export const startTimer = () => {
  let timerId = setTimeout(function tick() {
    eventBus.emit(CUSTOM_EVENTS.TICK);

    timerId = setTimeout(tick, tickInterval); // (*)
  }, tickInterval);
};

export const delayForNTicks = (func: Function, n: number): void => {
  n = Math.ceil(n);

  let i = 0;

  const delayId = eventBus.on(CUSTOM_EVENTS.TICK, () => {
    i++;

    if (i === n) {
      func();

      eventBus.off(delayId);
    }
  });
};
