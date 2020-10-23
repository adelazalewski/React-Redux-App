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
        console.log("Response: ",response.data);
        console.log("first definition array: ", response.data.results[0]);
        console.log("word: ", response.data.word);
        console.log(response.data.pronunciation);
        let data = response.data.results[0] 
        data= {...data,
            pronunciation: response.data.pronunciation.all,
            word: response.data.word
        }
        dispatch({type: "FETCHING_WORD_INFO_SUCCESS", payload: [data]
            });


        })
    .catch((error) => {
        console.error(error);
        dispatch({type: "FETCHING_WORD_INFO_ERROR", payload: error.response});
    });
}