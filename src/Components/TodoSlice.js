import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice(
    {
        name: 'todos',
        initialState: {
            todos: [

            ],
            completedTodos: [

            ]
        },
        reducers: {
            addTodo: (state, action) => {
                state.todos.push(action.payload)
            },
            completedTodo: (state, action) => {
                const task = action.payload;
                state.todos = state.todos.filter(filtered => filtered.id !== task.id);
                state.completedTodos.push(task);

            },
            deletedTodo: (state, action) => {
                const id = action.payload;
                state.completedTodos = state.completedTodos.filter(filtered => filtered.id !== id);
            }

        }
    })

const todosReducer = todosSlice.reducer;

export const { addTodo, completedTodo, deletedTodo } = todosSlice.actions;

export default todosReducer;