import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[{id: 1, text: 'this is todo text'}]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            const todo = {
                id: nanoid(),
                text: 'new todo text'
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id
            )
        },

        updateTodo: (state, action) =>{
            state.todos.map((todo) => todo.id === action.payload.id ? todo.text = action.payload.text : todo)
        }
    }
})

export const {addTodo, deleteTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer