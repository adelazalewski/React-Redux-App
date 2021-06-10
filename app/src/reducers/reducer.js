const initialState = {
    wordInfo: [],
    loading: false,
    error:"",
}
export const reducer = (state=initialState, action) => {
    switch(action.type){
        case "FETCHING_WORD_INFO_START":
              return {...state, loading: true};
        case "FETCHING_WORD_INFO_SUCCESS":
            return{...state, loading: false, wordInfo: action.payload
            };
        case "FETCHING_WORD_INFO_ERROR":
            return{...state, loading: false, error: action.payload}
        default:
        return state
    }
}
