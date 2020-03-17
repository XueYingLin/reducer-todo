import React from 'react';

const Todo = (props) => {

    return (
        <div onClick={e => props.dispatch({ type: "TOGGLE_COMPLETE", payload: {todoId: props.id}})}
             className={props.completed ? "completed" : ""}>{props.item}</div>
    );
}

export default Todo;