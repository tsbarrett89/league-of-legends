import axios from 'axios'

export const FETCH_CHAMPIONS_START = "FETCH_CHAMPIONS_START"
export const FETCH_CHAMPIONS_SUCCESS = "FETCH_CHAMPIONS_SUCCESS"
export const FETCH_CHAMPIONS_FAILURE = "FETCH_CHAMPIONS_FAILURE"

export const fetchChampions = () => dispatch => {
    dispatch({ type: FETCH_CHAMPIONS_START })
    axios
        .get('http://ddragon.leagueoflegends.com/cdn/10.6.1/data/en_US/champion.json')
        .then(res => {
            dispatch({ type: FETCH_CHAMPIONS_SUCCESS, payload: res.data.data })
        })
        .catch(err => dispatch({ type: FETCH_CHAMPIONS_FAILURE, payload: `failed with a ${err.status} status code`}))
}