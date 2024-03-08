"use client";

import React from "react";
import { useState } from "react";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }

export default function TodoPage() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');
  
    const handleAddTodo = () => {
      if (newTodo.trim() !== '') {
        const newTodoItem: Todo = {
          id: Date.now(),
          text: newTodo,
          completed: false
        };
        setTodos([...todos, newTodoItem]);
        setNewTodo('');
      }
    };
  
    const handleRemoveTodo = (id: number) => {
      setTodos(todos.filter(todo => todo.id !== id));
    };
  
    const handleToggleTodo = (id: number) => {
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ));
    };
  
    return (
      <div className="max-w-md mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Todo List</h1>
        <div className="mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter new todo"
            className="px-4 py-2 border border-gray-300 rounded-md mr-2"
          />
          <button onClick={handleAddTodo} className="px-4 py-2 bg-blue-500 text-white rounded-md">Add Todo</button>
        </div>
        <ul>
          {todos.map(todo => (
            <li key={todo.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
                className="mr-2"
              />
              <span className={todo.completed ? "line-through" : ""}>{todo.text}</span>
              <button onClick={() => handleRemoveTodo(todo.id)} className="ml-auto px-2 py-1 bg-red-500 text-white rounded-md">Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
}
