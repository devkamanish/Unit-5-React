import { useState , useEffect , useReducer, act} from 'react'


const initialValue = {
  loading : false,
  data : [],
  error : null,
}


const fetchreducer = (state , action)=>{
  switch(action.type){
    case "fetch_start":
      return {...state, loading : true, error : ""}

    case "fetch_successfull":
      return {loading : false, data : action.payload, error :""}
    case "fetch_rejected" :
      return {loading : false , data : [] , error : action.payload};
    default :
    return state

  }
}


function App() {
 const [state , dispatch] = useReducer(fetchreducer , initialValue);

 useEffect(()=>{
  
   const fetchPost = async ()=>{
    dispatch({type:"fetch_start"})
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const res = await response.json()
        dispatch({type : "fetch_successfull", payload : res})
    }catch(err){
      dispatch({type : "fetch_rejected" , payload : err.message})
    }
   }
   
   fetchPost()
 },[])
  return (
   <>
    
    <div className='p-4  ' >
       <h1 className='text-2xl font-bold mb-4 ' >User posts from JSON api </h1>
       {state.loading && <p>Loading...</p>}
       {state.error && <p className='font-bold'>{state.error}</p>}
        <div>
          {state.data.map((post)=>(
            <div key={post.id} className='border-2 p-4 mb-1'>
               <p className=''>{post.title}</p>
               <p>{post.body}</p>
            </div>
          ))}
        </div>
    </div>
   </>
  )
}

export default App




