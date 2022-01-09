import { SET_TODOS } from './constants'

const initialState = {
    todos: [],
}

function reducer(state = initialState, action) {
    if (action.type === SET_TODOS) {
        return { ...state, todos: action.payload }
    }
    return state
}

export default reducer
