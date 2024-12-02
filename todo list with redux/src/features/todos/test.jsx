import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../todoSlice';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault()
      dispatch(addTodo(newTodo));
      setNewTodo('');
  };

  const handleEditTodo = (id, text) => {
    setIsEditing(id);
    setEditText(text);
  };

  const handleSaveEdit = (id) => {
      dispatch(updateTodo({ id, text: editText }));
      setIsEditing(null);
    }
  

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <form action="" onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a task"
        />
        <button type='submit'>Add</button>
        </form>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {isEditing === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(todo.id)}>Save</button>
                <button onClick={() => setIsEditing(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <button onClick={() => handleEditTodo(todo.id, todo.text)}>
                  Edit
                </button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;