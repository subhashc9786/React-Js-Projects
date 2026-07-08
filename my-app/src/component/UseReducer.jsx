import React from 'react'
import { useReducer } from 'react'

export const UseReducer = () => {
    const initialState = {
        currentState: 0,
    }
    const reducerfunction = (state, action) => {
        switch (action.type) {
            case 'increase':
                return {
                    currentState: Math.min(state.currentState + 1, 10)
                }
            case 'decrease':
                return {
                    currentState: Math.max(state.currentState - 1, 0)
                }
            default: return state
        }
    }
    const [state, dispatch] = useReducer(reducerfunction, initialState);
    return (
        <div>
            <h1>{state.currentState}</h1>
            <button onClick={() => dispatch({ type: 'increase' })}>increase</button>
            <button onClick={() => dispatch({ type: 'decrease' })}>decrease</button>
        </div>
    )
}
