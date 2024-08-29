import { useEffect, useRef } from "react";

export const usePreviousValue = <T,>(previousValue: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = previousValue;
  });
  return ref.current;
};
