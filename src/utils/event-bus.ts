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
    const id = uniqid();

    if (this.events[eventName]) {
      this.events[eventName].push({
        id: id,
        func: handler
      });
    } else {
      this.events[eventName] = [];

      this.events[eventName].push({
        id: id,
        func: handler
      });
    }

    return id;
  }

  public emit(eventName: string, data?: object): void {
    const eventHandlers = this.events[eventName];

    if (this.events[eventName]) {
      this.events[eventName].forEach(handler => handler.func(data));
    }
  }

  public off(id: string): void {
    Object.keys(this.events).map(eventName => {
      this.events[eventName] = this.events[eventName].filter(
        handler => handler.id !== id
      );
    });
  }
}

export const eventBus = new EventBus();
