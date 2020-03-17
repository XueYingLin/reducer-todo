//reducer functions take in two objects and return a single object
//The first arg is the current state
// The second arg is an action object
//Action objects_must_have a 'type property (always a string) to inform the reducer what happened
//the returned object is a new state object (think immutability)

export const initialState = {
    todos: [{item: "First Todo", completed: true, id: 1}],
    newTodoText: ""
}

export const todoReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'TOGGLE_COMPLETE':
            const newTodos = [...state.todos];
            for (const todo of newTodos) {
                if (todo.id === action.payload.todoId) {
                    todo.completed = !todo.completed;
                }
            }
            return {
                ...state,
                todos: newTodos,
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter(t => !t.completed)
            }
        default:
            return state;
    }

}