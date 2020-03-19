import React, { useState, useReducer } from 'react';
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { todoReducer, initialState } from "../reducers/todoReducer";

const TodoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div>
            {
            state.todos.map(todo => 
                <Todo dispatch={dispatch} item={todo.item} completed={todo.completed} id={todo.id} />)
            }
            <TodoForm dispatch={dispatch} />
        </div>
    );
}

export default TodoList;