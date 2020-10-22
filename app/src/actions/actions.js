import axios from "axios";

export const setCount = () => {
    return{type: "COUNT_PLUS_ONE"}
}

export const getWordInfo = (word) => (dispatch) => {
    dispatch({type: "FETCHING_WORD_INFO_START"});
    const options = {
        method: 'GET',
        url: `https://rapidapi.p.rapidapi.com/words/${word}`,
        headers: {
          'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
          'x-rapidapi-key': '04fc6db406msh66917c9c80b960dp1908e5jsn9c3093eedb68'
        }
      };
      axios.request(options).then( (response) => {
        console.log(response.data);
        dispatch({type: "FETCHING_WORD_INFO_SUCCESS", payload: {
            word: response.data.word,
            pronuntiation: response.data.pronuntiation.all,
            results: [{
                definition: response.data.results[0].definition,
                examples: response.data.results[0].examples[0],
                partOfSpeech: response.data.results[0].partOfSpeech,
                synonyms: response.data.results[0].synonyms[0]

            }],


        }})
    }).catch((error) => {
        console.error(error);
        dispatch({type: "FETCHING_WORD_INFO_ERROR", payload: error.response});
    });
}