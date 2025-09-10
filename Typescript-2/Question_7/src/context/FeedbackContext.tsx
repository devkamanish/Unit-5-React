
import { useState, type ReactNode, createContext } from "react";
import type { FeedbackData } from "../types/Feedback";

export interface FeedbackContextType {
    feedback : FeedbackData;
    setFeedback: (data : FeedbackData)=> void;

}

const initialState = {
    name : "",
    email : "",
    rating : 0,
    feedback: "",
}


export const FeedbackContext = createContext<FeedbackContextType>({
    feedback : {name:"",email:"",rating : 0, feedback : ""},
    setFeedback : ()=>{},
}) 


const FeedbackProvider = ({children}:{children:ReactNode}) => {

    const [feedback, setFeedback] = useState<FeedbackData>(initialState)

  return (
    <FeedbackContext.Provider value={{feedback,setFeedback}}>
        {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackProvider



