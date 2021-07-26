const todoreducer=(state=[],action)=>{
    console.log(state,action)
    if(action.type==="ADD_TASK"){
         return[...state,action.payload]
    }else if(action.type==="REMOVE_TASK"){
          return state.filter((todo,index)=>index!==action.payload)
    }else{
        return state;
    }

}

export default todoreducer;