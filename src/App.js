import {useState} from 'react';
import {sendData} from './actions/index'
import {useSelector,useDispatch} from 'react-redux'
import './App.css';

function App() {
  const [name, setName] = useState("");
  const todos = useSelector(state => state.todo)
  const dispatch = useDispatch();
  return (
    <div className="App">
     <h1>To Do List</h1>

     <input type="text" 
     name="name"
     placeholder="enter Your Name"
     onChange={(e)=>{
       setName(e.target.value)
     }}
     val={name}/>


    <button onClick={()=>{
     dispatch(sendData(name))
    }  
    }>Add Tasks</button>

    {todos.map((todo,index)=>{
      return (
        <p key={index}>{todo}</p>
      )
    })}
    </div>
  );
}

export default App;
