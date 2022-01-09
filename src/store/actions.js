import { SET_TODOS } from './constants'

// Action creator
function setTodos(todos) {
    return { type: SET_TODOS, payload: todos }
}

export function fetchTodos() {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                return response.json()
            })
            .then(data => {
                dispatch(setTodos(data))
            })

            .catch(err => {
                console.log(err)
            })
    }
}
