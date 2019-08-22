const uniqid = require("uniqid");

interface IEventHandler {
  id: string;
  func: Function;
}

interface IEvents {
  [key: string]: Array<IEventHandler>;
}

export interface IEventBus {
  on: (eventName: string, handler: Function) => string;
  emit: (eventName: string, data?: object) => void;
  off: (id: string) => void;
}

export class EventBus implements IEventBus {
  private events: IEvents = {};

  public on(eventName: string, handler: Function): string {
    let eventHandlers = this.events[eventName];

    const id = uniqid();

    if (eventHandlers) {
      eventHandlers.push({
        id: id,
        func: handler
      });
    } else {
      eventHandlers = [];

      eventHandlers.push({
        id: id,
        func: handler
      });
    }

    return id;
  }

  public emit(eventName: string, data?: object): void {
    const eventHandlers = this.events[eventName];

    if (eventHandlers) {
      eventHandlers.forEach(handler => handler.func(data));
    }
  }

  public off(id: string): void {
    Object.values(this.events).map(eventHandlers => {
      eventHandlers = eventHandlers.filter(handler => handler.id !== id);
    });
  }
}

export const eventBus = new EventBus();
