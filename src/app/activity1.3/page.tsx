"use client";
import React from "react";
import { useState } from "react";

type CalculatorProps = {};

export default function page({}: CalculatorProps) {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [sum, setSum] = useState<number>(0);

  const handleNum1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setNum1(value);
    setSum(value + num2);
  };

  const handleNum2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setNum2(value);
    setSum(num1 + value);
  };

  const reset = () => {
    setNum1(0);
    setNum2(0);
    setSum(0);
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-3xl font-bold mb-10">Simple Calculator</h1>
      <div className="mb-4 flex flex-col items-center gap-4">
        <input
          type="number"
          value={num1}
          onChange={handleNum1Change}
          className="px-4 py-2 border border-gray-300 rounded-md "
        />
        <span>+</span>
        <input
          type="number"
          value={num2}
          onChange={handleNum2Change}
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
        <span>=</span>
        <span className="text-8xl font-semibold">{sum}</span>
      </div>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-400 hover:bg-blue-800 transition font-bold hover:text-white rounded-md"
      >
        Reset
      </button>
    </div>
  );
}
