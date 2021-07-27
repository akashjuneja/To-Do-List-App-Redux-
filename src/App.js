import {useState} from 'react';
import {sendData,fetchAPIdata} from './actions/index'
import {useDispatch} from 'react-redux'
import './App.css';
import List from './components/List';
//import FetchData from './components/FetchData';

function App() {
  const [name, setName] = useState("");
 
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
     <button onClick={()=>{
               dispatch(fetchAPIdata())
            }}>Fetch All Data</button>  
     <List/>
    
    </div>
  );
}

export default App;
