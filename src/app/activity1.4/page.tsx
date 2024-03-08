"use client"

import React from 'react'
import { useState } from 'react';

export default function page() {
    const [size, setSize] = useState(1);
    const [color, setColor] = useState('#000');
  
    const growAndChangeColor = () => {
      setSize(size * 2);
      setColor(getRandomColor());
    };
  
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
  
    return (
      <div className="flex justify-center items-center h-screen">
        <button
          onClick={growAndChangeColor}
          style={{ fontSize: `${size}rem`, backgroundColor: color }}
          className="px-6 py-3 text-white rounded-3xl shadow-lg transition-all duration-300 ease-in-out hover:translate-y-1"
        >
          GROW
        </button>
      </div>
    );
}
