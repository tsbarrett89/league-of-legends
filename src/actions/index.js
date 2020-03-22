import axios from 'axios'

export const FETCH_CHAMPIONS_START = "FETCH_CHAMPIONS_START"
export const ADD_CHAMPION = "ADD_CHAMPION"
export const FETCH_CHAMPIONS_SUCCESS = "FETCH_CHAMPIONS_SUCCESS"
export const FETCH_CHAMPIONS_FAILURE = "FETCH_CHAMPIONS_FAILURE"

export const fetchChampions = () => dispatch => {
    dispatch({ type: FETCH_CHAMPIONS_START })
    axios
        .get('http://ddragon.leagueoflegends.com/cdn/10.6.1/data/en_US/champion.json')
        .then(res => {
            console.log(res.data.data)
            for(const champion in res.data.data){
                dispatch({ type: ADD_CHAMPION, payload: res.data.data[champion]})
            }
            dispatch({ type: FETCH_CHAMPIONS_SUCCESS })
        })
        .catch(err => dispatch({ type: FETCH_CHAMPIONS_FAILURE, payload: `failed with a ${err.status} status code`}))
}