import React, { useState } from 'react';

const TodoForm = (props) => {
    const [newItemText, setNewItemText] = useState("");

    return (
        <div>
            <input 
                type="text"
                name="input-text"
                placeholder="Add item"
                value={newItemText}
                onChange={e => setNewItemText(e.target.value)}
            />
            <button onClick={() => {
                const newTodo = {
                    item: newItemText,
                    completed: false,
                    id: new Date().getTime()
                };
                props.dispatch({ type: "ADD_TODO", payload: newTodo});
                setNewItemText("");
            }
            }>Add</button>
            <button onClick={() => {
                props.dispatch({type: "CLEAR_COMPLETED"})
            }}>Clear completed</button>

        </div>
    )
}

export default TodoForm;