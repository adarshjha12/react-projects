import React from 'react';
import TodoList from './features/todos/TodoList';
import './App.css'

function App() {
  return (
    <div className="h-full border rounded-md p-6">
      <TodoList />
    </div>
  );
}

export default App;
