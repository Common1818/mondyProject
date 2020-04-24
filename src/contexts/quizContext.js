import React, { createContext, useReducer, useEffect } from 'react'
import { quizReducer } from "../reducers/quizReducer"
import { getQuizes } from '../components/crudFunctions/quizesFunctions'

export const QuizContext = createContext();
const initState={}

const QuizContextProvider =(props)=>{
    const [quizes, dispatch] = useReducer(quizReducer, initState)
    useEffect(()=>{
        getQuizes(dispatch)
    },[])
    return(
        <QuizContext.Provider value={{quizes, quizDispatch:dispatch}}>
            {props.children}
        </QuizContext.Provider>
    )
}

export default QuizContextProvider