import React, { createContext, useEffect, useReducer } from 'react'
import { videoReducer } from '../reducers/videoReducer';
import { getVideos } from '../components/crudFunctions/videoFunctions'

export const VideoContext = createContext();
const initState = {}

const VideoContextProvider = (props)=>{
    const [videos, dispatch] = useReducer( videoReducer, initState)
    useEffect(()=>{
        getVideos(dispatch)
    },[])
    return(
        <VideoContext.Provider value={{videos, dispatch}}>
            {props.children}
        </VideoContext.Provider>
    )
}

export default VideoContextProvider