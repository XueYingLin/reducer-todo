//reducer functions take in two objects and return a single object
//The first arg is the current state
// The second arg is an action object
//Action objects_must_have a 'type property (always a string) to inform the reducer what happened
//the returned object is a new state object (think immutability)

export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

export const todoReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'UPDSTE_TITLE':
            return {
                ...state,
                item: action.payload
            };
        case 'TOGGLE_COMPLETE':
            return {
                ...state,
                item: action.payload,
                completed: true
            };
        default:
            return state;
    }

}