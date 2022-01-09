import React, { useEffect } from 'react'
// function component
import { useSelector, useDispatch } from 'react-redux'

// class component
// import { connect } from 'react-redux'

import { fetchTodos } from './store/actions'

function App() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return <p>{JSON.stringify(todos)}</p>
}

export default App
