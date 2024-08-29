"use client";

import { ChangeEvent, useState } from "react";
import { Output } from "./components/Output/Output";

export default function Home() {
  const [val, setVal] = useState<string>("");
  const [finalVal, setFinalVal] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input type="text" value={val} onChange={handleChange} />
      <button
        onClick={() => {
          setFinalVal(val + "");
        }}
      >
        Check
      </button>
      <Output outputVal={finalVal} />
    </main>
  );
}
