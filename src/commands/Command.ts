/**
 * @returns task name (like collection wood)
 */
export interface ICommand {
  execute: (...args: any) => void;
}
