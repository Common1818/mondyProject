export const topicReducer = (state, action)=>{
    switch(action.type){
        case 'FETCH_TOPICS':
            console.log(action.topics)
            return {
                ...state,
                topics:action.topics
            }
        
        default:
            return state;    
    }
}