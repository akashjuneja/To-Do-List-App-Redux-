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

export {sendData,removeData}