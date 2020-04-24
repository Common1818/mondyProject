import React, { createContext, useReducer, useEffect } from 'react'
import { topicReducer } from '../reducers/topicReducer';
import { getTopics } from '../components/crudFunctions/topicsFunctions'

export const TopicContext = createContext();
const initState={}

const TopicContextProvider = (props)=>{
    const [topics, dispatch] = useReducer(topicReducer, initState)
    useEffect(()=>{
        getTopics(dispatch)
    },[])
    return(
        <TopicContext.Provider value={{topics, dispatch}}>
            {props.children}
        </TopicContext.Provider>
    )
}

export default TopicContextProvider