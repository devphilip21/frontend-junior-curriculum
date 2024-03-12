interface StartTransition {
  (callback: () => void): void;
}

export function useTransition(): [boolean, StartTransition] {
  return [
    false,
    () => {},
  ];
}
