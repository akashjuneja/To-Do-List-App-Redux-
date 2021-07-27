import React from 'react';
import {useSelector ,useDispatch} from 'react-redux'
import { removeData } from '../actions';
const List = () => {
     const todos = useSelector(state => state.todo)
     const dispatch = useDispatch()
    return (
        <div>
            {todos.map((todo,index)=>{
      return (
          <>
        <p key={index}>{todo.title}</p>
        <button style={{display:"inline-block"}} onClick={()=>{
           dispatch(removeData(index))
        }}>Remove Task</button>
        </>
      )
    })}
        </div>
    );
}

export default List;
