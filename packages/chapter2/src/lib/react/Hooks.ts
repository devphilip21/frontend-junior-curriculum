export function useState<T = any>(initialState: T) {
  return [initialState, (state: T) => {

  }];
}
