import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { decerement, increment, reset } from './counterSlice'





function App(){

    var count = useSelector((state)=>{return state.counter.value})
    var dispatch = useDispatch()
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=> dispatch(increment()) }>Increment</button>
            <button onClick={()=>dispatch(decerement())}>Decrement</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>

        </div>
    )
}

export default App 