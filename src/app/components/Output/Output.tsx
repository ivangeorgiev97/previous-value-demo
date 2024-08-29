"use client";

import { usePreviousValue } from "@/app/hooks/usePreviousValue";
import { useEffect } from "react";

export const Output = ({ outputVal }: { outputVal: string }) => {
  const previousValue = usePreviousValue(outputVal);

  useEffect(() => {
    previousValue &&
      previousValue !== outputVal &&
      alert("Value is not the same");
  }, [outputVal]);

  return <></>;
};
