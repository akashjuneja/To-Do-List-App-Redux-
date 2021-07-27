
const sendData =(state)=>{
    return{
        type:"ADD_TASK",
        payload: state
    }
}

const removeData=(id)=>{
    return{
        type:"REMOVE_TASK",
        payload:id
    }
}

const fetchAPIdata=()=>{
   return (dispatch)=>{
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res)=>res.json())
      .then((data)=>{       
           return dispatch({
          type:"FETCH",
          payload:data
      })

      })
     
   }
}
export {sendData,removeData,fetchAPIdata}