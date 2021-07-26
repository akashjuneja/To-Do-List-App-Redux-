const sendData =(state)=>{
    return{
        type:"ADD_TASK",
        payload: state
    }
}

const removeData=(state)=>{
    return{
        type:"REMOVE_TASK",
        payload:state
    }
}

export {sendData,removeData}