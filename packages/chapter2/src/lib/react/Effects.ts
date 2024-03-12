import { Fiber } from "./Fiber";

export interface FiberEffect {
  key: string;
  task: (fiber: Fiber) => void;
}

export function useState<T = any>(initialState: T): [T, (newState: T) => void] {
  return [initialState, (state) => {

  }];
}
