import React from 'react';
import { fetchAPIdata } from '../actions';
import {useDispatch,useSelector} from 'react-redux'

const FetchData = () => {
     const dispatch = useDispatch()
     const todos = useSelector(state => state.todo)
     console.log(todos)
    return (
        <div>
            <button onClick={()=>{
               dispatch(fetchAPIdata())
            }}>Fetch All Data</button>

            {todos.map((todo,index)=>{
                return(
                <p key={index}>{todo.title}</p>
                )
            })}
        </div>
    );
}

export default FetchData;
