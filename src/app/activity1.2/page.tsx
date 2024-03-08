"use client";

import React from "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const isEven = count % 2 === 0;

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-3xl font-bold mb-4">Counter App</h1>
      <div className="mb-4">
        <span className="text-8xl font-semibold">{count}</span>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">
          Number is: {isEven ? "Even" : "Odd"}
        </p>
      </div>
      <div className="mb-4 gap-4 flex">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-400 rounded-md font-bold hover:bg-red-800 hover:text-white transition"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-400 rounded-md font-bold hover:bg-green-800 hover:text-white transition"
        >
          Increment
        </button>
      </div>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-400 rounded-md font-bold hover:bg-blue-800 hover:text-white transition"
      >
        Reset
      </button>
    </div>
  );
}
