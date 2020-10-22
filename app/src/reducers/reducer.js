const initialState = {
    count: 0,
    wordInfo: 
    {
        word: "",
        pronunciation: {all: ""},
        results: [{
            definition: "",
            examples: [""],
            partOfSpeech: "",
            synonyms: [""]
        }],

    },
    loading: false,
    error:"",

}
export const reducer = (state=initialState, action) => {
    switch(action.type){
        case "COUNT_PLUS_ONE":
            return{...state, count: state.count + 1}
        case "FETCHING_WORD_INFO_START":
              return {...state, loading: true};
        case "FETCHING_WORD_INFO_SUCCESS":
            return{...state, loading: false, wordInfo: {...state.wordInfo,
                word: action.payload,
                pronunciation: {all: action.payload},
                results: [{
                    definition: action.payload,
                    examples: [action.payload],
                    partOfSpeech: action.payload,
                    synonyms: [action.payload]
                }],
            }};
        case "FETCHING_WORD_INFO_ERROR":
            return{...state, loading: false, error: action.payload}
    default:
        return state
    }
}