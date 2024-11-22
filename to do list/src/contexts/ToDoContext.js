import { createContext, useContext } from "react";

const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'first todo',
            completed: false
        }
    ],
    addTodo: (todo) =>{},
    updateTodo: (id, todo) =>{},
    deleteTodo: (id) =>{}
})

export const TodoProvider = ToDoContext.Provider

export default useTodo = () => {
    return useContext(ToDoContext)
} 