export const fetchData = ()=>{
    return async(dispatch)=>{
        dispatch({type : "fetch_start"})

        try{
            let response =await fetch("https://jsonplaceholder.typicode.com/todos/1")
            let res = await response.json()
            dispatch({type:"fetch_success",payload:res})
        }catch(error){
            dispatch({type:"error_fetch", error: "failed to fetch"} )
        }
    }
}


