export const quizReducer = (state, action)=>{
    switch(action.type){
        case "FETCH_QUIZES":
            console.log(action.quizes)
            return{
                ...state,
                quizes: action.quizes
            }
        default:
            return state;    
    }
}